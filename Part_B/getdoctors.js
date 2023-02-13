const express = require('express');
const { Client } = require('pg');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/Doctors.html', async (req, res) => {
  const client = new Client({
    host: 'localhost',
    user: 'root',
    PASSWORD : "rafi123",
    DB : "doctors_db"
  });

  await client.connect();

  const result = await client.query('SELECT name FROM doctors');

  res.render('doctors', { doctors: result.rows });
  console.log("doctors set to an array");
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
