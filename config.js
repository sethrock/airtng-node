// Do not allow the application to run if env vars not set in .env file
require('dotenv-safe').load();

module.exports = {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
  phoneNumber: process.env.TWILIO_NUMBER,
  applicationSid: process.env.TWIML_APPLICATION_SID
};
