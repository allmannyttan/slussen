const tsj = require('ts-to-json')
const fs = require('fs')
const swaggerJsdoc = require('swagger-jsdoc')

const config = {
  path: 'src/services/tenantservice/types.ts',
  tsconfig: 'tsconfig.json',
  type: '*', // Or <type-name> if you want to generate schema for that one type only
  expose: 'export',
  jsDoc: 'extended',
  topRef: true,
}
const tenantSchema = tsj.createGenerator(config).createSchema(config.type)

config.path = 'src/services/rentalservice/types.ts'
const rentalSchema = tsj.createGenerator(config).createSchema(config.type)

config.path = 'src/services/leasecontractservice/types.ts'
const leaseContractSchema = tsj.createGenerator(config).createSchema(config.type)

const description = fs.readFileSync('./description.md').toString()

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    openapi: '3.0.0',
    info: {
      title: 'Slussen', // Title (required)
      version: '0.1.0', // Version (required)
      description: description,
    },
    basePath: '/', // Base path (optional)
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: [
    'src/services/tenantservice/index.ts',
    'src/services/leasecontractservice/index.ts',
    'src/services/rentalservice/index.ts',
    'src/services/authservice/index.ts',
  ],
}

const specs = swaggerJsdoc(options)
specs.components = {}
specs.components.schemas = {}
specs.components.schemas.Tenant = tenantSchema.definitions.Tenant
specs.components.schemas.Address = tenantSchema.definitions.Address
specs.components.schemas.PhoneNumber = tenantSchema.definitions.PhoneNumber
specs.components.schemas.EmailAddress = tenantSchema.definitions.EmailAddress
specs.components.schemas.Contact = tenantSchema.definitions.Contact
specs.components.schemas.Rental = rentalSchema.definitions.Rental
specs.components.schemas.Area = rentalSchema.definitions.Area
specs.components.schemas.Document = rentalSchema.definitions.Document
specs.components.schemas.Contract = leaseContractSchema.definitions.Contract
specs.components.schemas.ContractPartner = leaseContractSchema.definitions.ContractPartner
specs.components.schemas.ContractDocument = leaseContractSchema.definitions.ContractDocument
specs.components.schemas.ContractRentalObject = leaseContractSchema.definitions.ContractRentalObject
specs.components.schemas.RentalType = leaseContractSchema.definitions.RentalType
specs.components.securitySchemes = {
  bearerAuth: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  },
}

let specJson = JSON.stringify(specs, null, 2)
// Make it OpenAPI 3 compliant
specJson = specJson.replace(/"\$ref": "#\/definitions\//gm, '"$$ref": "#/components/schemas/')

fs.writeFileSync('swagger.json', specJson)
