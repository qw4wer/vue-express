const crypto = require('crypto');


const md5Encryption = (val) => {
    const md5 = crypto.createHash('md5');
    const result = md5.update('a').digest('hex');
    return result;
}

module.exports = {
    md5Encryption: md5Encryption
}