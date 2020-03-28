const crypto = require('crypto');

module.exports = function generateUniqueIdUsingCrypto() {
  return crypto.randomBytes(4).toString("HEX");
}
