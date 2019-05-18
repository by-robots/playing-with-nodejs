'use strict'

// Load the .env file.
require('dotenv').config()

// External dependencies.
const mysql = require('mysql')

// Create the connections.
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

// Connect and get superheroes.
connection.connect()
connection.query('SELECT * FROM superheroes ORDER BY name ASC', (err, results, fields) => {
  if (err) {
    console.log(err)
  }

  console.log(results)
})

// Disconnect from the database.
connection.end()
