# Income Calculator & Comparator

Income calculator & comparator for the Czech Republic.

So far works for:

- freelancer
- employee

## Stack

- Sveltekit
- TypeScript
- Tailwind CSS

Works also with JavaScript disabled in the browser.

## Install

### Authenticate with GitHub

The `@exmaxx/cz-income-lib` is published on GitHub NPM and
**needs Github authentication**, even though it is public.

The problem is documented [here](https://github.com/orgs/community/discussions/25979)
and [here](https://github.com/orgs/community/discussions/33875).

#### Get PAT token

1. Generate a personal access token (PAT) from [here](https://github.com/settings/tokens).
With `read:packages` scope.
2. Place token to `.npmrc` file. Replace `<YOUR_TOKEN>` with your token:

```
//npm.pkg.github.com/:_authToken=<YOUR_TOKEN>
```

Or place the whole line to your global `~/.npmrc`.

### Install packages

```bash
# Run after you placed your PAT token to `.npmrc`
yarn
```

## Run

### Run dev server

```bash
# Run in dev mode
yarn dev
```

### Build and preview

```bash
# Build and preview in production mode
yarn build && yarn preview
```

## Licence

No licence. The code is not free to use at the moment.
