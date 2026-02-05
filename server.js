const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const semiJoias = require('./produtos.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get("/produtos", (req, res) => {
  res.json(semiJoias)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
