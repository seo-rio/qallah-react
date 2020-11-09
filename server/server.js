const mdbConn = require('../config/database');
const express = require('express');
const app = express();

mdbConn
    .getUserList()
    .then((rows) => {
        console.log(rows);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });

const port = 5000; //정상이면 포트번호가
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
