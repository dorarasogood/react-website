import React, { useState, useEffect } from 'react';
import { Products } from './Products';
import './ProductsPage.css';
import { DataService } from '../../toolkit/DataService/DataService';

function ProductsPage(props) {
  const [productsList, setProductsList] = useState([]);

  useEffect( async function() {
    let dataService = new DataService();
    let dataJson = await dataService.getProducts(props.product, props.i18n);
    let productsListArray = dataJson["productsList"].map((fruit)=>{
      return(
        <Products 
          key = {fruit}
          imgSrc = {dataJson[fruit]["imgUrl"]}
          name = {dataJson[fruit]["name"]}
          price = {dataJson[fruit]["price"]}
          currency = {dataJson["currency"]}
        />
      );
    });
    setProductsList(productsListArray);
  });

  return (
    <div className="productsPageBorder">
      {productsList}
    </div>
  );
}

export { ProductsPage };