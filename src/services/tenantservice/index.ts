import { Application } from 'express'
import { client } from '@app/adapters/fastapiadapter'
import helper from '@app/helpers/fastAPIXmlListHelper'
import {
  Address,
  Contact,
  EmailAddress,
  Fi2Address,
  Fi2Ids,
  Fi2Partner,
  Fi2Contact,
  Fi2Value,
  Fi2ValueUsage,
  PhoneNumber,
  Tenant,
} from './types'

const getSocialSecurityNumber = (ids: Fi2Ids): string | void => {
  const ssnNode = ids.fi2_id.filter((id: Fi2ValueUsage) => {
    return id.$.usage === 'Ssn'
  })

  if (ssnNode && ssnNode.length > 0) {
    return ssnNode[0]._
  } else {
    return undefined
  }
}

const getPart = (parts: Fi2Value[], partName: string) => {
  const partNode = parts.filter((part: Fi2Value) => {
    return part.fi2value_code[0] === partName
  })

  if (partNode && partNode.length > 0) {
    return partNode[0].fi2value_value[0]
  } else {
    return null
  }
}

const getAddressLine = (addressLines: Fi2ValueUsage[], usage: string) => {
  const line = addressLines.find(
    (line: Fi2ValueUsage) => line.$.usage === usage
  )

  return line ? line._ : ''
}

const addressTypes: { [index: string]: string } = {
  '03': 'Home Address',
  '05': 'Postal Address',
}

const getAddressType = (address: Fi2Address): string => {
  const typeCode: string | null = address.fi2addr_class[0].fi2class_code
    ? address.fi2addr_class[0].fi2class_code[0]
    : null

  if (typeCode) {
    return addressTypes[typeCode]
  } else {
    return 'Saknas'
  }
}

const getPhoneNumbers = (
  phoneNumbers: Fi2ValueUsage[]
): PhoneNumber[] | void => {
  if (!phoneNumbers) {
    return undefined
  }

  const transformedPhoneNumbers: PhoneNumber[] = phoneNumbers
    .map(
      (phoneNumber: Fi2ValueUsage): PhoneNumber => {
        return {
          type: phoneNumber.$.usage,
          number: phoneNumber._,
        }
      }
    )
    .filter((phoneNumber: PhoneNumber) => phoneNumber.number !== null)

  return transformedPhoneNumbers
}

const getEmailAddresses = (
  emailAddresses: Fi2ValueUsage[]
): EmailAddress[] | void => {
  if (!emailAddresses) {
    return undefined
  }

  const transformedEmailAddresses: EmailAddress[] = emailAddresses
    .map(
      (emailAddress: Fi2ValueUsage): EmailAddress => {
        return {
          type: emailAddress.$.usage,
          address: emailAddress._,
        }
      }
    )
    .filter((email: EmailAddress) => email.address !== null)

  return transformedEmailAddresses
}

const transformTenant = async (tenantRaw: Fi2Partner): Promise<Tenant> => {
  //console.log(JSON.stringify(tenantRaw, null, 2))

  const className = await helper.getNameFromClasslist(
    tenantRaw.fi2part_class[0]
  )
  const tenant: Tenant = {
    id: tenantRaw.$.id,
    socialSecurityNumber: getSocialSecurityNumber(tenantRaw.fi2part_ids[0]),
    changedBy: getPart(tenantRaw.fi2part_value, 'ChangedBy'),
    changeDate: getPart(tenantRaw.fi2part_value, 'ChangedDate'),
    createdBy: getPart(tenantRaw.fi2part_value, 'CreatedBy'),
    createDate: getPart(tenantRaw.fi2part_value, 'CreatedDate'),
    name: tenantRaw.fi2part_name ? tenantRaw.fi2part_name[0]._ : '',
    fullName: tenantRaw.fi2part_fullname[0],
    phoneNumbers: getPhoneNumbers(tenantRaw.fi2part_tel),
    emailAddresses: getEmailAddresses(tenantRaw.fi2part_email),
    addresses: tenantRaw.fi2part_address
      ? tenantRaw.fi2part_address.map(
          (address: Fi2Address): Address => {
            const transformedAddress: Address = {
              guid: address.$ ? address.$.guid : undefined,
              type: getAddressType(address),
              street: getAddressLine(address.fi2addr_addrline, 'Street'),
              box: getAddressLine(address.fi2addr_addrline, 'Box'),
              co: getAddressLine(address.fi2addr_addrline, 'Co'),
              attention: getAddressLine(address.fi2addr_addrline, 'Att'),
              zipCode: address.fi2addr_zipcode
                ? address.fi2addr_zipcode[0]
                : undefined,
              city: address.fi2addr_city ? address.fi2addr_city[0] : undefined,
              country: address.fi2addr_country
                ? address.fi2addr_country[0]
                : undefined,
            }

            return transformedAddress
          }
        )
      : undefined,
    contacts: tenantRaw.fi2part_contact
      ? tenantRaw.fi2part_contact.map(
          (contact: Fi2Contact): Contact => {
            const transformedContact: Contact = {
              type: contact.fi2contact_class[0].fi2class_code[0],
              firstName: contact.fi2cont_fname[0],
              lastName: contact.fi2cont_lname[0],
              fullName: contact.fi2cont_fullname[0],
              phoneNumbers: getPhoneNumbers(contact.fi2cont_tel),
              emailAddresses: getEmailAddresses(contact.fi2cont_email),
            }

            return transformedContact
          }
        )
      : undefined,
    className,
  }

  return tenant
}

const transformTenants = async (tenantsRaw: any) => {
  if (tenantsRaw.fi2simplemessage && tenantsRaw.fi2simplemessage.fi2partner) {
    return Promise.all(
      tenantsRaw.fi2simplemessage.fi2partner.map(transformTenant)
    )
  } else {
    return {}
  }
}

const getTenants = async () => {
  const result = await client.get(
    "fi2partner?filter=fi2part_class.fi2class_code:'16'"
  )
  return transformTenants(result)
}

export const routes = (app: Application) => {
  app.get('/tenants', async (_req, res) => res.json(await getTenants()))
}

export default {
  getTenants,
}
