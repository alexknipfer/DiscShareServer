const discsByLocationResolver = {
  Query: {
    discsByLocation: ({ db }, { longitude, latitude }) => {
      db.discs.createIndex({ location: '2dsphere' })
      return db.discs.find({
        location: {
          $near: {
            $geometry: {type: 'Point', coordinates: [longitude, latitude]},
            $minDistance: 0,
            $maxDistance: 100
          }
        }
      }).toArray()
    }
  }
}

module.exports = discsByLocationResolver
