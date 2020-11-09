
const express = require('express');
const os = require('os');
const router = express.Router();
const mdbconn = require('./database');

router.get('/api/getUsername', (req, res, next) => {
  res.send( {username: 'test'});
});

router.get('/getData', (req, res) => {
    mdbconn.query("select * from `member`", (err, rows) => {
        if(!err) {
            console.log('success');
            res.send(rows);
        }else {
            console.log(`query err : ${err}`);
            res.send(err);
        }
    });
});
// 명시된 URL로 요청이 들어요면 os.userInfo() 함수를 통해
//현재 OS에 로그인된 유저의 이름을 가져오고 해당 값을 반환

module.exports = router;