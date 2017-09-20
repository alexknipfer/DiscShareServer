const discsByLocationResolver = {
  Query: {
    discsByLocation: async ({ db }, { longitude, latitude }) => {
      await db.collection('discs').createIndex({ location: '2dsphere' })
      // await db.collection('discs').ensureIndex({location: '2dsphere'})
      const discs = await db.collection('discs').find({
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
      }).toArray()

      console.log('DISCS: ', discs)
    }
  }
}

module.exports = discsByLocationResolver
