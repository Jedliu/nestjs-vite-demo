## Description

A demo for [Nest](https://github.com/nestjs/nest) to work with [vite-plugin-node](https://github.com/axe-me/vite-plugin-node). Test can be run by Jest and Vitest.

## Installation

```bash
$ pnpm install
```

## Running the app with Nestjs default way

```bash
# development
$ pnpm run start
```

## Running the app with vite

```bash
# development
$ pnpm run start:vite
```

## Test with Jest

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Test with Vitest

```bash
# unit tests
$ pnpm run test:vitest
```

## To work with socket

```bash
# run the server
$ pnpm run start

# visit http://localhost:3000 for testing
```

## Known problem

The nestjs socket doesn't work with vite yet.
