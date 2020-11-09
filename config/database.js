// var mariadb = require('mariadb');

//createConnection 메소드의 인자로 전달되는 객체에 자신의 데이터베이스 정보를 입력

module.exports = (function() {
    return{
    host:'118.67.128.222', //db 연결 정보
    //자기 컴퓨터에 설치 - localhost / naver cloud platform을 통해 설치 - server ip
    // 서버의 ip -> 서버에 설치한 디비에 접근 가능  작성한 ip는 서비스용 공인 ip(유료)
    port: 3306,//mariadb 고유 포트 번호 3306
    password:'P@ssw0rd',
    database: 'qallah'
  }
})();

// async function getUserList() {
//   let conn, rows;
//   try {
//     conn = await pool.getConnection();
//     conn.query('USE test');
//     rows = await conn.query('SELECT * from users');
//   } 
//   catch(err) {
//     throw err;
//   }
//   finally{
//     if(conn) {
//       conn.end();
//     }
//     return rows;
//   }
// }

// module.exports = {getUserList}