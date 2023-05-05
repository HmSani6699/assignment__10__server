const express = require('express')
const app = express()
const cors= require('cors')
const port = 5000

const user= require('./data/userData.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res)=>{
  res.send(user)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})