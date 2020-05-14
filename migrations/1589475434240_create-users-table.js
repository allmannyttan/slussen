/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE,
      locked BOOLEAN NOT NULL DEFAULT false,
      disabled BOOLEAN NOT NULL DEFAULT false,
      passwordHash varchar(200),
      salt varchar(200),
      failedLoginAttempts SMALLINT DEFAULT 0,
      created TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
}

exports.down = (pgm) => pgm.sql('DROP TABLE users')
