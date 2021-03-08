var express = require('express')
var router = express.Router();

router.post('/login', function (req, res) {
    var userphone = req.body.userphone;
    var userpsd = req.body.userpsd;
    let sql = `SELECT * FROM login where userphone = '${userphone}';`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
        // console.log(datas)
        // req.session.user = req.body;
    })

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
    // console.log(userphone)
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
    let sql = `INSERT INTO historyfoot (bookid,bookname,bookauthor) VALUES ('${bookid}','${bookname}','${bookauthor}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
    })
 })

 router.post('/history1',function(req,res){
    var bookid = req.body.bookid;
    let sql1 = `DELETE FROM historyfoot WHERE bookid ='${bookid}'`
    req.db.driver.execQuery(sql1, (err, datas1) => {
        res.json(datas1)
    })
})

router.get('/history2',function(req,res){
    let sql = `SELECT * FROM historyfoot;`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
    })
})

router.get('/isflag/:bookname',function(req,res){
    var bookname  = req.params.bookname;
    let sql = `SELECT * FROM bookshelf where bookname = '${bookname}'` ;
    // console.log(bookname);
     req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas)
    //   console.log(datas)
  })
})
router.post('/shelf',function(req,res){
    var bookid = req.body.bookid;
    var bookname = req.body.bookname ;
    var bookauthor  = req.body.bookauthor ;
    var bookimg = req.body.bookimg;
    var userphone = req.body.userphone;
    var bookjianjie = req.body.bookjianjie;
    // console.log(bookid,bookname,bookauthor,bookimg,userphone)
    // let sql = `INSERT INTO historyfoot (bookid,bookname,bookauthor) VALUES ('${bookid}','${bookname}','${bookauthor}')`
    let sql = `INSERT INTO bookshelf (bookid,bookname,bookauthor,bookimg,userphone,bookjianjie) VALUES ('${bookid}','${bookname}','${bookauthor}','${bookimg}','${userphone}','${bookjianjie}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
        // console.log(datas)
    })
 })
 router.get('/bookshelf/:userphone',function(req,res){
    var userphone  = req.params.userphone;
    // console.log(userphone)
    let sql = `SELECT * FROM bookshelf where userphone = '${userphone}'` ;
     req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas)
    //   console.group(datas)
  })
})

router.get('/isflag1/:bookid',function(req,res){
    var bookid  = req.params.bookid;
    let sql = `SELECT * FROM shoucang where bookid = '${bookid}'` ;
    // console.log(bookid);
     req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas)
    //   console.log(datas)
  })
})
router.post('/shoucang',function(req,res){
    var bookid = req.body.bookid;
    var bookname = req.body.bookname ;
    var bookauthor  = req.body.bookauthor ;
    var bookimg = req.body.bookimg;
    var userphone = req.body.userphone;
    // console.log(bookid,bookname,bookauthor,bookimg,userphone,"vvvvv")
    let sql = `INSERT INTO shoucang (bookid,bookname,bookauthor,bookimg,userphone) VALUES ('${bookid}','${bookname}','${bookauthor}','${bookimg}','${userphone}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
    })
 })
 router.post('/delectshoucang',function(req,res){
    var bookid1 = req.body.bookid1;
    var userphone1 = req.body.userphone1;
    // console.log(bookid1, userphone1,"mmmm")
    let sql = `DELETE  FROM shoucang WHERE userphone = '${userphone1}' AND bookid ='${bookid1}'` ;
     req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas)
  })
})


 router.get('/bookshoucang/:userphone',function(req,res){
    var userphone  = req.params.userphone;
    // console.log(userphone)
    let sql = `SELECT * FROM shoucang where userphone = '${userphone}'` ;
     req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas)
    //   console.group(datas)
  })
})








router.get('/pinglun/:bookid',function(req,res){
    var bookid  = req.params.bookid;
    console.log(bookid)
    let sql = `SELECT * FROM pinglun where bookid = '${bookid}'` ;
     req.db.driver.execQuery(sql, (err, datas) => {
      res.json(datas)
      console.group(datas)
  })
})


router.post('/userpinglun',function(req,res){
    var username = req.body.username;
    var userphone = req.body.userphone ;
    var bookid  = req.body.bookid ;
    var pinglun = req.body.pinglun;
    var userimg = req.body.userimg;
    // let sql = `INSERT INTO historyfoot (bookid,bookname,bookauthor) VALUES ('${bookid}','${bookname}','${bookauthor}')`
    let sql = `INSERT INTO pinglun (username,userphone,bookid,pinglun,userimg) VALUES ('${username}','${userphone}','${bookid}','${pinglun}','${userimg}')`
    req.db.driver.execQuery(sql, (err, datas) => {
        res.json(datas)
        // console.log(datas)
    })
 })
module.exports = router;