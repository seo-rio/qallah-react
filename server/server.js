const morgan = require('morgan');
const express = require('express');
const path = require('path');
const router = require('./routes/router');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'public/')));
app.use(morgan('combined'));
app.use('/', router);

// /member, /login, /madu
// "/"로 시작되는 모든 요청을 router.js로 넘겨주겠다는 의미

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});
