var express = require('express');
var router = express.Router();
let path  = require('path')
let lib = require('../lib')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getmind', (req, res, next)=> {
  let a = []
  lib.getAll(lib.path).then(e=>{
    e.map(ee=>{
      a.push(ee)
    })
    res.send(a);
  })
  
});

router.post('/save', (req, res, next)=> {
  console.log(req.body)
  let xq = req.body;
  let toStore = path.join(__dirname,'../mind',xq.name);//存储的路径
  console.log(toStore)
  lib.write(toStore,xq.dt).then(e=>{
    res.send('success');
  })
});

router.get('/item', (req, res, next)=> {
  console.log(123,req.query)
  let xq = req.query;
  let toRead = path.join(__dirname,'../mind',xq.name);//对应的文件
  lib.read(toRead).then(e=>{
    console.log(222,e)
    res.send(e);  
  })
});

module.exports = router;
