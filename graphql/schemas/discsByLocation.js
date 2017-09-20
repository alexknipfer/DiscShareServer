const discsByLocationTypeDef = `
    extend type Query {
        discsByLocation(longitude: String, latitude: String): [Disc]
    }
`

module.exports = discsByLocationTypeDef
