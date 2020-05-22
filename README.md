# Svensk allmännytta

Code in this repo uses Version 1 of fastAPI, without "tillgäggspaket".
Documentation of fastAPI is available here http://www.fastapi.se/apidocprop/v1/

## Config

### Local machine

Put a file called config.json in the project directory:

```
{
  "port": 4000, // API port
  "postgres": {
    "host": "localhost",
    "port": 5432,
    "user": "postgres",
    "password": "password",
    "database": "api-db"
  },
  "fastAPI": {
    "baseURL": "https://...",
    "accessToken": "12345", // only used for sandbox
    "user": "user", // user for fastAPI, used to obtain access token
    "password": "password" // password for fastAPI, used to obtain access token
  }
}
```

Also put an .env in project directory. This is for the migrations.

```
#URL for postgres migrations
DATABASE_URL=postgres://postgres:postgrespassword@127.0.0.1:5432/api-db
```

### Environment variables

Translate fields in config.json by converting to uppercase and replacing . with \_\_, and camelCase with snake_case. Examples:

PORT=4000
POSTGRES**HOST=localhost
FAST_API**BASE_URL=https://...

## Dependencies

A PostgreSQL database, started using `docker-compose`.
Database migrations will set up the database on `npm start` and `npm run dev`.

## Starting

```
$ nvm use
$ npm i
$ docker-compose up -d
$ npm start
```

## Developing

```
$ nvm use
$ npm i
$ docker-compose up -d
$ npm run dev
```

This starts the api here http://localhost:4000
Swagger generated docs are available on http://localhost:4000/api-docs

## Authorization
This API uses JWT for auth. The token should be passed in `Authorization` header to protected routes.
These routes are usefull.

`POST /auth/generate-token` to generate a token. Post this object 
```
{username: 'your username', password: 'your cleartext password'}
```

`GET /auth/refresh-token` to refresh token

`GET /auth/test` to test if a token is valid

`GET /auth/generate-password-hash?password=<cleartext password>` to genererate a salt and hash to write to database when creating a user

## Sandbox example URLs

Get all tenants (i.e. partners with class 16)
/api/fi2partner?filter=fi2part_class.fi2class_code:'16'
(endoded: %2Fapi%2Ffi2partner%3Ffilter%3Dfi2part_class.fi2class_code%3A%2716%27%0A)
