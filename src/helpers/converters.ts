import { Fi2Address, Address, Fi2ValueUsage } from "@app/services/tenantservice/types"

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

const getAddressLine = (addressLines: Fi2ValueUsage[], usage: string) => {
  const line = addressLines.find((line: Fi2ValueUsage) => line.usage === usage)

  return line ? line.$t : ''
}

export const convertAddress = (fi2address: Fi2Address) : Address => {
  const transformedAddress: Address = {
    guid: fi2address.guid ? fi2address.guid : undefined,
    type: getAddressType(fi2address),
    street: getAddressLine(fi2address.fi2addr_addrline, 'Street'),
    box: getAddressLine(fi2address.fi2addr_addrline, 'Box'),
    co: getAddressLine(fi2address.fi2addr_addrline, 'Co'),
    attention: getAddressLine(fi2address.fi2addr_addrline, 'Att'),
    zipCode: fi2address.fi2addr_zipcode ? fi2address.fi2addr_zipcode : undefined,
    city: fi2address.fi2addr_city ? fi2address.fi2addr_city : undefined,
    country: fi2address.fi2addr_country ? fi2address.fi2addr_country : undefined,
  }

  return transformedAddress
}
