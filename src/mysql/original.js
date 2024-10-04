const mysql = require ("mysql2");
require('dotenv').config();
  
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.USER,
  database: "calculator",
  password: process.env.PASSWORD
});

// тестирование подключения
connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
});

module.exports = connection;
