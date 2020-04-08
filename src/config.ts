import configPackage from '@iteam/config'

export interface Config {
  port: number
  fastAPI: {
    baseURL: string
    accessToken: string
  }
}

const config = configPackage({
  file: `${__dirname}/../config.json`,
  defaults: {
    port: 4000,
  },
})

export const port: Config['port'] = config.get('port')
export const fastAPI: Config['fastAPI'] = config.get('fastAPI')

export default {
  port: config.get('port'),
  fastAPI: config.get('fastAPI'),
} as Config
