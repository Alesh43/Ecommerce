const express = require('express');

require("dotenv").config();
const db = require("./Connection/connection")

//
const app = express();
const morgan = require("morgan");
const port = process.env.PORT;
const bodyParser = require('body-parser');

const UserRoute = require("./Route/userRoute");

app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/api',UserRoute)

app.get('/', (req,res)=>{
    res.send("This is an ecommerce server")
}
)
app.listen(port,()=>{
    console.log(`Server get started at ${port}`)
})