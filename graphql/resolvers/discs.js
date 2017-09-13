const discsResolver = {
  Query: {
    discs: async ({ db }) => {
      return db
        .collection('discs')
        .find()
        .toArray()
    }
  }
}

module.exports = discsResolver
