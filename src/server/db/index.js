// const path = require('path')
// const low = require('lowdb')

import path from 'path';
import low from 'lowdb';
import lodashId from 'lodash-id';
import cryptUtils from '../utils/crypto.utils'
import FileSync from 'lowdb/adapters/FileSync';

const p = path.resolve(__dirname, '../db/db.json');

const adapter = new FileSync(p)
const db = low(adapter);
db._.mixin(lodashId);
const init = () => {
    db.defaults({
        user: [
            {
                id: lodashId.createId(),
                userName: 'admin',
                userPwd: cryptUtils.md5Encryption('a123456')
            }

        ], info: {}
    }).write();
    db.set("info.initialization", true).write();
    console.log("initialization success");
}

const findByCond = (cond) => {
    if (!cond.table) {
        throw new Error('cond.table is null');
    }
console.log(...cond);
    return db.get(cond.table).find(cond.filter || {}).value();

}

(() => {
    let s = db.get("info").get('initialization').value();
    if (!s) {
        init();
    }

})();

module.exports = {
    db: db,
    findByCond: findByCond
}



