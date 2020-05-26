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

// config.path = 'src/services/authservice/types.ts'
// const leaseContractSchema = tsj.createGenerator(config).createSchema(config.type)

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'FastAPIAPI', // Title (required)
      version: '0.1.0', // Version (required)
      description: 'Modern front till fastAPI', // Description (optional)
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
specs.definitions = {}
specs.definitions.Tenant = tenantSchema.definitions.Tenant
specs.definitions.Address = tenantSchema.definitions.Address
specs.definitions.PhoneNumber = tenantSchema.definitions.PhoneNumber
specs.definitions.EmailAddress = tenantSchema.definitions.EmailAddress
specs.definitions.Contact = tenantSchema.definitions.Contact
specs.definitions.Rental = rentalSchema.definitions.Rental
specs.definitions.Area = rentalSchema.definitions.Area
specs.definitions.Document = rentalSchema.definitions.Document
specs.definitions.Contract = leaseContractSchema.definitions.Contract
specs.definitions.ContractPartner = leaseContractSchema.definitions.ContractPartner
specs.definitions.ContractDocument = leaseContractSchema.definitions.ContractDocument
specs.definitions.ContractRentalObject = leaseContractSchema.definitions.ContractRentalObject
specs.definitions.RentalType = leaseContractSchema.definitions.RentalType

fs.writeFileSync('swagger.json', JSON.stringify(specs, null, 2))
