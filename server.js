const express = require('express');

const app = express();
const db = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');
const userModel = require('./models/User');
db();

dotenv.config();
console.log(process.env.DB_NAME);
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.post('/user/register', async (req, res) => {
	const newUser = await userModel.create({
		username: haythem,
		password: 1234,
		firstName: hay,
		lastName: ay,
		dateOfBirth: new Date(),
		email: ffjgmail.com,
		telephone: 1234,
		gender: male
	});
	if (newUser) {
		console.log('success');
	} else {
		console.log('failed');
	}
	const {username,password,firstName,lastName,dateOfBirth,email,telephone,gender} = req.body;

	
app.get('/user/list', (req, res) => {
	console.log('message1');
	res.send('list');
});

app.listen(PORT, () => console.log('CODE run in port 3000'));
