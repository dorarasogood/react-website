import React from 'react';
import { Products } from './Products';
import './ProductsPage.css';
// import myConfig from '../../myConfig.json';
import { DataService } from '../../toolkit/DataService/DataService';


class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: []
    };
  }

  async componentDidMount() {
    let dataService = new DataService();
    let dataJson = await dataService.getProducts(this.props.product, this.props.i18n);
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
    this.setState({productsList: productsListArray});
  }

  /*
  async componentDidMount() {
    if(myConfig.realBackend){
      let url = "http://localhost:4200/" + this.props.i18n + "/products/fruit";
      let response = await fetch(url);
      let dataJson = await response.json();
      let productsListArray = dataJson["fruitProductsList"].map((fruit)=>{
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
      this.setState({productsList: productsListArray});
    }else{
      //fake backend
      console.log("AAA000 fake backend");
    }
  }
  */

  render(){
    return (
      <div className="productsPageBorder">
        {this.state.productsList}
      </div>
    );
  }
  // return (
  //   <div className="productsPageBorder">
  //     <Products />
  //     <Products />
  //     <Products />
  //     <Products />
  //     <Products />
  //   </div>
  // );
}

export { ProductsPage };