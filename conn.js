const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');


const app = express();
const port = 4004;
var con = new Sequelize('asd', 'root', '', {
        dialect: 'mysql'
});


const user = con.define('user',{
	uuid:{
		type: DataTypes.UUID,
		primaryKey: true,
		
	},
	name: DataTypes.Text,
	bio: DataTypes.Text
}) ;


con.sync({
	logging: console.log,
	force: true
})
.then(() =>{
	console.log('Connection sccess');
})
.catch(err => {
	console.error('unable to connect',err)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
