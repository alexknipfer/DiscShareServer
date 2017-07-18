const testTypeDef = `
  extend type Query {
    hello: String
  }
`

const testResolver = {
  Query: {
    hello: () => {
      return 'Hello World'
    }
  }
}

module.exports = {
  testTypeDef,
  testResolver
}
