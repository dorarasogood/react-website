import myConfig from '../../myConfig.json';
import { getFakeProducts } from './fakeData';

class DataService {
  async getProducts(productType, i18n) {
    if(myConfig.realBackend){//real backend
      let url = "http://localhost:4200/" + i18n + "/products/"+ productType;
      let response = await fetch(url);
      let dataJson = null;
      dataJson = await response.json();
      return new Promise((resolve, reject)=>{
        if(dataJson !== null)
          resolve(dataJson);
        else
          reject("fail");
      });
    }else{//fake backend
      let dataJson = null;
      dataJson = getFakeProducts(productType, i18n);
      return new Promise((resolve, reject)=>{
        if(dataJson !== null)
          resolve(dataJson);
        else
          reject("fail");
      });
    }
    
  }
}

export { DataService };