const discsResolver = {
  Query: {
    discs: ({ db }) => {
      return db
        .collection('discs')
        .find()
        .toArray()
    }
  }
}

module.exports = discsResolver
