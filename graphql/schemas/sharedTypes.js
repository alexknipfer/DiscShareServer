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
    location: Location
    nameOnDisc: String
  }

  type Location {
    type: String,
    coordinates: [Float]
  }
`

module.exports = sharedTypesTypeDef
