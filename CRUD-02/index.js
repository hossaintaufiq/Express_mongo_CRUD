import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//   res.send('Web server is running correctly')
// })


app.get('/',(req,res)=>{
    console.log('Server is running correctly')
    res.send('Hello form node api')
})
app.listen(3000)