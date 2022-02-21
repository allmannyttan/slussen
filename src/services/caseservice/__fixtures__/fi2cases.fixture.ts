export default {
  "fi2simplemessage": {
    "xmlns:meta": "http://www.metadata.se/meta/1.10/meta-1.10",
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "xsi:schemaLocation": "http://www.fi2.se/schemas/1.31 http://www.fi2.se/schemas/1.31/fi2simplemessage.xsd",
    "xmlns": "http://www.fi2.se/schemas/1.31",
    "fi2messageheader": {
      "fi2sender": {
        "fi2reference": [
          { "fi2value_code": {}, "fi2value_value": {} },
          {
            "fi2value_code": "B",
            "fi2value_scheme": {
              "fi2scheme_id": "VA000_004_002",
              "fi2scheme_name": "Avsändarvärden fi2sender",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VA000_004_002.xml"
            },
            "fi2value_value": "fastAPI"
          }
        ],
        "fi2systemidentity": {}
      },
      "fi2version": "1.31",
      "fi2messageversion": "1.3.3",
      "fi2messageid": "18dba9de-b24a-4874-a744-6920422dadfa",
      "fi2messagedate": "2022-01-31T10:18:10.2276391+00:00",
      "fi2sessionidentity": {},
      "fi2messagecount": "1",
      "fi2messagetask": {
        "fi2verb": { "fi2class_code": {}, "fi2class_scheme": {} },
        "fi2noun": { "fi2class_code": {}, "fi2class_scheme": {} }
      },
      "fi2confirmation": "false"
    },
    "fi2case": [
      {
        "id": "12345",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "20" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-10-24T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-10-23T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-10-24T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Vattenkranen i köket läcker" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Vattenkranen i köket har börjat läcka vatten igår kväll"
          }
        ],
        "fi2case_notifier": [
          {
            "fi2actor_partner": {
              "id": "12345",
              "fi2part_ids": {
                "fi2_id": [
                  { "usage": "PartnerId", "$t": "12345" },
                  { "usage": "Ssn", "$t": "811010-1010" }
                ]
              },
              "fi2part_class": [
                {
                  "fi2class_code": "16",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_005_003",
                    "fi2scheme_name": "Klassificering FI2Partner",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                  }
                },
                {
                  "fi2class_code": "Person",
                  "fi2class_scheme": {
                    "fi2scheme_id": "Class_FI2Partner_Additional_01",
                    "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                    "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                  }
                }
              ],
              "fi2part_value": [
                {
                  "fi2value_code": "ChangedBy",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "Script"
                },
                {
                  "fi2value_code": "ChangedDate",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "2015-11-18T09:21:06"
                },
                {
                  "fi2value_code": "CreatedBy",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "Script"
                },
                {
                  "fi2value_code": "CreatedDate",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "2015-11-18T09:21:06"
                },
                {
                  "fi2value_code": "ETag",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "2015-11-18T09:21:06.660"
                }
              ],
              "fi2part_name": { "lang": "sv", "usage": "Default", "$t": "Anna" },
              "fi2part_fullname": "Anna Jansson",
              "fi2part_reference": "En referens.",
              "fi2part_orgidcode": "556964-5061",
              "fi2part_tel": [
                { "usage": "Home", "$t": "12345-123456" },
                { "usage": "Work", "$t": "12345-123456" },
                { "usage": "MobilePrivate", "$t": "12345-123456" },
                { "usage": "MobileWork", "$t": "12345-123456" },
                { "usage": "Fax", "$t": "12345-123456" }
              ],
              "fi2part_email": [
                { "usage": "Work", "$t": "12345@12345.com" },
                { "usage": "Private", "$t": "12345@12345.com" }
              ],
              "fi2part_web": "www.exempelurl12345.com",
              "fi2part_address": [
                {
                  "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                  "fi2addr_class": {
                    "fi2class_code": "03",
                    "fi2class_scheme": {
                      "fi2scheme_id": "CA000_007_003",
                      "fi2scheme_name": "Klassificering av adresser",
                      "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                    }
                  },
                  "fi2addr_descr": { "lang": "sv", "$t": "Exempeladress" },
                  "fi2addr_addrline": [
                    { "usage": "Street", "$t": "Norravägen 277" },
                    { "usage": "CO", "$t": "278" },
                    { "usage": "Box", "$t": "798" },
                    { "usage": "Att", "$t": "836" }
                  ],
                  "fi2addr_zipcode": "79111",
                  "fi2addr_city": "Askersund",
                  "fi2addr_country": "SE",
                  "fi2addr_region": "Norr",
                  "fi2addr_tel": [
                    { "usage": "Home", "$t": "00570239" },
                    { "usage": "Work", "$t": "05464241" },
                    { "usage": "MobilePrivate", "$t": "070851010" },
                    { "usage": "MobileWork", "$t": "070808788" },
                    { "usage": "Fax", "$t": "81388" }
                  ]
                },
                {
                  "guid": "AEB1A38F-A0BB-4132-A1A0-E7998A09C37D",
                  "fi2addr_class": {
                    "fi2class_code": "05",
                    "fi2class_scheme": {
                      "fi2scheme_id": "CA000_007_003",
                      "fi2scheme_name": "Klassificering av adresser",
                      "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                    }
                  },
                  "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                  "fi2addr_addrline": [
                    { "usage": "Street", "$t": "Exempelgatan 234" },
                    { "usage": "CO", "$t": "234" },
                    { "usage": "Box", "$t": "222" },
                    { "usage": "Att", "$t": "289" }
                  ],
                  "fi2addr_zipcode": "22233",
                  "fi2addr_city": "Yrboda",
                  "fi2addr_country": "SE",
                  "fi2addr_region": "Mitt",
                  "fi2addr_tel": [
                    { "usage": "Home", "$t": "20789655" },
                    { "usage": "Work", "$t": "20889656" },
                    { "usage": "MobilePrivate", "$t": "20789645" },
                    { "usage": "MobileWork", "$t": "20889636" },
                    { "usage": "Fax", "$t": "20789695" }
                  ]
                }
              ],
              "fi2part_contact": {
                "guid": "61676032-7619-499F-B0AC-75F1849EFA18",
                "fi2contact_class": {
                  "fi2class_code": "Primary",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CB001_006_001",
                    "fi2scheme_name": "Klassificering av kontaktinformation",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                  }
                },
                "fi2cont_fname": "Anna",
                "fi2cont_mname": "Eva",
                "fi2cont_lname": "Ibrahimovic",
                "fi2cont_fullname": "Anna Ibrahimovic",
                "fi2cont_tel": [
                  { "usage": "Home", "$t": "9566-463288" },
                  { "usage": "Work", "$t": "5938-191763" },
                  { "usage": "MobilePrivate", "$t": "070-9167130" },
                  { "usage": "MobileWork", "$t": "12345" },
                  { "usage": "Fax", "$t": "12345" }
                ],
                "fi2cont_email": [
                  { "usage": "Private", "$t": "Anna.Ibrahimovic@Hemma.se" },
                  { "usage": "Work", "$t": "Anna.Ibrahimovic@jobbet.se" }
                ],
                "fi2cont_address": {
                  "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                  "fi2addr_class": {
                    "fi2class_code": "03",
                    "fi2class_scheme": {
                      "fi2scheme_id": "CA000_007_003",
                      "fi2scheme_name": "Klassificering av adresser",
                      "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                    }
                  },
                  "fi2addr_descr": { "lang": "sv", "$t": "Exempeladress" },
                  "fi2addr_addrline": [
                    { "usage": "Street", "$t": "Norravägen 277" },
                    { "usage": "CO", "$t": "278" },
                    { "usage": "Box", "$t": "798" },
                    { "usage": "Att", "$t": "836" }
                  ],
                  "fi2addr_zipcode": "79111",
                  "fi2addr_city": "Askersund",
                  "fi2addr_country": "SE",
                  "fi2addr_region": "Norr",
                  "fi2addr_tel": [
                    { "usage": "Home", "$t": "00570239" },
                    { "usage": "Work", "$t": "05464241" },
                    { "usage": "MobilePrivate", "$t": "070851010" },
                    { "usage": "MobileWork", "$t": "070808788" },
                    { "usage": "Fax", "$t": "81388" }
                  ]
                }
              }
            },
            "fi2actor_role": {
              "fi2class_code": "Contact",
              "fi2class_scheme": {
                "fi2scheme_id": "Class_NotifierRole_01",
                "fi2scheme_name": "Klassificering av Notifier-roller",
                "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
              }
            }
          },
          {
            "fi2actor_partner": {
              "id": "123456",
              "fi2part_ids": {
                "fi2_id": [{ "usage": "PartnerId", "$t": "123456" }, { "usage": "Ssn" }]
              },
              "fi2part_class": [
                {
                  "fi2class_code": "16",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_005_003",
                    "fi2scheme_name": "Klassificering FI2Partner",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                  }
                },
                {
                  "fi2class_code": "Company",
                  "fi2class_scheme": {
                    "fi2scheme_id": "Class_FI2Partner_Additional_01",
                    "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                    "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                  }
                }
              ],
              "fi2part_value": [
                {
                  "fi2value_code": "ChangedBy",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "Script"
                },
                {
                  "fi2value_code": "ChangedDate",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "2016-05-12T12:03:17"
                },
                {
                  "fi2value_code": "CreatedBy",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "Script"
                },
                {
                  "fi2value_code": "CreatedDate",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "2016-05-12T12:03:17"
                },
                {
                  "fi2value_code": "ETag",
                  "fi2value_scheme": {
                    "fi2scheme_id": "VB001_005_001",
                    "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                    "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                  },
                  "fi2value_value": "2016-05-12T12:03:17.327"
                }
              ],
              "fi2part_name": [
                { "lang": "sv", "usage": "Default", "$t": "SolutionXperts" },
                { "lang": "sv", "usage": "OrgName", "$t": "Solution Experts AB" }
              ],
              "fi2part_fullname": "Solution Experts AB",
              "fi2part_reference": {},
              "fi2part_orgidcode": "556964-5061",
              "fi2part_tel": [
                { "usage": "Home" },
                { "usage": "Work", "$t": "013-122492" },
                { "usage": "MobilePrivate" },
                { "usage": "MobileWork", "$t": "0123-456789" },
                { "usage": "Fax", "$t": "0123-456789" }
              ],
              "fi2part_email": [
                { "usage": "Work" },
                { "usage": "Private", "$t": "info@solutionxperts.se" }
              ],
              "fi2part_web": "www.solutionxperts.se",
              "fi2part_address": [
                {
                  "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                  "fi2addr_class": {
                    "fi2class_code": "03",
                    "fi2class_scheme": {
                      "fi2scheme_id": "CA000_007_003",
                      "fi2scheme_name": "Klassificering av adresser",
                      "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                    }
                  },
                  "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                  "fi2addr_addrline": [
                    { "usage": "Street", "$t": "Hallonstigen 28" },
                    { "usage": "CO", "$t": "178" },
                    { "usage": "Box", "$t": "733" },
                    { "usage": "Att", "$t": "346" }
                  ],
                  "fi2addr_zipcode": "32966",
                  "fi2addr_city": "Luleå",
                  "fi2addr_country": "SE",
                  "fi2addr_region": "Mitt",
                  "fi2addr_tel": [
                    { "usage": "Home", "$t": "06496744" },
                    { "usage": "Work", "$t": "04345685" },
                    { "usage": "MobilePrivate", "$t": "070337895" },
                    { "usage": "MobileWork", "$t": "070643611" },
                    { "usage": "Fax", "$t": "58841" }
                  ]
                },
                {
                  "guid": "D7166B33-0690-461C-9E10-4746E5774C66",
                  "fi2addr_class": {
                    "fi2class_code": "05",
                    "fi2class_scheme": {
                      "fi2scheme_id": "CA000_007_003",
                      "fi2scheme_name": "Klassificering av adresser",
                      "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                    }
                  },
                  "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                  "fi2addr_addrline": [
                    { "usage": "Street", "$t": "Exempelgatan 236" },
                    { "usage": "CO", "$t": "264" },
                    { "usage": "Box", "$t": "262" },
                    { "usage": "Att", "$t": "269" }
                  ],
                  "fi2addr_zipcode": "22633",
                  "fi2addr_city": "Yrboda",
                  "fi2addr_country": "SE",
                  "fi2addr_region": "Mitt",
                  "fi2addr_tel": [
                    { "usage": "Home", "$t": "20689655" },
                    { "usage": "Work", "$t": "20869656" },
                    { "usage": "MobilePrivate", "$t": "20769645" },
                    { "usage": "MobileWork", "$t": "20869636" },
                    { "usage": "Fax", "$t": "20769695" }
                  ]
                }
              ],
              "fi2part_contact": {
                "guid": "3ED1536A-4186-484E-A6B9-3B961B2E6A69",
                "fi2contact_class": {
                  "fi2class_code": "Primary",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CB001_006_001",
                    "fi2scheme_name": "Klassificering av kontaktinformation",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                  }
                },
                "fi2cont_fname": "Marcus",
                "fi2cont_mname": {},
                "fi2cont_lname": "Brodd",
                "fi2cont_fullname": "Marcus Brodd",
                "fi2cont_tel": [
                  { "usage": "Home" },
                  { "usage": "Work", "$t": "0123-456789" },
                  { "usage": "MobilePrivate" },
                  { "usage": "MobileWork", "$t": "0123-456789" },
                  { "usage": "Fax", "$t": "0123-456789" }
                ],
                "fi2cont_email": [
                  { "usage": "Private" },
                  { "usage": "Work", "$t": "marcus.brodd@solutionxperts.se" }
                ],
                "fi2cont_address": {
                  "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                  "fi2addr_class": {
                    "fi2class_code": "03",
                    "fi2class_scheme": {
                      "fi2scheme_id": "CA000_007_003",
                      "fi2scheme_name": "Klassificering av adresser",
                      "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                    }
                  },
                  "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                  "fi2addr_addrline": [
                    { "usage": "Street", "$t": "Hallonstigen 28" },
                    { "usage": "CO", "$t": "178" },
                    { "usage": "Box", "$t": "733" },
                    { "usage": "Att", "$t": "346" }
                  ],
                  "fi2addr_zipcode": "32966",
                  "fi2addr_city": "Luleå",
                  "fi2addr_country": "SE",
                  "fi2addr_region": "Mitt",
                  "fi2addr_tel": [
                    { "usage": "Home", "$t": "06496744" },
                    { "usage": "Work", "$t": "04345685" },
                    { "usage": "MobilePrivate", "$t": "070337895" },
                    { "usage": "MobileWork", "$t": "070643611" },
                    { "usage": "Fax", "$t": "58841" }
                  ]
                }
              }
            },
            "fi2actor_role": {
              "fi2class_code": "Tenant",
              "fi2class_scheme": {
                "fi2scheme_id": "Class_NotifierRole_01",
                "fi2scheme_name": "Klassificering av Notifier-roller",
                "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
              }
            }
          }
        ],
        "fi2case_registrationdate": "2018-10-16",
        "fi2case_registrar": "Per Friberg",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Pending",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": [
          {
            "fi2item": "fi2property",
            "fi2parent_ids": { "fi2_id": ["12345"] },
            "fi2parent_item": {}
          },
          {
            "fi2item": "fi2structure",
            "fi2parent_ids": { "fi2_id": ["12345"] },
            "fi2parent_item": {}
          },
          {
            "fi2item": "fi2spatisystem",
            "fi2parent_ids": { "fi2_id": ["OBJ-11020301"] },
            "fi2parent_item": {}
          },
          {
            "fi2item": "fi2partner",
            "fi2parent_ids": { "fi2_id": ["12345"] },
            "fi2parent_item": {}
          }
        ]
      },
      {
        "id": "123456",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "10" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-21T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-19T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-21T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Det är nerskräpat i trappuppgången" },
          { "lang": "sv", "usage": "Comment", "$t": "Det ligger en massa skräp i trappuppgången" }
        ],
        "fi2case_notifier": {
          "fi2actor_partner": {
            "id": "123456",
            "fi2part_ids": {
              "fi2_id": [{ "usage": "PartnerId", "$t": "123456" }, { "usage": "Ssn" }]
            },
            "fi2part_class": [
              {
                "fi2class_code": "16",
                "fi2class_scheme": {
                  "fi2scheme_id": "CA000_005_003",
                  "fi2scheme_name": "Klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                }
              },
              {
                "fi2class_code": "Company",
                "fi2class_scheme": {
                  "fi2scheme_id": "Class_FI2Partner_Additional_01",
                  "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                }
              }
            ],
            "fi2part_value": [
              {
                "fi2value_code": "ChangedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "ChangedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17"
              },
              {
                "fi2value_code": "CreatedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "CreatedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17"
              },
              {
                "fi2value_code": "ETag",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17.327"
              }
            ],
            "fi2part_name": [
              { "lang": "sv", "usage": "Default", "$t": "SolutionXperts" },
              { "lang": "sv", "usage": "OrgName", "$t": "Solution Experts AB" }
            ],
            "fi2part_fullname": "Solution Experts AB",
            "fi2part_reference": {},
            "fi2part_orgidcode": "556964-5061",
            "fi2part_tel": [
              { "usage": "Home" },
              { "usage": "Work", "$t": "013-122492" },
              { "usage": "MobilePrivate" },
              { "usage": "MobileWork", "$t": "0123-456789" },
              { "usage": "Fax", "$t": "0123-456789" }
            ],
            "fi2part_email": [
              { "usage": "Work" },
              { "usage": "Private", "$t": "info@solutionxperts.se" }
            ],
            "fi2part_web": "www.solutionxperts.se",
            "fi2part_address": [
              {
                "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Hallonstigen 28" },
                  { "usage": "CO", "$t": "178" },
                  { "usage": "Box", "$t": "733" },
                  { "usage": "Att", "$t": "346" }
                ],
                "fi2addr_zipcode": "32966",
                "fi2addr_city": "Luleå",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "06496744" },
                  { "usage": "Work", "$t": "04345685" },
                  { "usage": "MobilePrivate", "$t": "070337895" },
                  { "usage": "MobileWork", "$t": "070643611" },
                  { "usage": "Fax", "$t": "58841" }
                ]
              },
              {
                "guid": "D7166B33-0690-461C-9E10-4746E5774C66",
                "fi2addr_class": {
                  "fi2class_code": "05",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Exempelgatan 236" },
                  { "usage": "CO", "$t": "264" },
                  { "usage": "Box", "$t": "262" },
                  { "usage": "Att", "$t": "269" }
                ],
                "fi2addr_zipcode": "22633",
                "fi2addr_city": "Yrboda",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "20689655" },
                  { "usage": "Work", "$t": "20869656" },
                  { "usage": "MobilePrivate", "$t": "20769645" },
                  { "usage": "MobileWork", "$t": "20869636" },
                  { "usage": "Fax", "$t": "20769695" }
                ]
              }
            ],
            "fi2part_contact": {
              "guid": "3ED1536A-4186-484E-A6B9-3B961B2E6A69",
              "fi2contact_class": {
                "fi2class_code": "Primary",
                "fi2class_scheme": {
                  "fi2scheme_id": "CB001_006_001",
                  "fi2scheme_name": "Klassificering av kontaktinformation",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                }
              },
              "fi2cont_fname": "Marcus",
              "fi2cont_mname": {},
              "fi2cont_lname": "Brodd",
              "fi2cont_fullname": "Marcus Brodd",
              "fi2cont_tel": [
                { "usage": "Home" },
                { "usage": "Work", "$t": "0123-456789" },
                { "usage": "MobilePrivate" },
                { "usage": "MobileWork", "$t": "0123-456789" },
                { "usage": "Fax", "$t": "0123-456789" }
              ],
              "fi2cont_email": [
                { "usage": "Private" },
                { "usage": "Work", "$t": "marcus.brodd@solutionxperts.se" }
              ],
              "fi2cont_address": {
                "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Hallonstigen 28" },
                  { "usage": "CO", "$t": "178" },
                  { "usage": "Box", "$t": "733" },
                  { "usage": "Att", "$t": "346" }
                ],
                "fi2addr_zipcode": "32966",
                "fi2addr_city": "Luleå",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "06496744" },
                  { "usage": "Work", "$t": "04345685" },
                  { "usage": "MobilePrivate", "$t": "070337895" },
                  { "usage": "MobileWork", "$t": "070643611" },
                  { "usage": "Fax", "$t": "58841" }
                ]
              }
            }
          },
          "fi2actor_role": {
            "fi2class_code": "Tenant",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_NotifierRole_01",
              "fi2scheme_name": "Klassificering av Notifier-roller",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
            }
          }
        },
        "fi2case_registrationdate": "2018-03-18",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Annulled",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2structure",
          "fi2parent_ids": { "fi2_id": ["BUILD-0502"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "CASE-1",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "68" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2019-05-19T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2019-05-18T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2019-05-19T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Det är nerskräpat i trappuppgången" },
          { "lang": "sv", "usage": "Comment", "$t": "Det ligger en massa skräp i trappuppgången" }
        ],
        "fi2case_notifier": {
          "fi2actor_partner": {
            "id": "123456",
            "fi2part_ids": {
              "fi2_id": [{ "usage": "PartnerId", "$t": "123456" }, { "usage": "Ssn" }]
            },
            "fi2part_class": [
              {
                "fi2class_code": "16",
                "fi2class_scheme": {
                  "fi2scheme_id": "CA000_005_003",
                  "fi2scheme_name": "Klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                }
              },
              {
                "fi2class_code": "Company",
                "fi2class_scheme": {
                  "fi2scheme_id": "Class_FI2Partner_Additional_01",
                  "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                }
              }
            ],
            "fi2part_value": [
              {
                "fi2value_code": "ChangedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "ChangedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17"
              },
              {
                "fi2value_code": "CreatedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "CreatedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17"
              },
              {
                "fi2value_code": "ETag",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17.327"
              }
            ],
            "fi2part_name": [
              { "lang": "sv", "usage": "Default", "$t": "SolutionXperts" },
              { "lang": "sv", "usage": "OrgName", "$t": "Solution Experts AB" }
            ],
            "fi2part_fullname": "Solution Experts AB",
            "fi2part_reference": {},
            "fi2part_orgidcode": "556964-5061",
            "fi2part_tel": [
              { "usage": "Home" },
              { "usage": "Work", "$t": "013-122492" },
              { "usage": "MobilePrivate" },
              { "usage": "MobileWork", "$t": "0123-456789" },
              { "usage": "Fax", "$t": "0123-456789" }
            ],
            "fi2part_email": [
              { "usage": "Work" },
              { "usage": "Private", "$t": "info@solutionxperts.se" }
            ],
            "fi2part_web": "www.solutionxperts.se",
            "fi2part_address": [
              {
                "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Hallonstigen 28" },
                  { "usage": "CO", "$t": "178" },
                  { "usage": "Box", "$t": "733" },
                  { "usage": "Att", "$t": "346" }
                ],
                "fi2addr_zipcode": "32966",
                "fi2addr_city": "Luleå",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "06496744" },
                  { "usage": "Work", "$t": "04345685" },
                  { "usage": "MobilePrivate", "$t": "070337895" },
                  { "usage": "MobileWork", "$t": "070643611" },
                  { "usage": "Fax", "$t": "58841" }
                ]
              },
              {
                "guid": "D7166B33-0690-461C-9E10-4746E5774C66",
                "fi2addr_class": {
                  "fi2class_code": "05",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Exempelgatan 236" },
                  { "usage": "CO", "$t": "264" },
                  { "usage": "Box", "$t": "262" },
                  { "usage": "Att", "$t": "269" }
                ],
                "fi2addr_zipcode": "22633",
                "fi2addr_city": "Yrboda",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "20689655" },
                  { "usage": "Work", "$t": "20869656" },
                  { "usage": "MobilePrivate", "$t": "20769645" },
                  { "usage": "MobileWork", "$t": "20869636" },
                  { "usage": "Fax", "$t": "20769695" }
                ]
              }
            ],
            "fi2part_contact": {
              "guid": "3ED1536A-4186-484E-A6B9-3B961B2E6A69",
              "fi2contact_class": {
                "fi2class_code": "Primary",
                "fi2class_scheme": {
                  "fi2scheme_id": "CB001_006_001",
                  "fi2scheme_name": "Klassificering av kontaktinformation",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                }
              },
              "fi2cont_fname": "Marcus",
              "fi2cont_mname": {},
              "fi2cont_lname": "Brodd",
              "fi2cont_fullname": "Marcus Brodd",
              "fi2cont_tel": [
                { "usage": "Home" },
                { "usage": "Work", "$t": "0123-456789" },
                { "usage": "MobilePrivate" },
                { "usage": "MobileWork", "$t": "0123-456789" },
                { "usage": "Fax", "$t": "0123-456789" }
              ],
              "fi2cont_email": [
                { "usage": "Private" },
                { "usage": "Work", "$t": "marcus.brodd@solutionxperts.se" }
              ],
              "fi2cont_address": {
                "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Hallonstigen 28" },
                  { "usage": "CO", "$t": "178" },
                  { "usage": "Box", "$t": "733" },
                  { "usage": "Att", "$t": "346" }
                ],
                "fi2addr_zipcode": "32966",
                "fi2addr_city": "Luleå",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "06496744" },
                  { "usage": "Work", "$t": "04345685" },
                  { "usage": "MobilePrivate", "$t": "070337895" },
                  { "usage": "MobileWork", "$t": "070643611" },
                  { "usage": "Fax", "$t": "58841" }
                ]
              }
            }
          },
          "fi2actor_role": {
            "fi2class_code": "Tenant",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_NotifierRole_01",
              "fi2scheme_name": "Klassificering av Notifier-roller",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
            }
          }
        },
        "fi2case_registrationdate": "2019-05-14",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Annulled",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2structure",
          "fi2parent_ids": { "fi2_id": ["BUILD-0502"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "CASE-10",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "79" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-08-11T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-08-05T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-08-11T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Krossad fönsterruta till trappuppgången" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Någon har krossat rutorna på ingången till lägenheten"
          }
        ],
        "fi2case_notifier": {
          "fi2actor_partner": {
            "id": "123456",
            "fi2part_ids": {
              "fi2_id": [{ "usage": "PartnerId", "$t": "123456" }, { "usage": "Ssn" }]
            },
            "fi2part_class": [
              {
                "fi2class_code": "16",
                "fi2class_scheme": {
                  "fi2scheme_id": "CA000_005_003",
                  "fi2scheme_name": "Klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                }
              },
              {
                "fi2class_code": "Company",
                "fi2class_scheme": {
                  "fi2scheme_id": "Class_FI2Partner_Additional_01",
                  "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                }
              }
            ],
            "fi2part_value": [
              {
                "fi2value_code": "ChangedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "ChangedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17"
              },
              {
                "fi2value_code": "CreatedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "CreatedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17"
              },
              {
                "fi2value_code": "ETag",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17.327"
              }
            ],
            "fi2part_name": [
              { "lang": "sv", "usage": "Default", "$t": "SolutionXperts" },
              { "lang": "sv", "usage": "OrgName", "$t": "Solution Experts AB" }
            ],
            "fi2part_fullname": "Solution Experts AB",
            "fi2part_reference": {},
            "fi2part_orgidcode": "556964-5061",
            "fi2part_tel": [
              { "usage": "Home" },
              { "usage": "Work", "$t": "013-122492" },
              { "usage": "MobilePrivate" },
              { "usage": "MobileWork", "$t": "0123-456789" },
              { "usage": "Fax", "$t": "0123-456789" }
            ],
            "fi2part_email": [
              { "usage": "Work" },
              { "usage": "Private", "$t": "info@solutionxperts.se" }
            ],
            "fi2part_web": "www.solutionxperts.se",
            "fi2part_address": [
              {
                "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Hallonstigen 28" },
                  { "usage": "CO", "$t": "178" },
                  { "usage": "Box", "$t": "733" },
                  { "usage": "Att", "$t": "346" }
                ],
                "fi2addr_zipcode": "32966",
                "fi2addr_city": "Luleå",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "06496744" },
                  { "usage": "Work", "$t": "04345685" },
                  { "usage": "MobilePrivate", "$t": "070337895" },
                  { "usage": "MobileWork", "$t": "070643611" },
                  { "usage": "Fax", "$t": "58841" }
                ]
              },
              {
                "guid": "D7166B33-0690-461C-9E10-4746E5774C66",
                "fi2addr_class": {
                  "fi2class_code": "05",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Exempelgatan 236" },
                  { "usage": "CO", "$t": "264" },
                  { "usage": "Box", "$t": "262" },
                  { "usage": "Att", "$t": "269" }
                ],
                "fi2addr_zipcode": "22633",
                "fi2addr_city": "Yrboda",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "20689655" },
                  { "usage": "Work", "$t": "20869656" },
                  { "usage": "MobilePrivate", "$t": "20769645" },
                  { "usage": "MobileWork", "$t": "20869636" },
                  { "usage": "Fax", "$t": "20769695" }
                ]
              }
            ],
            "fi2part_contact": {
              "guid": "3ED1536A-4186-484E-A6B9-3B961B2E6A69",
              "fi2contact_class": {
                "fi2class_code": "Primary",
                "fi2class_scheme": {
                  "fi2scheme_id": "CB001_006_001",
                  "fi2scheme_name": "Klassificering av kontaktinformation",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                }
              },
              "fi2cont_fname": "Marcus",
              "fi2cont_mname": {},
              "fi2cont_lname": "Brodd",
              "fi2cont_fullname": "Marcus Brodd",
              "fi2cont_tel": [
                { "usage": "Home" },
                { "usage": "Work", "$t": "0123-456789" },
                { "usage": "MobilePrivate" },
                { "usage": "MobileWork", "$t": "0123-456789" },
                { "usage": "Fax", "$t": "0123-456789" }
              ],
              "fi2cont_email": [
                { "usage": "Private" },
                { "usage": "Work", "$t": "marcus.brodd@solutionxperts.se" }
              ],
              "fi2cont_address": {
                "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Hallonstigen 28" },
                  { "usage": "CO", "$t": "178" },
                  { "usage": "Box", "$t": "733" },
                  { "usage": "Att", "$t": "346" }
                ],
                "fi2addr_zipcode": "32966",
                "fi2addr_city": "Luleå",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "06496744" },
                  { "usage": "Work", "$t": "04345685" },
                  { "usage": "MobilePrivate", "$t": "070337895" },
                  { "usage": "MobileWork", "$t": "070643611" },
                  { "usage": "Fax", "$t": "58841" }
                ]
              }
            }
          },
          "fi2actor_role": {
            "fi2class_code": "Tenant",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_NotifierRole_01",
              "fi2scheme_name": "Klassificering av Notifier-roller",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
            }
          }
        },
        "fi2case_registrationdate": "2018-08-02",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Pending",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2structure",
          "fi2parent_ids": { "fi2_id": ["BUILD-1301"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "CASE-11",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "72" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-02-20T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-02-13T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-02-20T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Vattenläcka i badrummet" },
          { "lang": "sv", "usage": "Comment", "$t": "En Vattenläcka har uppstått i lägenheten" }
        ],
        "fi2case_registrationdate": "2018-02-11",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Created",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2spatisystem",
          "fi2parent_ids": { "fi2_id": ["OBJ-13010302"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "CASE-12",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "67" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-04-04T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-31T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-04-04T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Klotter på fasaden" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Någon eller några har klottrat på fasaden på lägenheten"
          }
        ],
        "fi2case_notifier": {
          "fi2actor_partner": {
            "id": "123456",
            "fi2part_ids": {
              "fi2_id": [{ "usage": "PartnerId", "$t": "123456" }, { "usage": "Ssn" }]
            },
            "fi2part_class": [
              {
                "fi2class_code": "16",
                "fi2class_scheme": {
                  "fi2scheme_id": "CA000_005_003",
                  "fi2scheme_name": "Klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                }
              },
              {
                "fi2class_code": "Company",
                "fi2class_scheme": {
                  "fi2scheme_id": "Class_FI2Partner_Additional_01",
                  "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                }
              }
            ],
            "fi2part_value": [
              {
                "fi2value_code": "ChangedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "ChangedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17"
              },
              {
                "fi2value_code": "CreatedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "CreatedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17"
              },
              {
                "fi2value_code": "ETag",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2016-05-12T12:03:17.327"
              }
            ],
            "fi2part_name": [
              { "lang": "sv", "usage": "Default", "$t": "SolutionXperts" },
              { "lang": "sv", "usage": "OrgName", "$t": "Solution Experts AB" }
            ],
            "fi2part_fullname": "Solution Experts AB",
            "fi2part_reference": {},
            "fi2part_orgidcode": "556964-5061",
            "fi2part_tel": [
              { "usage": "Home" },
              { "usage": "Work", "$t": "013-122492" },
              { "usage": "MobilePrivate" },
              { "usage": "MobileWork", "$t": "0123-456789" },
              { "usage": "Fax", "$t": "0123-456789" }
            ],
            "fi2part_email": [
              { "usage": "Work" },
              { "usage": "Private", "$t": "info@solutionxperts.se" }
            ],
            "fi2part_web": "www.solutionxperts.se",
            "fi2part_address": [
              {
                "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Hallonstigen 28" },
                  { "usage": "CO", "$t": "178" },
                  { "usage": "Box", "$t": "733" },
                  { "usage": "Att", "$t": "346" }
                ],
                "fi2addr_zipcode": "32966",
                "fi2addr_city": "Luleå",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "06496744" },
                  { "usage": "Work", "$t": "04345685" },
                  { "usage": "MobilePrivate", "$t": "070337895" },
                  { "usage": "MobileWork", "$t": "070643611" },
                  { "usage": "Fax", "$t": "58841" }
                ]
              },
              {
                "guid": "D7166B33-0690-461C-9E10-4746E5774C66",
                "fi2addr_class": {
                  "fi2class_code": "05",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Exempelgatan 236" },
                  { "usage": "CO", "$t": "264" },
                  { "usage": "Box", "$t": "262" },
                  { "usage": "Att", "$t": "269" }
                ],
                "fi2addr_zipcode": "22633",
                "fi2addr_city": "Yrboda",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "20689655" },
                  { "usage": "Work", "$t": "20869656" },
                  { "usage": "MobilePrivate", "$t": "20769645" },
                  { "usage": "MobileWork", "$t": "20869636" },
                  { "usage": "Fax", "$t": "20769695" }
                ]
              }
            ],
            "fi2part_contact": {
              "guid": "3ED1536A-4186-484E-A6B9-3B961B2E6A69",
              "fi2contact_class": {
                "fi2class_code": "Primary",
                "fi2class_scheme": {
                  "fi2scheme_id": "CB001_006_001",
                  "fi2scheme_name": "Klassificering av kontaktinformation",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                }
              },
              "fi2cont_fname": "Marcus",
              "fi2cont_mname": {},
              "fi2cont_lname": "Brodd",
              "fi2cont_fullname": "Marcus Brodd",
              "fi2cont_tel": [
                { "usage": "Home" },
                { "usage": "Work", "$t": "0123-456789" },
                { "usage": "MobilePrivate" },
                { "usage": "MobileWork", "$t": "0123-456789" },
                { "usage": "Fax", "$t": "0123-456789" }
              ],
              "fi2cont_email": [
                { "usage": "Private" },
                { "usage": "Work", "$t": "marcus.brodd@solutionxperts.se" }
              ],
              "fi2cont_address": {
                "guid": "F9217EBF-4E00-4D17-A24C-AA55DCD33A53",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postadress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Hallonstigen 28" },
                  { "usage": "CO", "$t": "178" },
                  { "usage": "Box", "$t": "733" },
                  { "usage": "Att", "$t": "346" }
                ],
                "fi2addr_zipcode": "32966",
                "fi2addr_city": "Luleå",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "06496744" },
                  { "usage": "Work", "$t": "04345685" },
                  { "usage": "MobilePrivate", "$t": "070337895" },
                  { "usage": "MobileWork", "$t": "070643611" },
                  { "usage": "Fax", "$t": "58841" }
                ]
              }
            }
          },
          "fi2actor_role": {
            "fi2class_code": "Tenant",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_NotifierRole_01",
              "fi2scheme_name": "Klassificering av Notifier-roller",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
            }
          }
        },
        "fi2case_registrationdate": "2018-03-24",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Comleted",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2property",
          "fi2parent_ids": { "fi2_id": ["PROP-7"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "CASE-2",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "89" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-11-01T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-10-31T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-11-01T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Klotter på fasaden" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Någon eller några har klottrat på fasaden på lägenheten"
          }
        ],
        "fi2case_notifier": {
          "fi2actor_partner": {
            "id": "12345",
            "fi2part_ids": {
              "fi2_id": [
                { "usage": "PartnerId", "$t": "12345" },
                { "usage": "Ssn", "$t": "811010-1010" }
              ]
            },
            "fi2part_class": [
              {
                "fi2class_code": "16",
                "fi2class_scheme": {
                  "fi2scheme_id": "CA000_005_003",
                  "fi2scheme_name": "Klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                }
              },
              {
                "fi2class_code": "Person",
                "fi2class_scheme": {
                  "fi2scheme_id": "Class_FI2Partner_Additional_01",
                  "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                }
              }
            ],
            "fi2part_value": [
              {
                "fi2value_code": "ChangedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "ChangedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06"
              },
              {
                "fi2value_code": "CreatedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "CreatedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06"
              },
              {
                "fi2value_code": "ETag",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06.660"
              }
            ],
            "fi2part_name": { "lang": "sv", "usage": "Default", "$t": "Anna" },
            "fi2part_fullname": "Anna Jansson",
            "fi2part_reference": "En referens.",
            "fi2part_orgidcode": "556964-5061",
            "fi2part_tel": [
              { "usage": "Home", "$t": "12345-123456" },
              { "usage": "Work", "$t": "12345-123456" },
              { "usage": "MobilePrivate", "$t": "12345-123456" },
              { "usage": "MobileWork", "$t": "12345-123456" },
              { "usage": "Fax", "$t": "12345-123456" }
            ],
            "fi2part_email": [
              { "usage": "Work", "$t": "12345@12345.com" },
              { "usage": "Private", "$t": "12345@12345.com" }
            ],
            "fi2part_web": "www.exempelurl12345.com",
            "fi2part_address": [
              {
                "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Norravägen 277" },
                  { "usage": "CO", "$t": "278" },
                  { "usage": "Box", "$t": "798" },
                  { "usage": "Att", "$t": "836" }
                ],
                "fi2addr_zipcode": "79111",
                "fi2addr_city": "Askersund",
                "fi2addr_country": "SE",
                "fi2addr_region": "Norr",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "00570239" },
                  { "usage": "Work", "$t": "05464241" },
                  { "usage": "MobilePrivate", "$t": "070851010" },
                  { "usage": "MobileWork", "$t": "070808788" },
                  { "usage": "Fax", "$t": "81388" }
                ]
              },
              {
                "guid": "AEB1A38F-A0BB-4132-A1A0-E7998A09C37D",
                "fi2addr_class": {
                  "fi2class_code": "05",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Exempelgatan 234" },
                  { "usage": "CO", "$t": "234" },
                  { "usage": "Box", "$t": "222" },
                  { "usage": "Att", "$t": "289" }
                ],
                "fi2addr_zipcode": "22233",
                "fi2addr_city": "Yrboda",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "20789655" },
                  { "usage": "Work", "$t": "20889656" },
                  { "usage": "MobilePrivate", "$t": "20789645" },
                  { "usage": "MobileWork", "$t": "20889636" },
                  { "usage": "Fax", "$t": "20789695" }
                ]
              }
            ],
            "fi2part_contact": {
              "guid": "61676032-7619-499F-B0AC-75F1849EFA18",
              "fi2contact_class": {
                "fi2class_code": "Primary",
                "fi2class_scheme": {
                  "fi2scheme_id": "CB001_006_001",
                  "fi2scheme_name": "Klassificering av kontaktinformation",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                }
              },
              "fi2cont_fname": "Anna",
              "fi2cont_mname": "Eva",
              "fi2cont_lname": "Ibrahimovic",
              "fi2cont_fullname": "Anna Ibrahimovic",
              "fi2cont_tel": [
                { "usage": "Home", "$t": "9566-463288" },
                { "usage": "Work", "$t": "5938-191763" },
                { "usage": "MobilePrivate", "$t": "070-9167130" },
                { "usage": "MobileWork", "$t": "12345" },
                { "usage": "Fax", "$t": "12345" }
              ],
              "fi2cont_email": [
                { "usage": "Private", "$t": "Anna.Ibrahimovic@Hemma.se" },
                { "usage": "Work", "$t": "Anna.Ibrahimovic@jobbet.se" }
              ],
              "fi2cont_address": {
                "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Norravägen 277" },
                  { "usage": "CO", "$t": "278" },
                  { "usage": "Box", "$t": "798" },
                  { "usage": "Att", "$t": "836" }
                ],
                "fi2addr_zipcode": "79111",
                "fi2addr_city": "Askersund",
                "fi2addr_country": "SE",
                "fi2addr_region": "Norr",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "00570239" },
                  { "usage": "Work", "$t": "05464241" },
                  { "usage": "MobilePrivate", "$t": "070851010" },
                  { "usage": "MobileWork", "$t": "070808788" },
                  { "usage": "Fax", "$t": "81388" }
                ]
              }
            }
          },
          "fi2actor_role": {
            "fi2class_code": "Tenant",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_NotifierRole_01",
              "fi2scheme_name": "Klassificering av Notifier-roller",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
            }
          }
        },
        "fi2case_registrationdate": "2018-10-26",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Comleted",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2property",
          "fi2parent_ids": { "fi2_id": ["PROP-7"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "CASE-3",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "18" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-09-11T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-09-04T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-09-11T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Vattenläcka i badrummet" },
          { "lang": "sv", "usage": "Comment", "$t": "En Vattenläcka har uppstått i lägenheten" }
        ],
        "fi2case_registrationdate": "2018-09-01",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Created",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2spatisystem",
          "fi2parent_ids": { "fi2_id": ["OBJ-13010302"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-30",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "11" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-07-10T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-07-05T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-07-10T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Stopp i avloppet" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Det har uppstått ett stopp i avloppet i min lägenhet"
          }
        ],
        "fi2case_registrationdate": "2018-06-30",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Created",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2spatisystem",
          "fi2parent_ids": { "fi2_id": ["OBJ-06040103"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "CASE-4",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "59" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-05-19T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-05-16T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-05-19T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Krossad fönsterruta till trappuppgången" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Någon har krossat rutorna på ingången till lägenheten"
          }
        ],
        "fi2case_notifier": {
          "fi2actor_partner": {
            "id": "12345",
            "fi2part_ids": {
              "fi2_id": [
                { "usage": "PartnerId", "$t": "12345" },
                { "usage": "Ssn", "$t": "811010-1010" }
              ]
            },
            "fi2part_class": [
              {
                "fi2class_code": "16",
                "fi2class_scheme": {
                  "fi2scheme_id": "CA000_005_003",
                  "fi2scheme_name": "Klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                }
              },
              {
                "fi2class_code": "Person",
                "fi2class_scheme": {
                  "fi2scheme_id": "Class_FI2Partner_Additional_01",
                  "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                }
              }
            ],
            "fi2part_value": [
              {
                "fi2value_code": "ChangedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "ChangedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06"
              },
              {
                "fi2value_code": "CreatedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "CreatedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06"
              },
              {
                "fi2value_code": "ETag",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06.660"
              }
            ],
            "fi2part_name": { "lang": "sv", "usage": "Default", "$t": "Anna" },
            "fi2part_fullname": "Anna Jansson",
            "fi2part_reference": "En referens.",
            "fi2part_orgidcode": "556964-5061",
            "fi2part_tel": [
              { "usage": "Home", "$t": "12345-123456" },
              { "usage": "Work", "$t": "12345-123456" },
              { "usage": "MobilePrivate", "$t": "12345-123456" },
              { "usage": "MobileWork", "$t": "12345-123456" },
              { "usage": "Fax", "$t": "12345-123456" }
            ],
            "fi2part_email": [
              { "usage": "Work", "$t": "12345@12345.com" },
              { "usage": "Private", "$t": "12345@12345.com" }
            ],
            "fi2part_web": "www.exempelurl12345.com",
            "fi2part_address": [
              {
                "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Norravägen 277" },
                  { "usage": "CO", "$t": "278" },
                  { "usage": "Box", "$t": "798" },
                  { "usage": "Att", "$t": "836" }
                ],
                "fi2addr_zipcode": "79111",
                "fi2addr_city": "Askersund",
                "fi2addr_country": "SE",
                "fi2addr_region": "Norr",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "00570239" },
                  { "usage": "Work", "$t": "05464241" },
                  { "usage": "MobilePrivate", "$t": "070851010" },
                  { "usage": "MobileWork", "$t": "070808788" },
                  { "usage": "Fax", "$t": "81388" }
                ]
              },
              {
                "guid": "AEB1A38F-A0BB-4132-A1A0-E7998A09C37D",
                "fi2addr_class": {
                  "fi2class_code": "05",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Exempelgatan 234" },
                  { "usage": "CO", "$t": "234" },
                  { "usage": "Box", "$t": "222" },
                  { "usage": "Att", "$t": "289" }
                ],
                "fi2addr_zipcode": "22233",
                "fi2addr_city": "Yrboda",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "20789655" },
                  { "usage": "Work", "$t": "20889656" },
                  { "usage": "MobilePrivate", "$t": "20789645" },
                  { "usage": "MobileWork", "$t": "20889636" },
                  { "usage": "Fax", "$t": "20789695" }
                ]
              }
            ],
            "fi2part_contact": {
              "guid": "61676032-7619-499F-B0AC-75F1849EFA18",
              "fi2contact_class": {
                "fi2class_code": "Primary",
                "fi2class_scheme": {
                  "fi2scheme_id": "CB001_006_001",
                  "fi2scheme_name": "Klassificering av kontaktinformation",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                }
              },
              "fi2cont_fname": "Anna",
              "fi2cont_mname": "Eva",
              "fi2cont_lname": "Ibrahimovic",
              "fi2cont_fullname": "Anna Ibrahimovic",
              "fi2cont_tel": [
                { "usage": "Home", "$t": "9566-463288" },
                { "usage": "Work", "$t": "5938-191763" },
                { "usage": "MobilePrivate", "$t": "070-9167130" },
                { "usage": "MobileWork", "$t": "12345" },
                { "usage": "Fax", "$t": "12345" }
              ],
              "fi2cont_email": [
                { "usage": "Private", "$t": "Anna.Ibrahimovic@Hemma.se" },
                { "usage": "Work", "$t": "Anna.Ibrahimovic@jobbet.se" }
              ],
              "fi2cont_address": {
                "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Norravägen 277" },
                  { "usage": "CO", "$t": "278" },
                  { "usage": "Box", "$t": "798" },
                  { "usage": "Att", "$t": "836" }
                ],
                "fi2addr_zipcode": "79111",
                "fi2addr_city": "Askersund",
                "fi2addr_country": "SE",
                "fi2addr_region": "Norr",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "00570239" },
                  { "usage": "Work", "$t": "05464241" },
                  { "usage": "MobilePrivate", "$t": "070851010" },
                  { "usage": "MobileWork", "$t": "070808788" },
                  { "usage": "Fax", "$t": "81388" }
                ]
              }
            }
          },
          "fi2actor_role": {
            "fi2class_code": "Tenant",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_NotifierRole_01",
              "fi2scheme_name": "Klassificering av Notifier-roller",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
            }
          }
        },
        "fi2case_registrationdate": "2018-05-12",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Pending",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2structure",
          "fi2parent_ids": { "fi2_id": ["BUILD-1301"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-41",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "63" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-07-30T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-07-24T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-07-30T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Vattenkranen i köket läcker" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Vattenkranen i köket har börjat läcka vatten igår kväll"
          }
        ],
        "fi2case_registrationdate": "2018-07-21",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Pending",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2spatisystem",
          "fi2parent_ids": { "fi2_id": ["OBJ-11020301"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-42",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "82" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-08-24T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-08-23T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-08-24T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Det är nerskräpat i trappuppgången" },
          { "lang": "sv", "usage": "Comment", "$t": "Det ligger en massa skräp i trappuppgången" }
        ],
        "fi2case_registrationdate": "2018-08-16",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Annulled",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2structure",
          "fi2parent_ids": { "fi2_id": ["BUILD-0502"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-43",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "73" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-11-23T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-11-22T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-11-23T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Klotter på fasaden" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Någon eller några har klottrat på fasaden på lägenheten"
          }
        ],
        "fi2case_registrationdate": "2018-11-19",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Comleted",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2property",
          "fi2parent_ids": { "fi2_id": ["PROP-7"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-44",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "62" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-04-28T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-04-21T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-04-28T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Vattenläcka i badrummet" },
          { "lang": "sv", "usage": "Comment", "$t": "En Vattenläcka har uppstått i lägenheten" }
        ],
        "fi2case_registrationdate": "2018-04-16",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Created",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2spatisystem",
          "fi2parent_ids": { "fi2_id": ["OBJ-13010302"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-45",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "25" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-09T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-08T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-09T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Krossad fönsterruta till trappuppgången" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Någon har krossat rutorna på ingången till lägenheten"
          }
        ],
        "fi2case_registrationdate": "2018-03-01",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Pending",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2structure",
          "fi2parent_ids": { "fi2_id": ["BUILD-1301"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-46",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "39" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-07-05T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-06-29T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-07-05T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Elfel i lägenheten" },
          { "lang": "sv", "usage": "Comment", "$t": "Det finns ingen ström i hela lägenheten" }
        ],
        "fi2case_registrationdate": "2018-06-27",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Annulled",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2structure",
          "fi2parent_ids": { "fi2_id": ["BUILD-0102"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-47",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "65" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2019-05-23T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2019-05-16T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2019-05-23T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "En störnings anmälan av en granne" },
          { "lang": "sv", "usage": "Comment", "$t": "En granne har varit högljud" }
        ],
        "fi2case_notifier": {
          "fi2actor_partner": {
            "id": "PARTN-164",
            "fi2part_ids": {
              "fi2_id": [
                { "usage": "PartnerId", "$t": "164" },
                { "usage": "Ssn", "$t": "650718-1254" }
              ]
            },
            "fi2part_class": [
              {
                "fi2class_code": "16",
                "fi2class_scheme": {
                  "fi2scheme_id": "CA000_005_003",
                  "fi2scheme_name": "Klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                }
              },
              {
                "fi2class_code": "Person",
                "fi2class_scheme": {
                  "fi2scheme_id": "Class_FI2Partner_Additional_01",
                  "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                }
              }
            ],
            "fi2part_value": [
              {
                "fi2value_code": "ChangedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "ChangedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2014-03-12T11:52:53"
              },
              {
                "fi2value_code": "CreatedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "CreatedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2008-11-02T08:45:39"
              },
              {
                "fi2value_code": "ETag",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2014-03-12T11:52:53.970"
              }
            ],
            "fi2part_fullname": "Jussi Fältskog",
            "fi2part_reference": {},
            "fi2part_orgidcode": {},
            "fi2part_tel": [
              { "usage": "Home", "$t": "8572-866780" },
              { "usage": "Work", "$t": "1829-273758" },
              { "usage": "MobilePrivate", "$t": "070-8990982" },
              { "usage": "Fax" }
            ],
            "fi2part_email": [
              { "usage": "Work", "$t": "Jussi.Fältskog@jobbet.se" },
              { "usage": "Private", "$t": "Jussi.Fältskog@Hemma.se" }
            ],
            "fi2part_web": {},
            "fi2part_contact": {
              "fi2contact_class": {
                "fi2class_code": "Primary",
                "fi2class_scheme": {
                  "fi2scheme_id": "CB001_006_001",
                  "fi2scheme_name": "Klassificering av kontaktinformation",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                }
              },
              "fi2cont_fname": "Jussi",
              "fi2cont_mname": {},
              "fi2cont_lname": "Fältskog",
              "fi2cont_fullname": "Jussi Fältskog",
              "fi2cont_tel": [
                { "usage": "Home", "$t": "8572-866780" },
                { "usage": "Work", "$t": "1829-273758" },
                { "usage": "MobilePrivate", "$t": "070-8990982" },
                { "usage": "Fax" }
              ],
              "fi2cont_email": [
                { "usage": "Private", "$t": "Jussi.Fältskog@Hemma.se" },
                { "usage": "Work", "$t": "Jussi.Fältskog@jobbet.se" }
              ]
            }
          },
          "fi2actor_role": {
            "fi2class_code": "Tenant",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_NotifierRole_01",
              "fi2scheme_name": "Klassificering av Notifier-roller",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
            }
          }
        },
        "fi2case_registrationdate": "2019-05-15",
        "fi2case_registrar": "Jussi Fältskog",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Comleted",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": [
          {
            "fi2item": "fi2spatisystem",
            "fi2parent_ids": { "fi2_id": ["OBJ-14040102"] },
            "fi2parent_item": {}
          },
          {
            "fi2item": "fi2partner",
            "fi2parent_ids": { "fi2_id": ["PARTN-178"] },
            "fi2parent_item": {}
          }
        ]
      },
      {
        "id": "Case-48",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "85" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-04-17T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-04-16T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-04-17T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Stopp i avloppet" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Det har uppstått ett stopp i avloppet i min lägenhet"
          }
        ],
        "fi2case_registrationdate": "2018-04-13",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Created",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2spatisystem",
          "fi2parent_ids": { "fi2_id": ["OBJ-06040103"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "Case-49",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "44" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-30T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Script"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-26T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-03-30T00:00:00.000"
          }
        ],
        "fi2case_documents": {
          "fi2document_class": {
            "fi2class_code": "Internal",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_Fi2Document_01",
              "fi2scheme_name": "Klassificering Document",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2Document_01.xml"
            }
          },
          "fi2document_ids": { "fi2_id": ["32"] },
          "fi2document_descr": { "lang": "sv", "$t": "Exempeldokument" },
          "fi2document_link": "http://www.fastapi.se/apidocprop/v1/Documents/example.txt"
        },
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Vattenkranen i köket läcker" },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "Vattenkranen i köket har börjat läcka vatten igår kväll"
          }
        ],
        "fi2case_registrationdate": "2018-03-24",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Pending",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2spatisystem",
          "fi2parent_ids": { "fi2_id": ["OBJ-11020301"] },
          "fi2parent_item": {}
        }
      },
      {
        "id": "CASE-5",
        "fi2case_ids": { "fi2_id": [{ "usage": "CaseNumber", "$t": "50" }] },
        "fi2case_value": [
          {
            "fi2value_code": "ChangedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "Demouser"
          },
          {
            "fi2value_code": "ChangedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-02-18T00:00:00"
          },
          {
            "fi2value_code": "CreatedBy",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "SX"
          },
          {
            "fi2value_code": "CreatedDate",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-02-15T00:00:00"
          },
          {
            "fi2value_code": "ETag",
            "fi2value_scheme": {
              "fi2scheme_id": "VB001_005_001",
              "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
              "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
            },
            "fi2value_value": "2018-02-18T00:00:00.000"
          }
        ],
        "fi2case_descr": [
          { "lang": "sv", "usage": "Description", "$t": "Elfel i lägenheten" },
          { "lang": "sv", "usage": "Comment", "$t": "Det finns ingen ström i hela lägenheten" }
        ],
        "fi2case_notifier": {
          "fi2actor_partner": {
            "id": "12345",
            "fi2part_ids": {
              "fi2_id": [
                { "usage": "PartnerId", "$t": "12345" },
                { "usage": "Ssn", "$t": "811010-1010" }
              ]
            },
            "fi2part_class": [
              {
                "fi2class_code": "16",
                "fi2class_scheme": {
                  "fi2scheme_id": "CA000_005_003",
                  "fi2scheme_name": "Klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CA000_005_003.xml"
                }
              },
              {
                "fi2class_code": "Person",
                "fi2class_scheme": {
                  "fi2scheme_id": "Class_FI2Partner_Additional_01",
                  "fi2scheme_name": "Ytterligare klassificering FI2Partner",
                  "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_FI2Partner_Additional_01.xml"
                }
              }
            ],
            "fi2part_value": [
              {
                "fi2value_code": "ChangedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "ChangedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06"
              },
              {
                "fi2value_code": "CreatedBy",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "Script"
              },
              {
                "fi2value_code": "CreatedDate",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06"
              },
              {
                "fi2value_code": "ETag",
                "fi2value_scheme": {
                  "fi2scheme_id": "VB001_005_001",
                  "fi2scheme_name": "Tillåtna värden för alla typer av fi2objekt",
                  "fi2scheme_url": "http://www.fi2.se/valuelist/VB001_005_001.xml"
                },
                "fi2value_value": "2015-11-18T09:21:06.660"
              }
            ],
            "fi2part_name": { "lang": "sv", "usage": "Default", "$t": "Anna" },
            "fi2part_fullname": "Anna Jansson",
            "fi2part_reference": "En referens.",
            "fi2part_orgidcode": "556964-5061",
            "fi2part_tel": [
              { "usage": "Home", "$t": "12345-123456" },
              { "usage": "Work", "$t": "12345-123456" },
              { "usage": "MobilePrivate", "$t": "12345-123456" },
              { "usage": "MobileWork", "$t": "12345-123456" },
              { "usage": "Fax", "$t": "12345-123456" }
            ],
            "fi2part_email": [
              { "usage": "Work", "$t": "12345@12345.com" },
              { "usage": "Private", "$t": "12345@12345.com" }
            ],
            "fi2part_web": "www.exempelurl12345.com",
            "fi2part_address": [
              {
                "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Norravägen 277" },
                  { "usage": "CO", "$t": "278" },
                  { "usage": "Box", "$t": "798" },
                  { "usage": "Att", "$t": "836" }
                ],
                "fi2addr_zipcode": "79111",
                "fi2addr_city": "Askersund",
                "fi2addr_country": "SE",
                "fi2addr_region": "Norr",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "00570239" },
                  { "usage": "Work", "$t": "05464241" },
                  { "usage": "MobilePrivate", "$t": "070851010" },
                  { "usage": "MobileWork", "$t": "070808788" },
                  { "usage": "Fax", "$t": "81388" }
                ]
              },
              {
                "guid": "AEB1A38F-A0BB-4132-A1A0-E7998A09C37D",
                "fi2addr_class": {
                  "fi2class_code": "05",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Postal exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Exempelgatan 234" },
                  { "usage": "CO", "$t": "234" },
                  { "usage": "Box", "$t": "222" },
                  { "usage": "Att", "$t": "289" }
                ],
                "fi2addr_zipcode": "22233",
                "fi2addr_city": "Yrboda",
                "fi2addr_country": "SE",
                "fi2addr_region": "Mitt",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "20789655" },
                  { "usage": "Work", "$t": "20889656" },
                  { "usage": "MobilePrivate", "$t": "20789645" },
                  { "usage": "MobileWork", "$t": "20889636" },
                  { "usage": "Fax", "$t": "20789695" }
                ]
              }
            ],
            "fi2part_contact": {
              "guid": "61676032-7619-499F-B0AC-75F1849EFA18",
              "fi2contact_class": {
                "fi2class_code": "Primary",
                "fi2class_scheme": {
                  "fi2scheme_id": "CB001_006_001",
                  "fi2scheme_name": "Klassificering av kontaktinformation",
                  "fi2scheme_url": "http://www.fi2.se/classlist/CB001_006_001.xml"
                }
              },
              "fi2cont_fname": "Anna",
              "fi2cont_mname": "Eva",
              "fi2cont_lname": "Ibrahimovic",
              "fi2cont_fullname": "Anna Ibrahimovic",
              "fi2cont_tel": [
                { "usage": "Home", "$t": "9566-463288" },
                { "usage": "Work", "$t": "5938-191763" },
                { "usage": "MobilePrivate", "$t": "070-9167130" },
                { "usage": "MobileWork", "$t": "12345" },
                { "usage": "Fax", "$t": "12345" }
              ],
              "fi2cont_email": [
                { "usage": "Private", "$t": "Anna.Ibrahimovic@Hemma.se" },
                { "usage": "Work", "$t": "Anna.Ibrahimovic@jobbet.se" }
              ],
              "fi2cont_address": {
                "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                "fi2addr_class": {
                  "fi2class_code": "03",
                  "fi2class_scheme": {
                    "fi2scheme_id": "CA000_007_003",
                    "fi2scheme_name": "Klassificering av adresser",
                    "fi2scheme_url": "http://www.fi2.se/classlist/CA000_007_003.xml"
                  }
                },
                "fi2addr_descr": { "lang": "sv", "$t": "Exempeladress" },
                "fi2addr_addrline": [
                  { "usage": "Street", "$t": "Norravägen 277" },
                  { "usage": "CO", "$t": "278" },
                  { "usage": "Box", "$t": "798" },
                  { "usage": "Att", "$t": "836" }
                ],
                "fi2addr_zipcode": "79111",
                "fi2addr_city": "Askersund",
                "fi2addr_country": "SE",
                "fi2addr_region": "Norr",
                "fi2addr_tel": [
                  { "usage": "Home", "$t": "00570239" },
                  { "usage": "Work", "$t": "05464241" },
                  { "usage": "MobilePrivate", "$t": "070851010" },
                  { "usage": "MobileWork", "$t": "070808788" },
                  { "usage": "Fax", "$t": "81388" }
                ]
              }
            }
          },
          "fi2actor_role": {
            "fi2class_code": "Tenant",
            "fi2class_scheme": {
              "fi2scheme_id": "Class_NotifierRole_01",
              "fi2scheme_name": "Klassificering av Notifier-roller",
              "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_NotifierRole_01.xml"
            }
          }
        },
        "fi2case_registrationdate": "2018-02-10",
        "fi2case_category": {
          "fi2class_code": "Case",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
            "fi2scheme_name": "Ärendetyp Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
          }
        },
        "fi2case_status": {
          "fi2class_code": "Annulled",
          "fi2class_scheme": {
            "fi2scheme_id": "Class_Fi2CaseStatus_01",
            "fi2scheme_name": "Status Felanmälningar",
            "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"
          }
        },
        "fi2case_parentobject": {
          "fi2item": "fi2structure",
          "fi2parent_ids": { "fi2_id": ["BUILD-0102"] },
          "fi2parent_item": {}
        }
      }
    ]
  }
}
