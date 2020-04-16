export interface PhoneNumber {
    type: string,
    number: string
}

export interface EmailAddress {
    type: string,
    address: string
}

export interface Address {
    guid: string | void,
    type: string | void,
    street: string,
    box: string,
    co: string,
    attention: string,
    zipCode: string | undefined,
    city: string | undefined,
    country: string | undefined
}

export interface Contact {
    type: string,
    firstName: string,
    lastName: string,
    fullName: string,
    phoneNumbers: [PhoneNumber] | void,
    emailAddresses: [EmailAddress] | void
}

export interface Tenant {
    id: string,
    socialSecurityNumber: string | void,
    changedBy: string | void,
    changeDate: string | void,
    createdBy: string | void,
    createDate: string | void,
    name: string,
    fullName: string,
    phoneNumbers: [PhoneNumber] | void,
    emailAddresses: [EmailAddress] | void,
    addresses: [Address] | void,
    contacts: [Contact] | void,
    className: string
}