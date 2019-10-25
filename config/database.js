const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb+srv://fleece:tz12ep34f3012@@cluster0-vfiyn.mongodb.net/test?retryWrites=true&w=majority', // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: 'users' // Database name
}