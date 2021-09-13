const express = require('express');
var cors = require('cors');
var { getProducts } = require('./data/processData')
const app = express();
const port = 4200;

app.use(cors());

app.get('/:i18n/products/:productType', (req, res)=>{
  var productsJson = getProducts(req.params.i18n, req.params.productType);
  res.json(productsJson);
});

app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`)
});
