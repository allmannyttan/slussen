import helper from '../fastAPIXmlListHelper'

describe('#fastAPIXmlListHelper', () => {
  test('gets name', async () => {
    const node = {
      "fi2class_code": [
        "16"
      ],
      "fi2class_scheme": [
        {
          "fi2scheme_id": [
            "CA000_005_003"
          ],
          "fi2scheme_name": [
            "Klassificering FI2Partner"
          ],
          "fi2scheme_url": [
            "http://www.fi2.se/classlist/CA000_005_003.xml"
          ]
        }
      ]
    }
    const name = await helper.getNameFromClasslist(node)
    expect(name).toEqual('Hyresgäst')
  })
})