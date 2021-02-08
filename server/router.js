
const express = require('express');
const os = require('os');
const router = express.Router(); //express.Router()의 인스턴스인 router
const mdbconn = require('./database');  //database 연동

//app.get와 기능은 동일하나, router기능을 따로 빼내기 위해 사용
router.get('/api/getUsername', (req, res, next) => {
  res.send( {username: 'test'});
});

router.get('/api/test/:no', (req, res) => { //db로 접근할 수 있는 api 주소와 쿼리문을 추가
    const test = req.params.no;
    console.log('no 값 =>', test);
    mdbconn.query(`SELECT * FROM question_to_me WHERE me_question_seq = '${test}'`, (err, data) => {
        if(!err) {
            // console.log(data);
            res.send(data);
        } else {
            console.log(err);
            res.send(err);
       }
    })
})

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

module.exports = router;