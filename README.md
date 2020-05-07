# Svensk allmännytta


Code in this repo uses Version 1 of fastAPI, without "tillgäggspaket".
Documentation of fastAPI is available here http://www.fastapi.se/apidocprop/v1/ 


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



## Sandbox example URLs
Get all tenants (i.e. partners with class 16)
/api/fi2partner?filter=fi2part_class.fi2class_code:'16'
(endoded: %2Fapi%2Ffi2partner%3Ffilter%3Dfi2part_class.fi2class_code%3A%2716%27%0A)

