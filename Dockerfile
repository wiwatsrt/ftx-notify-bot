FROM node:16.13.0-alpine AS BASEIMAGE

WORKDIR /src
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . .
RUN yarn prebuild && yarn build && yarn cache clean

FROM node:16.13.0-alpine

WORKDIR /src
ENV TZ=Asia/Bangkok
COPY --from=BASEIMAGE /src/dist /src/dist
COPY --from=BASEIMAGE /src/node_modules /src/node_modules
EXPOSE 3000

CMD ["node", "dist/main.js"]