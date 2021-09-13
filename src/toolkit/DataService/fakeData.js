//--fruit
import fruit_enJson from './data/fruit/i18n/en.json';
import fruit_jpJson from './data/fruit/i18n/jp.json';
import fruit_twJson from './data/fruit/i18n/tw.json';
import fruit_productsListJson from './data/fruit/productsList.json';
import apple from './data/fruit/pics/apple.jpg';
import banana from './data/fruit/pics/banana.jpg';
import cherry from './data/fruit/pics/cherry.jpg';
import cranberry from './data/fruit/pics/cranberry.jpg';
import peach from './data/fruit/pics/peach.jpg';
import raspberry from './data/fruit/pics/raspberry.jpg';
import strawberry from './data/fruit/pics/strawberry.jpg';

//--flower
import flower_enJson from './data/flower/i18n/en.json';
import flower_jpJson from './data/flower/i18n/jp.json';
import flower_twJson from './data/flower/i18n/tw.json';
import flower_productsListJson from './data/flower/productsList.json';
import carnation from './data/flower/pics/carnation.jpg';
import lavender from './data/flower/pics/lavender.jpg';
import orchid from './data/flower/pics/orchid.jpg';
import pansy from './data/flower/pics/pansy.jpg';
import rose from './data/flower/pics/rose.jpg';
import sunflower from './data/flower/pics/sunflower.jpg';
import tulip from './data/flower/pics/tulip.jpg';

function getFruitImage() {
  let fruitImageObj = {
    "apple": apple,
    "banana": banana,
    "cherry": cherry,
    "cranberry": cranberry,
    "peach": peach,
    "raspberry": raspberry,
    "strawberry": strawberry,
  }
  return fruitImageObj;
}

function getFlowerImage() {
  let flowerImageObj = {
    "carnation": carnation,
    "lavender": lavender,
    "orchid": orchid,
    "pansy": pansy,
    "rose": rose,
    "sunflower": sunflower,
    "tulip": tulip,
  }
  return flowerImageObj;
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
        case "jp":
          result = fruit_jpJson;
          break;
        case "tw":
          result = fruit_twJson;
          break;
        default:
          break;
      }
      break;
    //---------------------------------------
    //---------------------------------------
    case "flower":
      imgObj = getFlowerImage();
      productsList = flower_productsListJson["productsList"];
      switch (i18n) {
        case "en":
          result = flower_enJson;
          break;
        case "jp":
          result = flower_jpJson;
          break;
        case "tw":
          result = flower_twJson;
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