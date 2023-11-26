const express = require('express')
const app = express()
// const mongoose = require('mongoose');
const port = 5000
const mongoD=require("./db");
mongoD();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})