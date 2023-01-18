let express = require('express');
let server = express()

server.get('/',(req,res)=>{
    res.send(`hello world22`)
})

server.listen(3001,()=>{
    console.log('start listen prots 3001')
})

