const mailgunClient = require('mailgun-js')

class MailgunClient {
  constructor() {
    this.mailgun = mailgunClient({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    })
  }

  async sendEmail(from, to, subject, text) {
    const emailData = { from, to, subject, text }

    try {
      return await this.mailgun.messages().send(emailData)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = MailgunClient
