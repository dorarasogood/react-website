var fs = require('fs');
var path = require('path');

function bufferFile(relPath){
  return fs.readFileSync(path.join(__dirname, relPath));
}

function getProducts(language, productType) {
  var productsPath = "./"+ productType +"/i18n/"+ language +".json";
  var productsJson = require(productsPath);
  var productsListPath = "./"+ productType + "/productsList.json";
  var productsListJson = require(productsListPath);
  var productsList = productsListJson["productsList"];

  var result = productsJson;
  for(var product of productsList){
    var imgPath = "./"+ productType +"/pics/"+ product +".jpg";
    var productBuffer = bufferFile(imgPath);
    var productUrl = "data:image/jpeg;base64," + productBuffer.toString('base64');
    result[product]["imgUrl"] = productUrl;
  }
  result["productsList"] = productsList;
  return result;
}

module.exports = {
  getProducts
}