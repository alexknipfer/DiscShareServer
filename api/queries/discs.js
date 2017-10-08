const discs = async ({ db }, { userId }) => {
  return await db
    .collection('discs')
    .find({ createdBy: userId })
    .toArray()
}

module.exports = discs
