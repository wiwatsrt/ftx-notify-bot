# FTX Notify Bot
Get Telegram notifications if orders are filled. Run on k8s

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

## Run on k8s
```
kubectl apply -f deployment.yaml,ftx-notify-secrets.yml
```

## Thanks

Forked from [raftheunis87/order-alert-bot](https://github.com/raftheunis87/order-alert-bot)

## License

[MIT licensed](LICENSE).
