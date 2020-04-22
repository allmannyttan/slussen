import { Application, Request, Response } from 'express'
import { client } from '@app/adapters/fastapiadapter'
import helper from '@app/helpers/fastAPIXmlListHelper'
import {
  Address,
  Contact,
  EmailAddress,
  Fi2Address,
  Fi2Contact,
  Fi2Ids,
  Fi2Partner,
  Fi2PartnersResponse,
  Fi2Value,
  Fi2ValueUsage,
  PhoneNumber,
  Tenant,
  Fi2PartnerResponse,
} from './types'

const getSocialSecurityNumber = (ids: Fi2Ids): string => {
  const ssnNode = ids.fi2_id.filter((id: Fi2ValueUsage) => id.usage === 'Ssn')

  return ssnNode.length > 0 ? ssnNode[0].$t : ''
}

const getPart = (parts: Fi2Value[], partName: string): string => {
  const partNode = parts.filter((part: Fi2Value) => part.fi2value_code === partName)

  return partNode.length > 0 ? partNode[0].fi2value_value : ''
}

const getAddressLine = (addressLines: Fi2ValueUsage[], usage: string) => {
  const line = addressLines.find((line: Fi2ValueUsage) => line.usage === usage)

  return line ? line.$t : ''
}

const addressTypes: { [index: string]: string } = {
  '03': 'Home Address',
  '05': 'Postal Address',
}

const getAddressType = (address: Fi2Address): string => {
  const typeCode: string | null = address.fi2addr_class.fi2class_code
    ? address.fi2addr_class.fi2class_code
    : null

  if (typeCode) {
    return addressTypes[typeCode]
  } else {
    return ''
  }
}

const getPhoneNumbers = (phoneNumbers: Fi2ValueUsage[]): PhoneNumber[] => {
  if (!phoneNumbers) {
    return []
  }

  const transformedPhoneNumbers: PhoneNumber[] = phoneNumbers
    .map(
      (phoneNumber: Fi2ValueUsage): PhoneNumber => {
        return {
          type: phoneNumber.usage,
          number: phoneNumber.$t,
        }
      }
    )
    .filter((phoneNumber: PhoneNumber) => phoneNumber.number !== null)

  return transformedPhoneNumbers
}

const getEmailAddresses = (emailAddresses: Fi2ValueUsage[]): EmailAddress[] => {
  if (!emailAddresses) {
    return []
  }

  const transformedEmailAddresses: EmailAddress[] = emailAddresses
    .map(
      (emailAddress: Fi2ValueUsage): EmailAddress => {
        return {
          type: emailAddress.usage,
          address: emailAddress.$t,
        }
      }
    )
    .filter((email: EmailAddress) => email.address !== null)

  return transformedEmailAddresses
}

const transformTenant = async (tenantRaw: Fi2Partner): Promise<Tenant> => {
  const className = await helper.getNameFromClasslist(tenantRaw.fi2part_class)
  const tenant: Tenant = {
    id: tenantRaw.id,
    socialSecurityNumber: getSocialSecurityNumber(tenantRaw.fi2part_ids),
    changedBy: getPart(tenantRaw.fi2part_value, 'ChangedBy'),
    changeDate: getPart(tenantRaw.fi2part_value, 'ChangedDate'),
    createdBy: getPart(tenantRaw.fi2part_value, 'CreatedBy'),
    createDate: getPart(tenantRaw.fi2part_value, 'CreatedDate'),
    name: tenantRaw.fi2part_name ? tenantRaw.fi2part_name.$t : '',
    fullName: tenantRaw.fi2part_fullname,
    phoneNumbers: getPhoneNumbers(tenantRaw.fi2part_tel),
    emailAddresses: getEmailAddresses(tenantRaw.fi2part_email),
    addresses: tenantRaw.fi2part_address
      ? tenantRaw.fi2part_address.map(
          (address: Fi2Address): Address => {
            const transformedAddress: Address = {
              guid: address.guid ? address.guid : undefined,
              type: getAddressType(address),
              street: getAddressLine(address.fi2addr_addrline, 'Street'),
              box: getAddressLine(address.fi2addr_addrline, 'Box'),
              co: getAddressLine(address.fi2addr_addrline, 'Co'),
              attention: getAddressLine(address.fi2addr_addrline, 'Att'),
              zipCode: address.fi2addr_zipcode ? address.fi2addr_zipcode : undefined,
              city: address.fi2addr_city ? address.fi2addr_city : undefined,
              country: address.fi2addr_country ? address.fi2addr_country : undefined,
            }

            return transformedAddress
          }
        )
      : undefined,
    contact: tenantRaw.fi2part_contact
      ? {
          type: tenantRaw.fi2part_contact.fi2contact_class.fi2class_code,
          firstName: tenantRaw.fi2part_contact.fi2cont_fname,
          lastName: tenantRaw.fi2part_contact.fi2cont_lname,
          fullName: tenantRaw.fi2part_contact.fi2cont_fullname,
          phoneNumbers: getPhoneNumbers(tenantRaw.fi2part_contact.fi2cont_tel),
          emailAddresses: getEmailAddresses(tenantRaw.fi2part_contact.fi2cont_email),
        }
      : undefined,
    className,
  }

  return tenant
}

const transformTenants = async (tenantsRaw: Fi2PartnersResponse): Promise<Tenant[]> => {
  if (tenantsRaw.fi2simplemessage && tenantsRaw.fi2simplemessage.fi2partner) {
    return Promise.all(tenantsRaw.fi2simplemessage.fi2partner.map(transformTenant))
  } else {
    return []
  }
}

const getTenants = async (): Promise<Tenant[]> => {
  const result = await client.get("fi2partner?filter=fi2part_class.fi2class_code:'16'")
  return transformTenants(result)
}

const getTenant = async (id: string): Promise<Tenant> => {
  const tenant: Fi2PartnerResponse = await client.get(`fi2partner/${id}`)
  const result = await transformTenant(tenant.fi2partner)
  return result
}

export const routes = (app: Application) => {
  app.get('/tenants', async (_req: Request, res: Response) => res.json(await getTenants())),
    app.get('/tenants/:id', async (_req: Request, res: Response) =>
      res.json(await getTenant(_req.params.id))
    )
}

export default {
  getTenants,
  getTenant,
}
