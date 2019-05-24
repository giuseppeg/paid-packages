// The real package would validate against a server.
if (process.env.PAID_PACKAGES_TOKEN !== '123') {
  throw new Error(`You need to purchase a license for The O Company.

Try to run \`PAID_PACKAGES_TOKEN=123 npm i\`
`)
}
