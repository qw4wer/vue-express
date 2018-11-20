import express from 'express';

const router = express.Router();
import db from '../db';

import cryptUtils from '../utils/crypto.utils'


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/login', function (req, res, next) {
    const {userName, userPwd} = req.body;
    const result = {};

    let user = db.findByCond({
        table: 'user',
        filter: {
            userName: userName,
            userPwd: cryptUtils.md5Encryption(userPwd)
        }
    })

    if (user) {
        result.type = true;
    }else{
        result.type = false;
    }

    res.send(result);
})

router.get('/:id', function (req, res, next) {
    res.json({id: req.params});

    db.db.get("")
})


module.exports = router;
