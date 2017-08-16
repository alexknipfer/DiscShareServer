const addDiscTypeDef = `
  extend type Mutation {
    addDisc(discName: String!, discLocation: String!, nameOnDisc: String): Disc
  }
`

module.exports = addDiscTypeDef
