const express = require('express');
const router = express.Router();
const db = require('../database');
const memberMapper = require('../mapper/memberMapper');

router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: 'test' });
});

const send = (query, req, res) => {
    db((err, connection) => {
        connection.query(query, (err, rows) => {
            connection.release(); // 연결세션 반환.
            if (err) {
                console.log('ERROR >>>', err);
                throw err;
            }
            return res.json({ data: rows }); // 결과는 rows에 담아 전송
        });
    });
};

// /member/list
router.get('/list', (req, res) => {
    // db select문 수행
    // db((err, connection) => {
    //     connection.query(memberMapper.getMemberlist(), (err, rows) => {
    //         connection.release(); // 연결세션 반환.
    //         if (err) {
    //             throw err;
    //         }
    //         return res.json({ data: rows }); // 결과는 rows에 담아 전송
    //     });
    // });
    send(memberMapper.getMemberlist(), req, res);
});

module.exports = router;
