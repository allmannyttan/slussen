import { Application } from 'express'
import { client } from '../../adapters/fastapiadapter'
import helper from '../../helpers/fastAPIXmlListHelper'


const getTenants = async () => {
    const result = await client.get('fi2partner?filter=fi2part_class.fi2class_code:\'16\'')
    return transformTenants(result)
}

const getSocialSecurityNumber = (ids: any) => {
    const ssnNode = ids.fi2_id.filter((id: any) => { return id.$.usage === 'Ssn' })

    if (ssnNode && ssnNode.length > 0) {
        return ssnNode[0]._
    } else {
        return null
    }
}

const getPart = (parts: any, partName: string) => {
    const partNode = parts.filter((part: any) => { return part.fi2value_code[0] ===  partName})

    if (partNode && partNode.length > 0) {
        return partNode[0].fi2value_value[0]
    } else {
        return null
    }
}

const getAddressLine = (addressLines: any, usage: string) => {
    const line = addressLines.find((line: any) => line.$.usage === usage)

    return line ? line._ : null
}

const addressTypes: {[index: string]:string} = {
    '03': 'Home Address',
    '05': 'Postal Address'
}

const getAddressType = (address: any) : string | null => {
    const typeCode : string = address.fi2addr_class[0].fi2class_code ? address.fi2addr_class[0].fi2class_code[0] : null

    if (typeCode) {
        return addressTypes[typeCode]
    } else {
        return null
    }
}

const getPhoneNumbers = (phoneNumbers: any) => {
    return phoneNumbers ? phoneNumbers.map((phoneNumber: any) => {
        let number: {[index: string]:string} = {}

        number[phoneNumber.$.usage] = phoneNumber._

        if (phoneNumber._) {
            return number
        } else {
            return null
        }
    }).filter((number:any) => number !== null) : null
}

const getEmailAddresses = (emailAddresses: any) => {
    return emailAddresses ? emailAddresses.map((emailAddress: any) => {
        let email: {[index: string]:any} = {}

        email[emailAddress.$.usage] = emailAddress._

        if (emailAddress._) {
            return email
        } else {
            return null
        }
    }).filter((email:any) => email !== null) : null
}


const transformTenant = async (tenantRaw: any) => {
    const className = await helper.getNameFromClasslist(tenantRaw.fi2part_class[0])
    return {
        id: tenantRaw.$.id,
        socialSecurityNumber: getSocialSecurityNumber(tenantRaw.fi2part_ids[0]),
        changedBy: getPart(tenantRaw.fi2part_value, 'ChangedBy'),
        changeDate: getPart(tenantRaw.fi2part_value, 'ChangedDate'),
        createdBy: getPart(tenantRaw.fi2part_value, 'CreatedBy'),
        createDate: getPart(tenantRaw.fi2part_value, 'CreatedDate'),
        name: tenantRaw.fi2part_name ? tenantRaw.fi2part_name[0]._ : null,
        fullName: tenantRaw.fi2part_fullname[0],
        phoneNumbers: getPhoneNumbers(tenantRaw.fi2part_tel),
        emailAddresses: getEmailAddresses(tenantRaw.fi2part_email),
        addresses: tenantRaw.fi2part_address ? tenantRaw.fi2part_address.map((address: any) => {
            return {
                guid: address.$ ? address.$.guid : null,
                type: getAddressType(address),
                street: getAddressLine(address.fi2addr_addrline, 'Street'),
                box: getAddressLine(address.fi2addr_addrline, 'Box'),
                co: getAddressLine(address.fi2addr_addrline, 'Co'),
                attention: getAddressLine(address.fi2addr_addrline, 'Att'),
                zipCode: address.fi2addr_zipcode ? address.fi2addr_zipcode[0] : null,
                city: address.fi2addr_city ? address.fi2addr_city[0] : null,
                country: address.fi2addr_country ? address.fi2addr_country[0] : null
            }
        }) : null,
        contacts: tenantRaw.fi2part_contact ? tenantRaw.fi2part_contact.map((contact: any) => {
            return {
                type: contact.fi2contact_class[0].fi2class_code[0],
                firstName: contact.fi2cont_fname[0],
                lastName: contact.fi2cont_lname[0],
                fullName: contact.fi2cont_fullname[0],
                phoneNumbers: getPhoneNumbers(contact.fi2cont_tel),
                emailAddresses: getEmailAddresses(contact.fi2cont_email)
            }
        }) : null,
        className 
    }
}

const transformTenants = async (tenantsRaw: any) => {
    if (tenantsRaw.fi2simplemessage && tenantsRaw.fi2simplemessage.fi2partner) {
        return Promise.all(tenantsRaw.fi2simplemessage.fi2partner.map(transformTenant))
    } else {
        return {}
    }
}

export const routes = (app: Application) => {
  app.get('/tenant', async (_req, res) => res.json(await getTenants()))
}
