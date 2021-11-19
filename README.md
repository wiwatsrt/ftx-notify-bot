# FTX Notify Bot
Get Telegram notifications if orders are filled. Run on k8s

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Local Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Build Image
```
docker buildx build -t wiwatsrt/ftx-notify-bot --platform linux/arm64,linux/arm/v7 --push .
```

## Create secret
create `FTX_ACCOUNTS` for `ftx-notify-secrets.yml`

```
echo -n '[{"key":"key","secret":"secret","subaccount":"account name"}]' | base64
```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Thanks

Forked from [raftheunis87/order-alert-bot](https://github.com/raftheunis87/order-alert-bot)

## License

Nest is [MIT licensed](LICENSE).
