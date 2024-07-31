const express = require('express');

require("dotenv").config();
const db = require("./Connection/connection")

//
const app = express();
const morgan = require("morgan");
const port = process.env.PORT;
const bodyParser = require('body-parser');

const UserRoute = require("./Route/userRoute");
const CategoryRoute = require('./Route/categoryRoute');
const ProductRoute = require('./Route/productRoute');

app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/api',UserRoute)
app.use('/api',CategoryRoute);
app.use('/api',ProductRoute);


app.get('/', (req,res)=>{
    res.send("This is an ecommerce server")
}
)
app.listen(port,()=>{
    console.log(`Server get started at ${port}`)
})