const discsTypeDef = `
  extend type Query {
    discs(userId: String): [Disc]
  }
`

module.exports = discsTypeDef
