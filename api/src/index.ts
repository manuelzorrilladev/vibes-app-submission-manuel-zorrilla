import express from 'express';
import products from './products.router.js';

const app = express()
const port = 3100

app.use('/api', products);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})