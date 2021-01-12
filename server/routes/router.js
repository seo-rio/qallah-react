const express = require('express');
const member = require('./member');

const router = express.Router();

router.use('/member', member); // /member/list, /member/info ... prefix가 member인놈들을 이동시킨다.
// router.use('/question', question);

module.exports = router;
