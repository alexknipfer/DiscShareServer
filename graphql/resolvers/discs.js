const discsResolver = {
  Query: {
    discs: async ({ db }) => {
      return await db
        .collection('discs')
        .find()
        .toArray()
    }
  }
}

module.exports = discsResolver
