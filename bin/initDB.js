'use strict';

const connection = require('../lib/connectSQL.js');

// Consulta SQL para eliminar la tabla de usuario si existe
const dropTableQuery = `
  DROP TABLE IF EXISTS user
`;

// Consulta SQL para crear la tabla de usuario
const createTableQuery = `
  CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`;

// Ejecutar la consulta para eliminar la tabla de usuario si existe
connection.query(dropTableQuery, (error, results) => {
  if (error) {
    console.error('Error dropping user table:', error);
    return;
  }
  console.log('User table dropped successfully');

  // Después de eliminar la tabla, crearla nuevamente
  connection.query(createTableQuery, (error, results) => {
    if (error) {
      console.error('Error creating user table:', error);
      return;
    }
    console.log('User table created successfully');
  });
});
