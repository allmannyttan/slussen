import helper from '../fastAPIXmlListHelper'
import { ListItem } from '../types'

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

  describe('#findCodeInListItems', () => {
    test('finds code in simple list', () => {
      const listItems: ListItem[] = [
        {
          'item-value': ['01'],
          'item-description': ['Fastighetsägare'],
          'item-definition': ['Ägare till fastighet'],
        },
        {
          'item-value': ['02'],
          'item-description': ['Byggnadsägare'],
          'item-definition': ['Ägare till byggnad'],
        },
        {
          'item-value': ['03'],
          'item-description': ['Energiexpert'],
          'item-definition': ['Av Boverket certifierad expert'],
        },
      ]
      const listItem = helper.findCodeInListItems('02', listItems)
      expect(listItem).toEqual({
        'item-value': ['02'],
        'item-description': ['Byggnadsägare'],
        'item-definition': ['Ägare till byggnad'],
      })
    })

    test('finds code in nested list', () => {
      const listItems: ListItem[] = [
        {
          'item-value': ['01'],
          'item-description': ['Fastighetsägare'],
          'item-definition': ['Ägare till fastighet'],
        },
        {
          'item-value': ['02'],
          'item-description': ['Byggnadsägare'],
          'item-definition': ['Ägare till byggnad'],
          'list-item': [
            {
              'item-value': ['022'],
              'item-description': ['Inner list item level 2'],
              'item-definition': [''],
              'list-item': [
                {
                  'item-value': ['0223'],
                  'item-description': ['Inner list item level 3'],
                  'item-definition': [''],
                },
              ],
            },
          ],
        },
        {
          'item-value': ['03'],
          'item-description': ['Energiexpert'],
          'item-definition': ['Av Boverket certifierad expert'],
        },
      ]
      let listItem = helper.findCodeInListItems('022', listItems)
      expect(listItem['item-description'][0]).toEqual('Inner list item level 2')

      listItem = helper.findCodeInListItems('0223', listItems)
      expect(listItem['item-description'][0]).toEqual('Inner list item level 3')

      listItem = helper.findCodeInListItems('03', listItems)
      expect(listItem['item-description'][0]).toEqual('Energiexpert')
    })

    test('returns undefined when list is empty', () => {
      const listItems: ListItem[] = []
      const listItem = helper.findCodeInListItems('test', listItems)
      expect(listItem).toBeUndefined()
    })

    test('returns undefined when code is missing', () => {
      const listItems: ListItem[] = [
        {
          'item-value': ['01'],
          'item-description': ['Fastighetsägare'],
          'item-definition': ['Ägare till fastighet'],
        },
      ]
      const listItem = helper.findCodeInListItems('test', listItems)
      expect(listItem).toBeUndefined()
    })
  })
})
