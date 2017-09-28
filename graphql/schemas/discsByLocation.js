const discsByLocationTypeDef = `
    extend type Query {
        discsByLocation(longitude: String, latitude: String, radius: Int): [Disc]
    }
`

module.exports = discsByLocationTypeDef
