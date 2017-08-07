const sharedTypesResolver = {
  User: {
    id: ({ _id }) => _id
  },
  Disc: {
    id: ({ _id }) => _id
  }
}

module.exports = sharedTypesResolver
