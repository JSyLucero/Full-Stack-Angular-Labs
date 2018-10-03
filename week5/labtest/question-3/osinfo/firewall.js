const os = require('os');

module.exports = {
  getStatuses: () => {
    let status = ["OK", "ALLOW", "DENY", "BLOCK"];
    return status;
  }
}