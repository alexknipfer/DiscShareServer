const addDiscTypeDef = `
  extend type Mutation {
    addDisc(discName: String!, locationDescription: String!, latitude: String!, longitude: String!, nameOnDisc: String): Disc
  }
`

module.exports = addDiscTypeDef
