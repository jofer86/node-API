const express = require('express');
const dotenv = require('dotenv');

// Route Files!

const vapeshops = require('./routes/vapeshops');

dotenv.config({ path: './config/config.env' });

const app = express();

// Mounting Routes
app.use('/api/v1/vapeshops', vapeshops)


const PORT = process.env.PORT || 5200;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));