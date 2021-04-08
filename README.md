# Slussen

Code in this repo uses Version 1 of fastAPI, without "tillgäggspaket".
Documentation of fastAPI is available here http://www.fastapi.se/apidocprop/v1/

## What is slussen?

Slussen is a middleware for FastAPI. fastAPI is a REST-API that returns XML. Slussen handles this data and presents it in an easier way (JSON).

A lot of Allmännyttas services uses this, and when you develop Allämnnyttans services, this is often used and should be running locally on your computer.

---

# Development

## Dependencies

- Node.js installed preferably using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Docker installed](https://docs.docker.com/get-docker/)
- [Docker Compose installed](https://docs.docker.com/compose/install/)

## Developing

- Slussen uses PostgreSQL that we run in Docker
- database migrations run automatically when the project is run
- you need some configuration files as described in the [Config section](#-Config)

### Config

- we use [@iteam/config](https://iteam1337.github.io/#/config/examples) package

- create a file called `config.json` in the project directory with the following defaults:

  ```json
  {
    "port": 4000,
    "postgres": {
      "host": "localhost",
      "port": 5432,
      "user": "postgres",
      "password": "postgrespassword",
      "database": "api-db"
    },
    "fastAPI": {
      "baseURL": "http://www.fastapi.se/backendprop/v1/api/",
      "accessToken": "12345",
      "user": "demouser",
      "password": "demopassword"
    }
  }
  ```

- `config.json` is ignored by git so you can use different values that suit your needs, above is an example

- also create a `.env` in the project directory. This is for the package running the DB migrations

  ```
  DATABASE_URL=postgres://postgres:postgrespassword@127.0.0.1:5432/api-db
  ```

### Run Docker Compose

```bash
docker-compose up -d
```

### Install packages

```bash
nvm use
npm i
```

### Run the app

```
npm start
```

### Run the app using a file watcher

```
npm run dev
```

- This starts Slussen here http://localhost:4000

- Swagger generated docs are available on http://localhost:4000/api-docs

---

# Usage

### User creation

You currently have to create the API users in the database by hand.

`GET /auth/generate-password-hash?password=<cleartext password>` to genererate a salt and hash to write to database when creating a user

```sql
INSERT INTO users (username, password_hash, salt)
VALUES
  (
    '<USERNAME>', '<PASSWORD HASH>',
    '<SALT>'
  );

```

## Authorization

### Token-based login

This API uses JWT for auth. The token should be passed in `Authorization` header to protected routes.

These routes are useful:

`POST /auth/generate-token` to generate a token. Post this object

```
{username: 'your username', password: 'your cleartext password'}
```

`GET /auth/refresh-token` to refresh token

### Development tools

`GET /auth/test` to test if a token is valid

## Sandbox example URLs

Get all tenants (i.e. partners with class 16)
/api/fi2partner?filter=fi2part_class.fi2class_code:'16'
(endoded: %2Fapi%2Ffi2partner%3Ffilter%3Dfi2part_class.fi2class_code%3A%2716%27%0A)
