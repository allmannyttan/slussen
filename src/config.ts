import configPackage from '@iteam/config'

interface Foo {
  bar: 'baz'
}

export interface Config {
  foo: Foo
}

const config = configPackage({
  file: `${__dirname}/../config.json`,
  defaults: {
    port: 4000,
  },
})

export default {
  foo: config.get('foo'),
} as Config
