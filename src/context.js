import React,{Component} from 'react';

import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();
//There are two components in context object: Provider and Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  }
  componentDidMount(){
    this.setProduct();
  }

  setProduct(){
    let newProducts = [];
    storeProducts.forEach(item => {
      const singleItem ={...item};
      newProducts=[...newProducts,singleItem];
    });
    this.setState({
      products:newProducts
    })
  }

  handleDetail () {
    console.log('handleDetail');
  }

  addToCart(){
    console.log('adding to the cart');
  }

  render() {
    return(
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
