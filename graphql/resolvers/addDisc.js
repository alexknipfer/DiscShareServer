const addDiscResolver = {
  Mutation: {
    addDisc: async (
      { db },
      { discName, locationDescription, latitude, longitude, nameOnDisc }
    ) => {
      const data = {
        discName,
        locationDescription,
        latitude,
        longitude,
        nameOnDisc
      }

      await db.collection('discs').insert(data)
      return data
    }
  }
}

module.exports = addDiscResolver
