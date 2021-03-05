var express = require('express')
var router = express.Router();




// router.get('/fenlei', function (req, res) {
//     res.json(['小红', '小明'])
// });

// router.get('/login/:userphone',function(req,res){
//     var userphone  = req.params.userphone;
//     // console.log(userphone)
//     let sql = `SELECT * FROM login where userphone = '${userphone}'`;
//      req.db.driver.execQuery(sql, (err, datas) => {
//       res.json(datas)
//       console.log(datas)
//   })
// })
router.post('/login', function (req, res) {
    var userphone = req.body.userphone;
    var userpsd = req.body.userpsd;
    let sql = `SELECT * FROM login where userphone = '${userphone}';`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
        console.log(datas)
        // req.session.user = req.body;
    })
    // if (userphone == datas. && pwd == '123') {
    //     req.session.user = req.body;
    //     res.json('登录成功')
    // }
    // else {
    //     res.json('登录失败')
    // }
});

router.get('/layout',function(req,res){
    req.session.user = null;
    res.json('退出登录成功')
})


router.post('/register',function(req,res){
    console.log(req.body.userphone,"ccccc")
    var userphone  = req.body.userphone;
    var username  = req.body.username ;
    var userpsd   = req.body.userpsd ;
    let sql = `INSERT INTO login (userphone,username,userpsd) VALUES ('${userphone}','${username}','${userpsd}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
    })
})

router.get('/fenlei',function(req,res){
    let sql = "SELECT * FROM bookfeilei;"
     req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas)
  })

})
router.get('/user/:userphone',function(req,res){
    var userphone  = req.params.userphone;
    console.log(userphone)
    let sql = `SELECT * FROM login where userphone = '${userphone}'` ;
     req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas)
    //   console.log(datas)
  })
})
 router.post('/history',function(req,res){
    var bookid = req.body.bookid;
    var bookname = req.body.bookname ;
    var bookauthor  = req.body.bookauthor ;
    console.log(bookid,bookname,bookauthor)
    let sql = `INSERT INTO historyfoot (bookid,bookname,bookauthor) VALUES ('${bookid}','${bookname}','${bookauthor}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
    })
 })

module.exports = router;