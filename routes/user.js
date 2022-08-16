const express = require('express')
const mysql = require('mysql')
const db = require('../configs/db.config')

const connection = mysql.createConnection(db.database)

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to the MYSQL server');
        var userTableQuery = "CREATE TABLE IF NOT EXISTS users (id VARCHAR(255) PRIMARY KEY, name VARCHAR(255), username Varchar(255))"
        connection.query(userTableQuery, function(err,result){
            if(err) throw err;
            console.log(result);
            if(result.warningCount === 0){
                console.log('User table created');
            }
        })
    }
})

const router = express.Router()

router.get('/',(req, res) =>{   
    var query = "SELECT * FROM users"

    connection.query(query,(err,rows) =>{
        if(err) throw err

        res.send(rows)
    })
})


router.post('/',(req, res) =>{
    const id = req.body.id
    const name = req.body.name
    const username = req.body.username
   
    var query = "INSERT INTO users (id, name, username) VALUES (?,?,?)"

    connection.query(query, [id, name, username], (err) =>{
        if(err){
            res.send({"message" : "duplicate entry"})
        }else{
            res.send({"message" : "user created!"})
        }
    })
})

router.put('/',(req, res) =>{
    const id = req.body.id
    const name = req.body.name
    const username = req.body.username
   
    var query = "UPDATE users SET name =?, username=? WHERE id=?"

    connection.query(query, [name, username, id], (err,rows) =>{
        if(err) throw err
        
        if(rows.affectedRows > 0){
            res.send({'message' : 'User Updated'})
        }else{
            res.send({'message' : 'User not found'})
        }
    })
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send('delete user-id request came')
})

//get user by id
router.get('/:id', (req, res) => {
    res.send('get user-id request came')
})

module.exports = router;