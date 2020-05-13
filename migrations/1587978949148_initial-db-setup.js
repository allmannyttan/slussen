/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.sql(`ALTER DATABASE "api-db" SET timezone = 'Europe/Stockholm'`)

  pgm.sql(`
    CREATE TABLE fastapi_tokens (
      id SERIAL PRIMARY KEY,
      token_value VARCHAR(100),
      created TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
}

exports.down = (pgm) => pgm.sql('DROP TABLE fastapi_tokens')
