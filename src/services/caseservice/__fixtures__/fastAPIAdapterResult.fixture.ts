/* eslint @typescript-eslint/camelcase: "off" */
export const fi2LeaseContractsJson = {
  fi2simplemessage: {
    'xmlns:meta': 'http://www.metadata.se/meta/1.10/meta-1.10',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation':
      'http://www.fi2.se/schemas/1.31 http://www.fi2.se/schemas/1.31/fi2simplemessage.xsd',
    xmlns: 'http://www.fi2.se/schemas/1.31',
    fi2messageheader: {
      fi2sender: {
        fi2reference: [
          {
            fi2value_code: {},
            fi2value_value: {},
          },
          {
            fi2value_code: 'B',
            fi2value_scheme: {
              fi2scheme_id: 'VA000_004_002',
              fi2scheme_name: 'Avsändarvärden fi2sender',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_004_002.xml',
            },
            fi2value_value: 'fastAPI',
          },
        ],
        fi2systemidentity: {},
      },
      fi2version: '1.31',
      fi2messageversion: '1.3.3',
      fi2messageid: 'b348c44c-c3e0-40d2-8bdc-8cf221303b53',
      fi2messagedate: '2020-04-21T14:37:26.1266896+00:00',
      fi2sessionidentity: {},
      fi2messagecount: '1',
      fi2messagetask: {
        fi2verb: {
          fi2class_code: {},
          fi2class_scheme: {},
        },
        fi2noun: {
          fi2class_code: {},
          fi2class_scheme: {},
        },
      },
      fi2confirmation: 'false',
    },
    fi2leasecontract: [
      {
        id: '1',
        guid: '94F6BA02-EE7E-4076-B5B4-5C3062ED304B',
        fi2lease_ids: {
          fi2_id: {
            usage: 'ContractNo',
            $t: '1',
          },
        },
        fi2lease_class: {
          fi2class_code: '12',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_009_002',
            fi2scheme_name: 'FI2klassificering av kontraktstyper',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_009_002.xml',
          },
        },
        fi2lease_value: [
          {
            fi2value_code: 'ChangedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:54:18',
          },
          {
            fi2value_code: 'CreatedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2015-04-23T09:13:17',
          },
          {
            fi2value_code: 'ETag',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:54:18.170',
          },
        ],
        fi2lease_descr: {
          lang: 'sv',
          usage: 'Default',
          $t: 'Tillsvidareavtal för en bostad',
        },
        fi2lease_actor: [
          {
            fi2actor_partner: {
              id: 'PARTN-147',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '1',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          {
            fi2actor_partner: {
              id: 'PARTN-162',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '2',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          {
            fi2actor_partner: {
              id: 'PARTN-273',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '3',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
        ],
        fi2lease_initialdate: '2002-02-01T00:00:00',
        fi2lease_currenddate: '2020-08-01',
        fi2lease_renewaldate: '2020-05-01',
        fi2lease_date: '2001-12-18',
        fi2lease_signdate: '2001-12-19',
        fi2lease_noticetime: '3',
        fi2lease_parentobject: {
          fi2item: 'fi2spatisystem',
          fi2parent_ids: {
            fi2_id: 'OBJ-16010204',
          },
        },
      },
      {
        id: '10',
        guid: '4AE81487-BF2B-43DC-A5B6-86F9B0F99F62',
        fi2lease_ids: {
          fi2_id: {
            usage: 'ContractNo',
            $t: '10',
          },
        },
        fi2lease_class: {
          fi2class_code: '12',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_009_002',
            fi2scheme_name: 'FI2klassificering av kontraktstyper',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_009_002.xml',
          },
        },
        fi2lease_value: [
          {
            fi2value_code: 'ChangedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'ChangedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:54:18',
          },
          {
            fi2value_code: 'CreatedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'CreatedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2008-03-16T11:41:13',
          },
          {
            fi2value_code: 'ETag',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:54:18.170',
          },
        ],
        fi2lease_descr: {
          lang: 'sv',
          usage: 'Default',
        },
        fi2lease_actor: [
          {
            fi2actor_partner: {
              id: 'PARTN-32',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '2',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          {
            fi2actor_partner: {
              id: 'PARTN-33',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '3',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          {
            fi2actor_partner: {
              id: 'PARTN-140',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '1',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          {
            fi2actor_partner: {
              id: 'PARTN-9',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '4',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
        ],
        fi2lease_initialdate: '1996-01-22T00:00:00',
        fi2lease_currenddate: '2020-08-01',
        fi2lease_renewaldate: '2020-05-01',
        fi2lease_date: '1996-01-22',
        fi2lease_signdate: '1996-01-22',
        fi2lease_noticetime: '3',
        fi2lease_parentobject: {
          fi2item: 'fi2spatisystem',
          fi2parent_ids: {
            fi2_id: 'OBJ-0130202',
          },
        },
      },
      {
        id: '100',
        guid: '80FECCE8-D4EE-4E2E-A8EB-62733F19F835',
        fi2lease_ids: {
          fi2_id: {
            usage: 'ContractNo',
            $t: '100',
          },
        },
        fi2lease_class: {
          fi2class_code: '12',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_009_002',
            fi2scheme_name: 'FI2klassificering av kontraktstyper',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_009_002.xml',
          },
        },
        fi2lease_value: [
          {
            fi2value_code: 'ChangedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'ChangedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:54:18',
          },
          {
            fi2value_code: 'CreatedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'CreatedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '1996-01-10T09:42:09',
          },
          {
            fi2value_code: 'ETag',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:54:18.170',
          },
        ],
        fi2lease_descr: {
          lang: 'sv',
          usage: 'Default',
        },
        fi2lease_actor: [
          {
            fi2actor_partner: {
              id: 'PARTN-194',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '1',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          {
            fi2actor_partner: {
              id: 'PARTN-229',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '2',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          {
            fi2actor_partner: {
              id: 'PARTN-283',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '3',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          {
            fi2actor_partner: {
              id: 'PARTN-58',
              fi2part_ids: {
                fi2_id: {
                  usage: 'Sortorder',
                  $t: '4',
                },
              },
              fi2part_class: {
                fi2class_code: '16',
                fi2class_scheme: {
                  fi2scheme_id: 'CA000_005_003',
                  fi2scheme_name: 'Klassificering FI2Partner',
                  fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
                },
              },
            },
            fi2actor_role: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
        ],
        fi2lease_initialdate: '1996-04-27T00:00:00',
        fi2lease_currenddate: '2020-08-01',
        fi2lease_renewaldate: '2020-05-01',
        fi2lease_date: '1996-04-27',
        fi2lease_signdate: '1996-04-27',
        fi2lease_noticetime: '3',
        fi2lease_parentobject: {
          fi2item: 'fi2spatisystem',
          fi2parent_ids: {
            fi2_id: 'OBJ-06020103',
          },
        },
      },
    ],
  },
}

export const fi2LeaseContractJson = {
  fi2leasecontract: {
    id: '12345',
    guid: 'F858990C-DBFD-4355-A5BD-EEA7DB95B704',
    xmlns: 'http://www.fi2.se/schemas/1.31',
    fi2lease_ids: {
      fi2_id: {
        usage: 'ContractNo',
        $t: '12345',
      },
    },
    fi2lease_class: {
      fi2class_code: '1',
      fi2class_scheme: {
        fi2scheme_id: 'CA000_009_002',
        fi2scheme_name: 'FI2klassificering av kontraktstyper',
        fi2scheme_url: 'http://www.fi2.se/classlist/CA000_009_002.xml',
      },
    },
    fi2lease_value: [
      {
        fi2value_code: 'ChangedBy',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: 'Script',
      },
      {
        fi2value_code: 'ChangedDate',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:25:46',
      },
      {
        fi2value_code: 'CreatedBy',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: 'Script',
      },
      {
        fi2value_code: 'CreatedDate',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:25:46',
      },
      {
        fi2value_code: 'ETag',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:25:46.910',
      },
      {
        fi2value_code: 'NoticedBy',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_001_001',
          fi2scheme_name: 'Tillåtna värden på ett hyreskontrakt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_001_001.xml',
        },
        fi2value_value: 'HG',
      },
    ],
    fi2lease_documents: [
      {
        fi2document_class: {
          fi2class_code: 'Internal',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_025_001',
            fi2scheme_name: 'Klassificering Document',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_025_001.xml',
          },
        },
        fi2document_ids: {
          fi2_id: '23',
        },
        fi2document_descr: {
          lang: 'sv',
          $t: 'Exempeldokument',
        },
        fi2document_link: 'http://www.fastapi.se/apidocprop/v1/Documents/example.txt',
      },
    ],
    fi2lease_descr: {
      lang: 'sv',
      usage: 'Default',
      $t: 'Kontraktsbeskrivning',
    },
    fi2lease_actor: [
      {
        fi2actor_partner: {
          id: '12345',
          fi2part_ids: {
            fi2_id: {
              usage: 'Sortorder',
              $t: '1',
            },
          },
          fi2part_class: {
            fi2class_code: '16',
            fi2class_scheme: {
              fi2scheme_id: 'CA000_005_003',
              fi2scheme_name: 'Klassificering FI2Partner',
              fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
            },
          },
        },
        fi2actor_role: {
          fi2class_code: '16',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_005_003',
            fi2scheme_name: 'Klassificering FI2Partner',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
          },
        },
      },
    ],
    fi2lease_initialdate: '2010-11-18T09:25:46',
    fi2lease_endingdate: '2020-11-18',
    fi2lease_currenddate: '2020-11-18',
    fi2lease_noticedate: '2018-11-18',
    fi2lease_terminateddate: '2020-11-18',
    fi2lease_renewaldate: '2020-08-18',
    fi2lease_date: '2009-11-18',
    fi2lease_signdate: '2009-11-18',
    fi2lease_noticestatus: {
      fi2class_code: 'Definitely',
      fi2class_scheme: {
        fi2scheme_id: 'CB001_001_001',
        fi2scheme_name: 'Uppsägningsstatus',
        fi2scheme_url: 'http://www.fi2.se/classlist/CB001_001_001.xml',
      },
    },
    fi2lease_termreason: {
      fi2class_code: 'Move',
      fi2class_scheme: {
        fi2scheme_id: 'CB001_002_001',
        fi2scheme_name: 'Klassificering av uppsägningorsak',
        fi2scheme_url: 'http://www.fi2.se/classlist/CB001_002_001.xml',
      },
    },
    fi2lease_noticetime: '3',
    fi2lease_parentobject: {
      fi2item: 'fi2spatisystem',
      fi2parent_ids: {
        fi2_id: '12345',
      },
    },
  },
}

export const fi2LeaseContractWithDocumentJson = {
  fi2leasecontract: {
    id: '12345',
    guid: 'F858990C-DBFD-4355-A5BD-EEA7DB95B704',
    xmlns: 'http://www.fi2.se/schemas/1.31',
    fi2lease_ids: {
      fi2_id: {
        usage: 'ContractNo',
        $t: '12345',
      },
    },
    fi2lease_class: {
      fi2class_code: '1',
      fi2class_scheme: {
        fi2scheme_id: 'CA000_009_002',
        fi2scheme_name: 'FI2klassificering av kontraktstyper',
        fi2scheme_url: 'http://www.fi2.se/classlist/CA000_009_002.xml',
      },
    },
    fi2lease_value: [
      {
        fi2value_code: 'ChangedBy',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: 'Script',
      },
      {
        fi2value_code: 'ChangedDate',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:25:46',
      },
      {
        fi2value_code: 'CreatedBy',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: 'Script',
      },
      {
        fi2value_code: 'CreatedDate',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:25:46',
      },
      {
        fi2value_code: 'ETag',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:25:46.910',
      },
      {
        fi2value_code: 'NoticedBy',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_001_001',
          fi2scheme_name: 'Tillåtna värden på ett hyreskontrakt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_001_001.xml',
        },
        fi2value_value: 'HG',
      },
    ],
    fi2lease_documents: [
      {
        fi2document_class: {
          fi2class_code: 'Internal',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_025_001',
            fi2scheme_name: 'Klassificering Document',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_025_001.xml',
          },
        },
        fi2document_ids: {
          fi2_id: '23',
        },
        fi2document_descr: {
          lang: 'sv',
          $t: 'Exempeldokument',
        },
        fi2document_link: 'http://www.fastapi.se/apidocprop/v1/Documents/example.txt',
      },
    ],
    fi2lease_descr: {
      lang: 'sv',
      usage: 'Default',
      $t: 'Kontraktsbeskrivning',
    },
    fi2lease_actor: [
      {
        fi2actor_partner: {
          id: '12345',
          fi2part_ids: {
            fi2_id: {
              usage: 'Sortorder',
              $t: '1',
            },
          },
          fi2part_class: {
            fi2class_code: '16',
            fi2class_scheme: {
              fi2scheme_id: 'CA000_005_003',
              fi2scheme_name: 'Klassificering FI2Partner',
              fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
            },
          },
        },
        fi2actor_role: {
          fi2class_code: '16',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_005_003',
            fi2scheme_name: 'Klassificering FI2Partner',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
          },
        },
      },
    ],
    fi2lease_initialdate: '2010-11-18T09:25:46',
    fi2lease_endingdate: '2020-11-18',
    fi2lease_currenddate: '2020-11-18',
    fi2lease_noticedate: '2018-11-18',
    fi2lease_terminateddate: '2020-11-18',
    fi2lease_renewaldate: '2020-08-18',
    fi2lease_date: '2009-11-18',
    fi2lease_signdate: '2009-11-18',
    fi2lease_noticestatus: {
      fi2class_code: 'Definitely',
      fi2class_scheme: {
        fi2scheme_id: 'CB001_001_001',
        fi2scheme_name: 'Uppsägningsstatus',
        fi2scheme_url: 'http://www.fi2.se/classlist/CB001_001_001.xml',
      },
    },
    fi2lease_termreason: {
      fi2class_code: 'Move',
      fi2class_scheme: {
        fi2scheme_id: 'CB001_002_001',
        fi2scheme_name: 'Klassificering av uppsägningorsak',
        fi2scheme_url: 'http://www.fi2.se/classlist/CB001_002_001.xml',
      },
    },
    fi2lease_noticetime: '3',
    fi2lease_parentobject: {
      fi2item: 'fi2spatisystem',
      fi2parent_ids: {
        fi2_id: '12345',
      },
    },
  },
}

export const fi2LeaseContractsJsonWithRentals = {
  fi2simplemessage: {
    'xmlns:meta': 'http://www.metadata.se/meta/1.10/meta-1.10',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation':
      'http://www.fi2.se/schemas/1.31 http://www.fi2.se/schemas/1.31/fi2simplemessage.xsd',
    xmlns: 'http://www.fi2.se/schemas/1.31',
    fi2messageheader: {
      fi2sender: {
        fi2reference: [
          {
            fi2value_code: {},
            fi2value_value: {},
          },
          {
            fi2value_code: 'B',
            fi2value_scheme: {
              fi2scheme_id: 'VA000_004_002',
              fi2scheme_name: 'Avsändarvärden fi2sender',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_004_002.xml',
            },
            fi2value_value: 'fastAPI',
          },
        ],
        fi2systemidentity: {},
      },
      fi2version: '1.31',
      fi2messageversion: '1.3.3',
      fi2messageid: 'e1257d61-3d8d-4d77-a3db-44680da2fd49',
      fi2messagedate: '2020-12-09T15:09:21.8608944+00:00',
      fi2sessionidentity: {},
      fi2messagecount: '1',
      fi2messagetask: {
        fi2verb: {
          fi2class_code: {},
          fi2class_scheme: {},
        },
        fi2noun: {
          fi2class_code: {},
          fi2class_scheme: {},
        },
      },
      fi2confirmation: 'false',
    },
    fi2partner: [
      {
        id: 'PARTN-254',
        fi2part_ids: {
          fi2_id: [
            {
              usage: 'PartnerId',
              $t: '254',
            },
            {
              usage: 'Ssn',
              $t: '771222-2618',
            },
          ],
        },
        fi2part_class: {
          fi2class_code: '16',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_005_003',
            fi2scheme_name: 'Klassificering FI2Partner',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
          },
        },
        fi2part_value: [
          {
            fi2value_code: 'ChangedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'ChangedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:52:53',
          },
          {
            fi2value_code: 'CreatedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'CreatedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2013-11-18T10:04:24',
          },
          {
            fi2value_code: 'ETag',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:52:53.970',
          },
        ],
        fi2part_fullname: 'Jenny Fältskog',
        fi2part_reference: {},
        fi2part_orgidcode: {},
        fi2part_tel: [
          {
            usage: 'Home',
            $t: '1586-595401',
          },
          {
            usage: 'Work',
            $t: '2431-163572',
          },
          {
            usage: 'MobilePrivate',
            $t: '070-4147951',
          },
          {
            usage: 'Fax',
          },
        ],
        fi2part_email: [
          {
            usage: 'Private',
            $t: 'Jenny.Fältskog@Hemma.se',
          },
          {
            usage: 'Work',
            $t: 'Jenny.Fältskog@jobbet.se',
          },
        ],
        fi2part_web: {},
        fi2part_contact: {
          fi2contact_class: {
            fi2class_code: 'Primary',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_006_001',
              fi2scheme_name: 'Klassificering av kontaktinformation',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_006_001.xml',
            },
          },
          fi2cont_fname: 'Jenny',
          fi2cont_mname: {},
          fi2cont_lname: 'Fältskog',
          fi2cont_fullname: 'Jenny Fältskog',
          fi2cont_tel: [
            {
              usage: 'Home',
              $t: '1586-595401',
            },
            {
              usage: 'Work',
              $t: '2431-163572',
            },
            {
              usage: 'MobilePrivate',
              $t: '070-4147951',
            },
            {
              usage: 'Fax',
            },
          ],
          fi2cont_email: [
            {
              usage: 'Private',
              $t: 'Jenny.Fältskog@Hemma.se',
            },
            {
              usage: 'Work',
              $t: 'Jenny.Fältskog@jobbet.se',
            },
          ],
        },
      },
      {
        id: 'PARTN-80',
        fi2part_ids: {
          fi2_id: [
            {
              usage: 'PartnerId',
              $t: '80',
            },
            {
              usage: 'Ssn',
              $t: '471008-7372',
            },
          ],
        },
        fi2part_class: {
          fi2class_code: '16',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_005_003',
            fi2scheme_name: 'Klassificering FI2Partner',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
          },
        },
        fi2part_value: [
          {
            fi2value_code: 'ChangedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'ChangedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:52:53',
          },
          {
            fi2value_code: 'CreatedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'CreatedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2004-09-05T16:47:59',
          },
          {
            fi2value_code: 'ETag',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2014-03-12T11:52:53.970',
          },
        ],
        fi2part_fullname: 'Åsa Batalj',
        fi2part_reference: {},
        fi2part_orgidcode: {},
        fi2part_tel: [
          {
            usage: 'Home',
            $t: '6657-724532',
          },
          {
            usage: 'Work',
            $t: '2815-255041',
          },
          {
            usage: 'MobilePrivate',
            $t: '070-5316857',
          },
          {
            usage: 'Fax',
          },
        ],
        fi2part_email: [
          {
            usage: 'Private',
            $t: 'Åsa.Batalj@Hemma.se',
          },
          {
            usage: 'Work',
            $t: 'Åsa.Batalj@jobbet.se',
          },
        ],
        fi2part_web: {},
        fi2part_contact: {
          fi2contact_class: {
            fi2class_code: 'Primary',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_006_001',
              fi2scheme_name: 'Klassificering av kontaktinformation',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_006_001.xml',
            },
          },
          fi2cont_fname: 'Åsa',
          fi2cont_mname: {},
          fi2cont_lname: 'Batalj',
          fi2cont_fullname: 'Åsa Batalj',
          fi2cont_tel: [
            {
              usage: 'Home',
              $t: '6657-724532',
            },
            {
              usage: 'Work',
              $t: '2815-255041',
            },
            {
              usage: 'MobilePrivate',
              $t: '070-5316857',
            },
            {
              usage: 'Fax',
            },
          ],
          fi2cont_email: [
            {
              usage: 'Private',
              $t: 'Åsa.Batalj@Hemma.se',
            },
            {
              usage: 'Work',
              $t: 'Åsa.Batalj@jobbet.se',
            },
          ],
        },
      },
    ],
    fi2leasecontract: {
      id: '105',
      guid: '25EDBC4B-2D4C-42F3-91FA-304BC0DB08A7',
      fi2lease_ids: {
        fi2_id: [
          {
            usage: 'ContractNo',
            $t: '105',
          },
        ],
      },
      fi2lease_class: {
        fi2class_code: '12',
        fi2class_scheme: {
          fi2scheme_id: 'CA000_009_002',
          fi2scheme_name: 'FI2klassificering av kontraktstyper',
          fi2scheme_url: 'http://www.fi2.se/classlist/CA000_009_002.xml',
        },
      },
      fi2lease_value: [
        {
          fi2value_code: 'ChangedBy',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: 'Script',
        },
        {
          fi2value_code: 'ChangedDate',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: '2014-03-12T11:54:18',
        },
        {
          fi2value_code: 'CreatedBy',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: 'Script',
        },
        {
          fi2value_code: 'CreatedDate',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: '1993-05-27T13:04:48',
        },
        {
          fi2value_code: 'ETag',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: '2014-03-12T11:54:18.170',
        },
      ],
      fi2lease_descr: {
        lang: 'sv',
        usage: 'Default',
      },
      fi2lease_actor: [
        {
          fi2actor_partner: {
            id: 'PARTN-254',
            fi2part_ids: {
              fi2_id: [
                {
                  usage: 'Sortorder',
                  $t: '1',
                },
              ],
            },
            fi2part_class: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          fi2actor_role: {
            fi2class_code: '16',
            fi2class_scheme: {
              fi2scheme_id: 'CA000_005_003',
              fi2scheme_name: 'Klassificering FI2Partner',
              fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
            },
          },
        },
        {
          fi2actor_partner: {
            id: 'PARTN-80',
            fi2part_ids: {
              fi2_id: [
                {
                  usage: 'Sortorder',
                  $t: '2',
                },
              ],
            },
            fi2part_class: {
              fi2class_code: '16',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_005_003',
                fi2scheme_name: 'Klassificering FI2Partner',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
              },
            },
          },
          fi2actor_role: {
            fi2class_code: '16',
            fi2class_scheme: {
              fi2scheme_id: 'CA000_005_003',
              fi2scheme_name: 'Klassificering FI2Partner',
              fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
            },
          },
        },
      ],
      fi2lease_initialdate: '2012-12-17T00:00:00',
      fi2lease_currenddate: '2021-04-01',
      fi2lease_renewaldate: '2021-01-01',
      fi2lease_date: '2012-12-17',
      fi2lease_signdate: '2012-12-17',
      fi2lease_noticetime: '3',
      fi2lease_parentobject: {
        fi2item: 'fi2spatisystem',
        fi2parent_ids: {
          fi2_id: ['OBJ-18010102'],
        },
      },
    },
    fi2spatisystem: {
      id: 'OBJ-18010102',
      guid: 'F819E5B3-17AF-4010-B102-0D878190F39E',
      fi2spsys_ids: {
        fi2_id: [
          {
            usage: 'ObjectId',
            $t: '18010102',
          },
        ],
      },
      fi2spsys_class: {
        fi2class_code: 'Apartment',
        fi2class_scheme: {
          fi2scheme_id: 'CB001_005_001',
          fi2scheme_name: 'Typer av utrymmessystem/lägenheter',
          fi2scheme_url: 'http://www.fi2.se/classlist/CB001_005_001.xml',
        },
      },
      fi2spsys_value: [
        {
          fi2value_code: 'ChangedBy',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: 'Script',
        },
        {
          fi2value_code: 'ChangedDate',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: '2014-03-12T11:52:57',
        },
        {
          fi2value_code: 'CreatedBy',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: 'Script',
        },
        {
          fi2value_code: 'CreatedDate',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: '2010-05-27T02:33:27',
        },
        {
          fi2value_code: 'ETag',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_005_001',
            fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
          },
          fi2value_value: '2014-03-12T11:52:57.913',
        },
        {
          fi2value_code: 'Floor',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_003_001',
            fi2scheme_name: 'Tillåtna värden på ett utrymmessystem',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_003_001.xml',
          },
          fi2value_value: '0',
        },
        {
          fi2value_code: 'Rooms',
          fi2value_scheme: {
            fi2scheme_id: 'VB001_003_001',
            fi2scheme_name: 'Tillåtna värden på ett utrymmessystem',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_003_001.xml',
          },
          fi2value_value: '1',
        },
      ],
      fi2spsys_name: {
        lang: 'sv',
        usage: 'Default',
        $t: 'Apartment',
      },
      fi2spsys_descr: {
        lang: 'sv',
        usage: 'Default',
        $t: 'Apartment',
      },
      fi2spsys_address: [
        {
          guid: '95339104-4060-4A09-B0D9-45F5CFFEE743',
          fi2addr_class: {
            fi2class_code: '03',
            fi2class_scheme: {
              fi2scheme_id: 'CA000_007_003',
              fi2scheme_name: 'Klassificering av adresser',
              fi2scheme_url: 'http://www.fi2.se/classlist/CA000_007_003.xml',
            },
          },
          fi2addr_addrline: [
            {
              usage: 'Street',
              $t: 'Slottsvägen 45',
            },
            {
              usage: 'CO',
              $t: '473',
            },
            {
              usage: 'Box',
              $t: '497',
            },
            {
              usage: 'Att',
              $t: '298',
            },
          ],
          fi2addr_zipcode: '44892',
          fi2addr_city: 'Karlskrona',
          fi2addr_country: 'SE',
          fi2addr_region: 'Öst',
          fi2addr_tel: [
            {
              usage: 'Home',
              $t: '016213949',
            },
            {
              usage: 'Work',
              $t: '019892870',
            },
            {
              usage: 'MobilePrivate',
              $t: '070988209',
            },
            {
              usage: 'MobileWork',
              $t: '070108331',
            },
            {
              usage: 'Fax',
              $t: '49336',
            },
          ],
        },
      ],
      fi2spsys_area: [
        {
          fi2area_code: 'LOA',
          fi2area_scheme: {
            fi2scheme_id: 'VA000_003_005',
            fi2scheme_name: 'Mättekniska areabegrepp',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_003_005.xml',
          },
          fi2area_value: {
            unit: 'm2',
            $t: '777.142857142857',
          },
          fi2area_status: {
            fi2class_code: 'Def',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_003_001',
              fi2scheme_name: 'Klassifisering areauppgift',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_003_001.xml',
            },
          },
          fi2area_measuredby: 'Kalles Mätning AB',
          fi2area_measureddate: '2005-10-01',
          fi2area_measuretype: {},
          fi2area_derivedfrom: {},
          fi2area_perimeter: {
            unit: 'm',
            $t: '0',
          },
        },
        {
          fi2area_code: 'BOA',
          fi2area_scheme: {
            fi2scheme_id: 'VA000_003_005',
            fi2scheme_name: 'Mättekniska areabegrepp',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_003_005.xml',
          },
          fi2area_value: {
            unit: 'm2',
            $t: '203',
          },
          fi2area_status: {
            fi2class_code: 'Def',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_003_001',
              fi2scheme_name: 'Klassifisering areauppgift',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_003_001.xml',
            },
          },
          fi2area_measuredby: 'Kalles Mätning AB',
          fi2area_measureddate: '2005-10-01',
          fi2area_measuretype: {},
          fi2area_derivedfrom: {},
          fi2area_perimeter: {
            unit: 'm',
            $t: '0',
          },
        },
        {
          fi2area_code: 'BRA',
          fi2area_scheme: {
            fi2scheme_id: 'VA000_003_005',
            fi2scheme_name: 'Mättekniska areabegrepp',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_003_005.xml',
          },
          fi2area_value: {
            unit: 'm2',
            $t: '227',
          },
          fi2area_status: {
            fi2class_code: 'Def',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_003_001',
              fi2scheme_name: 'Klassifisering areauppgift',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_003_001.xml',
            },
          },
          fi2area_measuredby: 'Kalles Mätning AB',
          fi2area_measureddate: '2005-10-01',
          fi2area_measuretype: 'Default',
          fi2area_derivedfrom: 'Default',
          fi2area_perimeter: {
            unit: 'm',
            $t: '0',
          },
        },
        {
          fi2area_code: 'BTA',
          fi2area_scheme: {
            fi2scheme_id: 'VA000_003_005',
            fi2scheme_name: 'Mättekniska areabegrepp',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_003_005.xml',
          },
          fi2area_value: {
            unit: 'm2',
            $t: '240',
          },
          fi2area_status: {
            fi2class_code: 'Def',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_003_001',
              fi2scheme_name: 'Klassifisering areauppgift',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_003_001.xml',
            },
          },
          fi2area_measuredby: 'Kalles Mätning AB',
          fi2area_measureddate: '2005-10-01',
          fi2area_measuretype: {},
          fi2area_derivedfrom: {},
          fi2area_perimeter: {
            unit: 'm',
            $t: '0',
          },
        },
        {
          fi2area_code: 'AGAR',
          fi2area_scheme: {
            fi2scheme_id: 'VA000_003_005',
            fi2scheme_name: 'Mättekniska areabegrepp',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_003_005.xml',
          },
          fi2area_value: {
            unit: 'm2',
            $t: '262',
          },
          fi2area_status: {
            fi2class_code: 'Def',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_003_001',
              fi2scheme_name: 'Klassifisering areauppgift',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_003_001.xml',
            },
          },
          fi2area_measuredby: 'Kalles Mätning AB',
          fi2area_measureddate: '2005-10-01',
          fi2area_measuretype: 'Default',
          fi2area_derivedfrom: 'Default',
          fi2area_perimeter: {
            unit: 'm',
            $t: '0',
          },
        },
        {
          fi2area_code: 'ATEMP',
          fi2area_scheme: {
            fi2scheme_id: 'VA000_003_005',
            fi2scheme_name: 'Mättekniska areabegrepp',
            fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_003_005.xml',
          },
          fi2area_value: {
            unit: 'm2',
            $t: '291',
          },
          fi2area_status: {
            fi2class_code: 'Def',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_003_001',
              fi2scheme_name: 'Klassifisering areauppgift',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_003_001.xml',
            },
          },
          fi2area_measuredby: 'Kalles Mätning AB',
          fi2area_measureddate: '2005-10-01',
          fi2area_measuretype: {},
          fi2area_derivedfrom: {},
          fi2area_perimeter: {
            unit: 'm',
            $t: '0',
          },
        },
      ],
      fi2spsys_startdate: '1998-07-31',
      fi2spsys_enddate: '2024-08-12',
      fi2spsys_parentobject: {
        fi2item: 'fi2structure',
        fi2parent_ids: {
          fi2_id: ['BUILD-0501'],
        },
      },
    },
  },
}
