# About

**Slussen** is a simplified API gateway to [fastAPI](http://www.fastapi.se).

Slussen currently supports retreiving three kinds of objects from fastAPI version 1:

- **tentants** (fi2partners with partner class id 16)
- **contracts** (fi2contracts)
- **rentalobjects** (fi2spatisystems)

The object types have been renamed to make more sense for integration partners without explicit knowledge of fi2xml.

Slussen uses **JSON** instead of XML. The reason for this is increased operability with different programming languages and platforms, as well as more lightweight parsing (more suitable for mobile platforms).

Slussen uses a simplified filter functionality, both for limiting result sets and including related objects. Instead of the generic query style filters of fastAPI each field or included object has its own query parameter (i.e. "includetenants=true").

Some parameters have also been set to "should work for most" defaults (for instance page size for queries is set to 5000 instead of 10) to make it easier to get started. These parameters should be reviewed before going to production.

## Getting started

This API uses JWT for auth. The token should be passed in `Authorization` header to protected routes.

These routes are useful:

`POST /auth/generate-token` to generate a token. Post this object

```
{username: 'your username', password: 'your cleartext password'}
```

`GET /auth/refresh-token` to refresh token

### User creation

You currently have to create the API users in the database by hand.

`GET /auth/generate-password-hash?password=<cleartext password>` to genererate a salt and hash to write to database when creating a user

### Development tools

`GET /auth/test` to test if a token is valid

## More info

Source code for this project and more info on how to setup your own development environment can be found at https://github.com/Allmannyttans-Digitaliseringsinitiativ/slussen
