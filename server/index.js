const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connectDb} = require('./db');
const {Register,Login, Dashboard}=require('./studentAuth');

dotenv.config();
const app = express();
const PORT = process.env.PUBLIC_PORT;

app.use(express.json());
app.use(cors());


connectDb();

app.post('/register',Register);
app.post('/login',Login);
app.get('/dashboard/:id',Dashboard);

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));
