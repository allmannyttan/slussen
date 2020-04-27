import configPackage from '@iteam/config'

export interface Config {
  port: number
  fastAPI: {
    baseUrl: string
    accessToken: string
  }
  paths: {
    classlists: string
    valuelists: string
  }
  postgres: {
    host: string
    port: number
    user: string
    password: string
    database: string
    schema?: string
  }
}

const config = configPackage({
  file: `${__dirname}/../config.json`,
  defaults: {
    port: 4000,
    paths: {
      classlists: `${__dirname}/fastAPIXml/classlists/`,
      valuelists: `${__dirname}/fastAPIXml/valuelists/`,
    },
    postgres: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgrespassword',
      database: 'api-db',
    },
  },
})

export const port: Config['port'] = config.get('port')
export const fastAPI: Config['fastAPI'] = config.get('fastAPI')
export const paths: Config['paths'] = config.get('paths')
export const postgres: Config['postgres'] = config.get('postgres')

export default {
  port: config.get('port'),
  fastAPI: config.get('fastAPI'),
  paths: config.get('paths'),
  postgres: config.get('postgres'),
} as Config
