const addDiscResolver = {
  Mutation: {
    addDisc: async (
      { db },
      { discName, locationDescription, longitude, latitude, nameOnDisc }
    ) => {
      const data = {
        discName,
        locationDescription,
        location: {
          type: 'Point',
          coordinates: [parseFloat(longitude), parseFloat(latitude)]
        },
        nameOnDisc
      }

      await db.collection('discs').insert(data)
      return data
    }
  }
}

module.exports = addDiscResolver
