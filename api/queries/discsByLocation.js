const discsByLocation = async ({ db }, { longitude, latitude, radius }) => {
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
          $maxDistance: radius * 1609.34
        }
      }
    })
    .toArray()
}

module.exports = discsByLocation
