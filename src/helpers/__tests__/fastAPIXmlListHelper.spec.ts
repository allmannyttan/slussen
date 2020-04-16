import helper from '../fastAPIXmlListHelper'

/* eslint @typescript-eslint/camelcase: "off" */
describe('#fastAPIXmlListHelper', () => {
  test('gets name from class list', async () => {
    const node = {
      fi2class_code: ['16'],
      fi2class_scheme: [
        {
          fi2scheme_id: ['CA000_005_003'],
          fi2scheme_name: ['Klassificering FI2Partner'],
          fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
        },
      ],
    }
    const name = await helper.getNameFromClasslist(node)
    expect(name).toEqual('Hyresgäst')
  })

  test('gets name from value list', async () => {
    const node = {
      fi2value_code: ['Rooms'],
      fi2value_scheme: [
        {
          fi2scheme_id: ['VB001_003_001'],
          fi2scheme_name: ['Tillåtna värden på ett utrymmessystem'],
          fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_003_001.xml'],
        },
      ],
    }
    const name = await helper.getNameFromValuelist(node)
    expect(name).toEqual('Antal rum')
  })
})
