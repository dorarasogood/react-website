import fruit_enJson from './data/fruit/i18n/en.json';
import fruit_productsListJson from './data/fruit/productsList.json';
import apple from './data/fruit/pics/apple.jpg';
import banana from './data/fruit/pics/banana.jpg';

function getFruitImage() {
  let fruitImageObj = {
    "apple": apple,
    "banana": banana
  }
  return fruitImageObj;
}

function getFakeProducts(productType, i18n) {
  let result = null;
  let productsList;
  let imgObj;

  switch (productType) {
    //---------------------------------------
    case "fruit":
      imgObj = getFruitImage();
      productsList = fruit_productsListJson["productsList"];
      switch (i18n) {
        case "en":
          result = fruit_enJson;
          break;
        default:
          break;
      }
      break;
    //---------------------------------------
    default:
      break;
  }

  for(let product of productsList){
    result[product]["imgUrl"] = imgObj[product];
  }
  result["productsList"] = productsList;

  return result;
  // return new Promise

}

export { getFakeProducts };