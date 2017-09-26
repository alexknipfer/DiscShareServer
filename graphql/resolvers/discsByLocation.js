const discsByLocationResolver = {
  Query: {
    discsByLocation: async ({ db }, { longitude, latitude }) => {
      await db.collection('discs').createIndex({ location: '2dsphere' })

      return await db
        .collection('discs')
        .find({
          location: {
            $near: {
              $geometry: {
                type: 'Point',
                coordinates: [parseFloat(longitude), parseFloat(latitude)]
              },
              $minDistance: 0,
              $maxDistance: 100
            }
          }
        })
        .toArray()
    }
  }
}

module.exports = discsByLocationResolver
