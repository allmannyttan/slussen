
FROM node:16.13.1-alpine

# Fixes for Python missing for node-gyp
# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python3 \
    make \
    g++

COPY package.json /app/
COPY package-lock.json /app/
COPY @types /app/@types
COPY tsconfig.json /app/
COPY swagger.json /app/
COPY src /app/src
COPY public /app/public
COPY migrations /app/migrations

WORKDIR /app
VOLUME /app/data

RUN npm install
RUN apk del build-dependencies

CMD /bin/sh -c "npm run dev"
