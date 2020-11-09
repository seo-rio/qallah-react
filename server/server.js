// const db = require('../config/database');
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 4000;

// db.getUserList().then((rows) => console.log(rows))
// .catch((err) => { console.log(err); });

// app.listen(PORT, () => {
//   console.log(`listening on ${PORT}`);
// });

var sql = require('./select');

console.log('**Started');

sql.select(function(err, data) {
  if(err) console.log(err);
  else console.log(data);

  sql.pool.end(function(err) {
    if(err) console.log(err);
    else{
      console.log('**Finished');
    }
  });
});