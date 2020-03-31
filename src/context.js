import React,{Component} from 'react';

import {storeProducts,detailProduct} from './data';
//import product from './components/ProductList/Product/Product';

const ProductContext = React.createContext();
//There are two components in context object: Provider and Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart:[],
    modalOpen: true,
    modalProduct: detailProduct
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

  getItem = (id) => {
    const getProduct = this.state.products.find(item => item.id === id);
    return getProduct;
  }

  handleDetail = (id) => {
    const handleProduct = this.getItem(id);
    this.setState(()=>{
      return {
        detailProduct:handleProduct
      }
    })
  }

  addToCart=(id)=>{
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const addProduct = tempProduct[index];
    addProduct.inCart = true;
    addProduct.count = 1;
    const price = addProduct.price;
    addProduct.total = price;
    this.setState(()=>{
      return {
        products: tempProduct,
        cart:[...this.state.cart, addProduct]
      };
    }, ()=>{console.log(this.state)})
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
