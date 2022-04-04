const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DB_NAME = process.env.DB_NAME;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
dotenv.config();

const dbURL = `mongodb+srv://haythem:12TamaraAdem1990@cluster0.u0opl.mongodb.net/task?retryWrites=true&w=majority`;
const DbConnect = async () => {
	try {
		await mongoose.connect(dbURL);
		console.log('mongo is ready');
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
module.exports = DbConnect;
