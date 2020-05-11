
FROM node:13.2.0-alpine

COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
COPY src /app/src

WORKDIR /app
VOLUME /app/data

RUN npm install

CMD /bin/sh -c "npm run dev"