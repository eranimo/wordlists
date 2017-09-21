exports.path = require('path').join(__dirname, 'lists');
exports.files = require('fs').readdirSync(exports.path);
