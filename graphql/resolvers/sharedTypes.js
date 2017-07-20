const sharedTypesResolver = {
  User: {
    id: ({ _id }) => _id
  }
}

module.exports = sharedTypesResolver
