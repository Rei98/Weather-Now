const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello Rei')
})
 
app.listen(3000, function(){
    console.log('server is live on port: 3000');
});