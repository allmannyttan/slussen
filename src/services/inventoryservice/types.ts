import {
  Fi2Address,
  Address,
  Fi2Value,
  Fi2Class,
  Fi2ParentObject,
  Fi2Document,
  Fi2Ids,
  Fi2ValueUsage,
} from '@app/commonTypes/types'

// FIXME: read from classlist xml instead?
export const InventoryClassification: { [index: string]: string } = {
  i1: 'Anslags-/namn-tavla',
  i2: 'Avloppssystem',
  i3: 'Badkar',
  i4: 'Badrumsskåp',
  i5: 'Balkong',
  i6: 'Belysning',
  i7: 'Brandlarm',
  i8: 'Braskamin',
  i9: 'Diskmaskin',
  i10: 'Dusch',
  i11: 'EL',
  i12: 'Fläkt',
  i13: 'Frys',
  i14: 'Golvvärme',
  i15: 'Handdukstork',
  i16: 'Hiss',
  i17: 'Kyl/Frys',
  i18: 'Kylskåp',
  i19: 'Låssystem (mekaniskt)',
  i20: 'Mangel',
  i21: 'Mediaskåp tele/Internet',
  i22: 'Microvågsugn',
  i23: 'Porttelefon',
  i24: 'Radiator',
  i25: 'Spis',
  i26: 'Strömbrytare',
  i27: 'Strömuttag',
  i28: 'Torkrum',
  i29: 'Torktumlare',
  i30: 'TV-box',
  i31: 'Tvättmaskin',
  i32: 'Tvättställ',
  i33: 'Ugn',
  i34: 'VA-anläggning del av hus',
  i35: 'VA-anläggning helt hus',
  i36: 'Varmvattenberedare',
  i37: 'WC-stol',
  i38: 'Ventilation',
  i39: 'VVS',
  i40: 'Värmeanläggning',
  i41: 'Värmeskåp',
  i42: 'Värmeväxlare',
  i43: 'Ytskikt',
  i43A: 'Ytskikt golv',
  i43B: 'Ytskikt golv målat',
  i43C: 'Ytskikt golv matta',
  i43D: 'Ytskikt golv klinker',
  i43E: 'Ytskikt golv trä/laminat',
  i43F: 'Ytskikt tak',
  i43G: 'Ytskikt tak målat',
  i43H: 'Ytskikt tak panel',
  i43I: 'Ytskikt vägg',
  i43J: 'Ytskikt vägg målat',
  i43K: 'Ytskikt vägg kaklat',
  i43L: 'Ytskikt vägg tapetserat',
  i43M: 'Ytskikt vägg panel',
  i44: 'Eluttag',
  i45: 'Laddstation',
  i100: 'Övrigt',
}

export interface Inventory {
  id: string
  description: string
  class: {
    code: string
    name: any
  }
  manufacturer: string | undefined
  type: string | undefined
}

export interface Fi2Equipment {
  id: string
  fi2equipment_type?: string
  fi2equipment_manufacture?: string
  fi2equipment_comment?: string
  fi2equipment_class: Fi2Class
}

export interface Fi2EquipmentResponse {
  fi2simplemessage?: {
    fi2equipment: Fi2Equipment[]
  }
}
