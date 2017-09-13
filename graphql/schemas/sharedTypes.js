const sharedTypesTypeDef = `
  type User {
    id: ID
    email: String
    username: String
    password: String
  }

  type Disc {
    id: ID
    discName: String
    locationDescription: String
    latitude: String
    longitude: String
    nameOnDisc: String
  }
`

module.exports = sharedTypesTypeDef
