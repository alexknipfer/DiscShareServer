const mailgunClient = require('mailgun-js')

class MailgunClient {
  constructor() {
    this.mailgun = mailgunClient({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    })
  }

  async sendEmail(messageConfig) {
    const emailData = {
      from: 'DiscShare <robot@discshare.com>',
      ...messageConfig
    }

    try {
      return await this.mailgun.messages().send(emailData)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = MailgunClient
