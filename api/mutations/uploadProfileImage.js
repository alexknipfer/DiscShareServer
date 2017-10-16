const aws = require('aws-sdk')

const uploadProfileImage = async ({ db }, { filename, filetype }) => {
  const s3Bucket = process.env.S3_BUCKET

  const s3 = new aws.S3({
    signatureVersion: 'v4',
    region: 'us-east-2'
  })

  const s3Params = {
    Bucket: s3Bucket,
    Key: filename,
    Expires: 60,
    ContentType: filetype,
    ACL: 'public-react'
  }

  const signedRequest = await s3.getSignedUrl('putObject', s3Params)
  const url = `https://${s3Bucket}.s3.amazonaws.com/${filename}`

  return {
    signedRequest,
    url
  }
}

module.exports = uploadProfileImage
