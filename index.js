const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect to the DB
connectDB();

app.use(express.json({ extended: false }));
const PORT = 5000;

//Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(PORT, () => console.log(`Server running on ports ${PORT}`));