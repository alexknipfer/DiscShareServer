const mailgunClient = require('../../lib/clients/MailgunClient')

const mailgun = new mailgunClient()

const addDisc = async (
  { db },
  { discName, locationDescription, longitude, latitude, nameOnDisc, userId }
) => {
  const data = {
    discName,
    locationDescription,
    location: {
      type: 'Point',
      coordinates: [parseFloat(longitude), parseFloat(latitude)]
    },
    nameOnDisc,
    createdBy: userId
  }

  await db.collection('discs').insert(data)
  await mailgun.sendEmail(
    'DiscShare <robot@discshare.com>',
    'alexanderknipfer@gmail.com',
    'Added Disc',
    'You have added a disc successfully'
  )
  return data
}

module.exports = addDisc
