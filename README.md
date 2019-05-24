# Paid Packages

Allows you to make a living out of your npm packages.

Disclaimer this is just an idea, a very controversial one. Let me pitch it to you in length.

I envisioned a system where you, the library owner, can make a buck from every user of your library by installing a package of mine that validates a customer token defined as env variable when running `npm i`. If the user hasn't paid for your package the install would fail.

All you'd need to do is install my package:

```
npm i paid-packages
```

All your users would need to do is pay for your package and use a single token for all the packages:

```
PAID_PACKAGES_TOKEN=123 npm i
```

## Proof of Concept

You can see a proof of concept by executing the following commands. The install should fail.

```
cd example/app
npm i
```

However if you install with a token it'll work:

```
cd example/app
PAID_PACKAGES_TOKEN=123 npm i
```

## Details

Below is an example. I'll be referring to the service as `SERVICE` and to my npm package as `PKG`.

- Babel wants to make `babel-core` paid. They install `PKG`.
- Users who want to use `babel-core` need to register to my `SERVICE` and get a token and then pay for babel-core ($1/month or something).
- Now they can install babel-core with `PAID_PACKAGES_TOKEN=123 npm install babel-core`
- `PKG` makes a request to the `SERVICE` servers to validate that `TOKEN=123` has paid for babel-core
- When validation fails it breaks npm install. Basically `PKG` is an install hook that makes the installation fail when the user is not paying for `PKG`.

`SERVICE` will only accept popular (TBD downloads/week) packages. New packages are free until they become popular enough and provide real value.

`SERVICE` will require packages owners to do a major release to introduce the paid version and change the LICENSE type.

Core members of those packages do revenue share or TBD (like open collective). Occasional contributors either get some kind of credit or get to use the library (eg. babel-core) for free. Companies need to pay for a software like they do for other non-software services.



