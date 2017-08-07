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
    location: String
    lng: String
    lat: String
    img: String
  }
`

module.exports = sharedTypesTypeDef
