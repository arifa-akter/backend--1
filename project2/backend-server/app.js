// main and express 
const express = require('express');
// cors
const cors = require('cors');
// morgan
const morgan = require('morgan');
// dotenv
const dotenv = require('dotenv');
dotenv.config();

// connection with mongoose
const {connect} = require('mongoose')
connect(process.env.CONNECTION_URL) .then(()=>console.log('mongoose connect successfully'))
.catch((error)=>console.log(`mongoose connect fail${error}`))

// routes
const usersRoute = require('./routes/users');
const productRoute = require('./routes/product');

// app.use
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// routes connect
app.use('/users' ,usersRoute)
app.use('/product' ,productRoute)

module.exports = app;