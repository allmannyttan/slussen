/********** Fi2XML types **********/

export interface Fi2SchemeNode {
  fi2scheme_id: string
  fi2scheme_name: string
  fi2scheme_url: string
}

export interface Fi2ClassNode {
  fi2class_code: string
  fi2class_scheme: Fi2SchemeNode
}

export interface Fi2ValueNode {
  fi2value_code: string
  fi2value_scheme: Fi2SchemeNode
}

export interface Namespace {
  'xmlns:xsi': string
  'xsi:noNamespaceSchemaLocation': string
}

export interface Author {
  name: string
  company: string
}

export interface Metadata {
  identity: string
  description: string
  version: string
  date: string
  author: Author
  reference: string
}
export interface ListItem {
  'item-value': string
  'item-description': string
  'item-definition': string
  'list-item'?: ListItem[]
}

export interface Validationlist {
  'list-value': string
  'list-description': string
  'list-definition': string
  'list-item': ListItem[]
}

export interface Document {
  $: Namespace
  metadata: Metadata[]
  validationlist: Validationlist
}

export interface Fi2ClassListXml {
  document: Document
}
