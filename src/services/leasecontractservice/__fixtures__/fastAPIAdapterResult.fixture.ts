/* eslint @typescript-eslint/camelcase: "off" */
export const fi2LeaseContractsJson = {
  fi2simplemessage: {
    $: {
      'xmlns:meta': 'http://www.metadata.se/meta/1.10/meta-1.10',
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:schemaLocation':
        'http://www.fi2.se/schemas/1.31 http://www.fi2.se/schemas/1.31/fi2simplemessage.xsd',
      xmlns: 'http://www.fi2.se/schemas/1.31',
    },
    fi2messageheader: [
      {
        fi2sender: [
          {
            fi2reference: [
              {
                fi2value_code: [''],
                fi2value_value: [''],
              },
              {
                fi2value_code: ['B'],
                fi2value_scheme: [
                  {
                    fi2scheme_id: ['VA000_004_002'],
                    fi2scheme_name: ['Avsändarvärden fi2sender'],
                    fi2scheme_url: ['http://www.fi2.se/valuelist/VA000_004_002.xml'],
                  },
                ],
                fi2value_value: ['fastAPI'],
              },
            ],
            fi2systemidentity: [''],
          },
        ],
        fi2version: ['1.31'],
        fi2messageversion: ['1.3.3'],
        fi2messageid: ['90998f8e-87b7-4925-ae00-2f7c7b5509aa'],
        fi2messagedate: ['2020-04-20T09:46:27.8634977+00:00'],
        fi2sessionidentity: [''],
        fi2messagecount: ['1'],
        fi2messagetask: [
          {
            fi2verb: [
              {
                fi2class_code: [''],
                fi2class_scheme: [''],
              },
            ],
            fi2noun: [
              {
                fi2class_code: [''],
                fi2class_scheme: [''],
              },
            ],
          },
        ],
        fi2confirmation: ['false'],
      },
    ],
    fi2leasecontract: [
      {
        $: {
          id: '1',
          guid: '94F6BA02-EE7E-4076-B5B4-5C3062ED304B',
        },
        fi2lease_ids: [
          {
            fi2_id: [
              {
                _: '1',
                $: {
                  usage: 'ContractNo',
                },
              },
            ],
          },
        ],
        fi2lease_class: [
          {
            fi2class_code: ['12'],
            fi2class_scheme: [
              {
                fi2scheme_id: ['CA000_009_002'],
                fi2scheme_name: ['FI2klassificering av kontraktstyper'],
                fi2scheme_url: ['http://www.fi2.se/classlist/CA000_009_002.xml'],
              },
            ],
          },
        ],
        fi2lease_value: [
          {
            fi2value_code: ['ChangedDate'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['2014-03-12T11:54:18'],
          },
          {
            fi2value_code: ['CreatedDate'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['2015-04-23T09:13:17'],
          },
          {
            fi2value_code: ['ETag'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['2014-03-12T11:54:18.170'],
          },
        ],
        fi2lease_descr: [
          {
            _: 'Tillsvidareavtal för en bostad',
            $: {
              lang: 'sv',
              usage: 'Default',
            },
          },
        ],
        fi2lease_actor: [
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-147',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '1',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-162',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '2',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-273',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '3',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
        ],
        fi2lease_initialdate: ['2002-02-01T00:00:00'],
        fi2lease_currenddate: ['2020-08-01'],
        fi2lease_renewaldate: ['2020-05-01'],
        fi2lease_date: ['2001-12-18'],
        fi2lease_signdate: ['2001-12-19'],
        fi2lease_noticetime: ['3'],
        fi2lease_parentobject: [
          {
            $: {
              fi2item: 'fi2spatisystem',
            },
            fi2parent_ids: [
              {
                fi2_id: ['OBJ-16010204'],
              },
            ],
          },
        ],
      },
      {
        $: {
          id: '10',
          guid: '4AE81487-BF2B-43DC-A5B6-86F9B0F99F62',
        },
        fi2lease_ids: [
          {
            fi2_id: [
              {
                _: '10',
                $: {
                  usage: 'ContractNo',
                },
              },
            ],
          },
        ],
        fi2lease_class: [
          {
            fi2class_code: ['12'],
            fi2class_scheme: [
              {
                fi2scheme_id: ['CA000_009_002'],
                fi2scheme_name: ['FI2klassificering av kontraktstyper'],
                fi2scheme_url: ['http://www.fi2.se/classlist/CA000_009_002.xml'],
              },
            ],
          },
        ],
        fi2lease_value: [
          {
            fi2value_code: ['ChangedBy'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['Script'],
          },
          {
            fi2value_code: ['ChangedDate'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['2014-03-12T11:54:18'],
          },
          {
            fi2value_code: ['CreatedBy'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['Script'],
          },
          {
            fi2value_code: ['CreatedDate'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['2008-03-16T11:41:13'],
          },
          {
            fi2value_code: ['ETag'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['2014-03-12T11:54:18.170'],
          },
        ],
        fi2lease_descr: [
          {
            $: {
              lang: 'sv',
              usage: 'Default',
            },
          },
        ],
        fi2lease_actor: [
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-32',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '2',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-33',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '3',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-140',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '1',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-9',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '4',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
        ],
        fi2lease_initialdate: ['1996-01-22T00:00:00'],
        fi2lease_currenddate: ['2020-08-01'],
        fi2lease_renewaldate: ['2020-05-01'],
        fi2lease_date: ['1996-01-22'],
        fi2lease_signdate: ['1996-01-22'],
        fi2lease_noticetime: ['3'],
        fi2lease_parentobject: [
          {
            $: {
              fi2item: 'fi2spatisystem',
            },
            fi2parent_ids: [
              {
                fi2_id: ['OBJ-0130202'],
              },
            ],
          },
        ],
      },
      {
        $: {
          id: '100',
          guid: '80FECCE8-D4EE-4E2E-A8EB-62733F19F835',
        },
        fi2lease_ids: [
          {
            fi2_id: [
              {
                _: '100',
                $: {
                  usage: 'ContractNo',
                },
              },
            ],
          },
        ],
        fi2lease_class: [
          {
            fi2class_code: ['12'],
            fi2class_scheme: [
              {
                fi2scheme_id: ['CA000_009_002'],
                fi2scheme_name: ['FI2klassificering av kontraktstyper'],
                fi2scheme_url: ['http://www.fi2.se/classlist/CA000_009_002.xml'],
              },
            ],
          },
        ],
        fi2lease_value: [
          {
            fi2value_code: ['ChangedBy'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['Script'],
          },
          {
            fi2value_code: ['ChangedDate'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['2014-03-12T11:54:18'],
          },
          {
            fi2value_code: ['CreatedBy'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['Script'],
          },
          {
            fi2value_code: ['CreatedDate'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['1996-01-10T09:42:09'],
          },
          {
            fi2value_code: ['ETag'],
            fi2value_scheme: [
              {
                fi2scheme_id: ['VB001_005_001'],
                fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
                fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
              },
            ],
            fi2value_value: ['2014-03-12T11:54:18.170'],
          },
        ],
        fi2lease_descr: [
          {
            $: {
              lang: 'sv',
              usage: 'Default',
            },
          },
        ],
        fi2lease_actor: [
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-194',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '1',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-229',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '2',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-283',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '3',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
          {
            fi2actor_partner: [
              {
                $: {
                  id: 'PARTN-58',
                },
                fi2part_ids: [
                  {
                    fi2_id: [
                      {
                        _: '4',
                        $: {
                          usage: 'Sortorder',
                        },
                      },
                    ],
                  },
                ],
                fi2part_class: [
                  {
                    fi2class_code: ['16'],
                    fi2class_scheme: [
                      {
                        fi2scheme_id: ['CA000_005_003'],
                        fi2scheme_name: ['Klassificering FI2Partner'],
                        fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                      },
                    ],
                  },
                ],
              },
            ],
            fi2actor_role: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
        ],
        fi2lease_initialdate: ['1996-04-27T00:00:00'],
        fi2lease_currenddate: ['2020-08-01'],
        fi2lease_renewaldate: ['2020-05-01'],
        fi2lease_date: ['1996-04-27'],
        fi2lease_signdate: ['1996-04-27'],
        fi2lease_noticetime: ['3'],
        fi2lease_parentobject: [
          {
            $: {
              fi2item: 'fi2spatisystem',
            },
            fi2parent_ids: [
              {
                fi2_id: ['OBJ-06020103'],
              },
            ],
          },
        ],
      },
    ],
  },
}

export const fi2LeaseContractJson = {
  fi2leasecontract: {
    $: {
      id: '1',
      guid: '94F6BA02-EE7E-4076-B5B4-5C3062ED304B',
    },
    fi2lease_ids: [
      {
        fi2_id: [
          {
            _: '1',
            $: {
              usage: 'ContractNo',
            },
          },
        ],
      },
    ],
    fi2lease_class: [
      {
        fi2class_code: ['12'],
        fi2class_scheme: [
          {
            fi2scheme_id: ['CA000_009_002'],
            fi2scheme_name: ['FI2klassificering av kontraktstyper'],
            fi2scheme_url: ['http://www.fi2.se/classlist/CA000_009_002.xml'],
          },
        ],
      },
    ],
    fi2lease_value: [
      {
        fi2value_code: ['ChangedDate'],
        fi2value_scheme: [
          {
            fi2scheme_id: ['VB001_005_001'],
            fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
            fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
          },
        ],
        fi2value_value: ['2014-03-12T11:54:18'],
      },
      {
        fi2value_code: ['CreatedDate'],
        fi2value_scheme: [
          {
            fi2scheme_id: ['VB001_005_001'],
            fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
            fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
          },
        ],
        fi2value_value: ['2015-04-23T09:13:17'],
      },
      {
        fi2value_code: ['ETag'],
        fi2value_scheme: [
          {
            fi2scheme_id: ['VB001_005_001'],
            fi2scheme_name: ['Tillåtna värden för alla typer av fi2objekt'],
            fi2scheme_url: ['http://www.fi2.se/valuelist/VB001_005_001.xml'],
          },
        ],
        fi2value_value: ['2014-03-12T11:54:18.170'],
      },
    ],
    fi2lease_descr: [
      {
        _: 'Tillsvidareavtal för en bostad',
        $: {
          lang: 'sv',
          usage: 'Default',
        },
      },
    ],
    fi2lease_actor: [
      {
        fi2actor_partner: [
          {
            $: {
              id: 'PARTN-147',
            },
            fi2part_ids: [
              {
                fi2_id: [
                  {
                    _: '1',
                    $: {
                      usage: 'Sortorder',
                    },
                  },
                ],
              },
            ],
            fi2part_class: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
        ],
        fi2actor_role: [
          {
            fi2class_code: ['16'],
            fi2class_scheme: [
              {
                fi2scheme_id: ['CA000_005_003'],
                fi2scheme_name: ['Klassificering FI2Partner'],
                fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
              },
            ],
          },
        ],
      },
      {
        fi2actor_partner: [
          {
            $: {
              id: 'PARTN-162',
            },
            fi2part_ids: [
              {
                fi2_id: [
                  {
                    _: '2',
                    $: {
                      usage: 'Sortorder',
                    },
                  },
                ],
              },
            ],
            fi2part_class: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
        ],
        fi2actor_role: [
          {
            fi2class_code: ['16'],
            fi2class_scheme: [
              {
                fi2scheme_id: ['CA000_005_003'],
                fi2scheme_name: ['Klassificering FI2Partner'],
                fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
              },
            ],
          },
        ],
      },
      {
        fi2actor_partner: [
          {
            $: {
              id: 'PARTN-273',
            },
            fi2part_ids: [
              {
                fi2_id: [
                  {
                    _: '3',
                    $: {
                      usage: 'Sortorder',
                    },
                  },
                ],
              },
            ],
            fi2part_class: [
              {
                fi2class_code: ['16'],
                fi2class_scheme: [
                  {
                    fi2scheme_id: ['CA000_005_003'],
                    fi2scheme_name: ['Klassificering FI2Partner'],
                    fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
                  },
                ],
              },
            ],
          },
        ],
        fi2actor_role: [
          {
            fi2class_code: ['16'],
            fi2class_scheme: [
              {
                fi2scheme_id: ['CA000_005_003'],
                fi2scheme_name: ['Klassificering FI2Partner'],
                fi2scheme_url: ['http://www.fi2.se/classlist/CA000_005_003.xml'],
              },
            ],
          },
        ],
      },
    ],
    fi2lease_initialdate: ['2002-02-01T00:00:00'],
    fi2lease_currenddate: ['2020-08-01'],
    fi2lease_renewaldate: ['2020-05-01'],
    fi2lease_date: ['2001-12-18'],
    fi2lease_signdate: ['2001-12-19'],
    fi2lease_noticetime: ['3'],
    fi2lease_parentobject: [
      {
        $: {
          fi2item: 'fi2spatisystem',
        },
        fi2parent_ids: [
          {
            fi2_id: ['OBJ-16010204'],
          },
        ],
      },
    ],
  },
}
