/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.sql(`ALTER DATABASE "api-db" SET timezone = 'Europe/Stockholm'`)

  pgm.sql(`
    CREATE TABLE fastapi_tokens (
      token_value VARCHAR(100),
      created TIMESTAMPTZ,
      is_valid BOOLEAN
    )
  `)
}

exports.down = (pgm) => pgm.sql('DROP TABLE fastapi_tokens')
