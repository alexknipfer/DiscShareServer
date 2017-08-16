const addDiscResolver = {
  Mutation: {
    addDisc: async ({ db }, { discName, discLocation, nameOnDisc }) => {
      const data = {
        discName,
        discLocation,
        nameOnDisc
      }

      await db.collection('discs').insert(data)
      return data
    }
  }
}

module.exports = addDiscResolver
