const sharedTypesTypeDef = `
  type User {
    id: ID
    email: String
    username: String
    password: String
  }

  type Disc {
    id: ID
    name: String
    locationDescription: String
    latitude: String
    longitude: String
    img: String
  }
`

module.exports = sharedTypesTypeDef
