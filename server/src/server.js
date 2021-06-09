const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

//environment constants
env.config();

//routes
const userRoutes  = require('./routes/user');
const adminRoutes  = require('./routes/admin/user');

mongoose.connect(
    `${process.env.MONGOURI}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
).then(() => {
    console.log('Database connected')
})

app.use(bodyParser());
app.use('/api', userRoutes);
app.use('/api', adminRoutes);


app.listen(process.env.PORT,() => {
    console.log(`server is running at PORT ${process.env.PORT}`)
});