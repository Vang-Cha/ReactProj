const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.listen(8080)

const connection = mysql.createConnection({
    host     : 'aa1jpce45opedin.ctfwyrb5otg2.us-east-2.rds.amazonaws.com',
    user     : 'username',
    password : 'password',
    port     : 3306
})

connection.connect(err=>{
    if (err) {
        console.log(err)
    }
    console.log('Connected!')

app.post('./createuser',(req,res)=>{
    console.log(req.body)
    connect.query(fs.readFileSync('./sql/createUser.sql').toString(),[req.body.username, req.body.password],(err,resp)=>{
        res.json(resp)
    })
})

    app.post('./getuserdata',(req,res)=>{
        console.log(req.body)
        connect.query(fs.readFileSync('./sql/getUser.sql').toString(),([req.body.username],(err,resp) =>{
            if (err){
                res.json(err)
            }
            res.json(resp)
        }))
    })
});