const discsResolver = {
  Query: {
    discs: ({ db }, { userId }) => {
      return db
        .collection('discs')
        .find({ createdBy: userId })
        .toArray()
    }
  }
}

module.exports = discsResolver
