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
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
  }

  // Component lifecyle
  componentDidMount(){
    this.setProduct();
  }

  // context initiating
  setProduct = () => {
    let newProducts = [];
    storeProducts.forEach(item => {
      const singleItem ={...item};
      newProducts=[...newProducts,singleItem];
    });
    this.setState({
      products:newProducts
    })
  }

  // functions for  details pages 
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

  // functions for handling adding to the cart
  openModal = (id) =>{
    const modalOpenProduct = this.getItem(id);
    this.setState(()=>{
      return{
        modalProduct:modalOpenProduct,
        modalOpen:true
      };
    });
  }

  closeModal = () => {
    this.setState(()=>{
      return{
        modalOpen:false
      };
    });
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
    }, ()=>{this.addTotals()})
  }


  // functions for cart page
  increment=(id)=>{
    let tempCart = [...this.state.cart];
    const increProduct = tempCart.find(item=>item.id===id);
    const indexIncre = tempCart.indexOf(increProduct);
    const productIncre = tempCart[indexIncre];
    productIncre.count += 1;
    productIncre.total += productIncre.price;
    this.setState({
      cart: [...tempCart]
    },()=>{this.addTotals()});
  }
  decrement=(id)=>{
    let tempCart = [...this.state.cart];
    const decreProduct = tempCart.find(item=>item.id===id);
    const indexDecre = tempCart.indexOf(decreProduct);
    const productDecre = tempCart[indexDecre];
    productDecre.count -= 1;
    productDecre.total -= productDecre.price;
    this.setState({
      cart: [...tempCart]
    },()=>{this.addTotals()});
  }
  removeItem=(id)=>{
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const indexRemove = tempProduct.indexOf(this.getItem(id));
    let productRemove = tempProduct[indexRemove];
    productRemove.inCart = false;
    productRemove.count = 0;
    productRemove.total = 0;
    this.setState({
      cart:[...tempCart],
      products:[...tempProduct]
    }, ()=>{
      this.addTotals();
    })
  }
  clearCart = () =>{
    this.setState({
      products: [],
      detailProduct: detailProduct,
      cart:[],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubTotal:0,
      cartTax:0,
      cartTotal:0
    });
    this.setProduct();
  }
  addTotals = () =>{
    let subTotal = 0;
    this.state.cart.map(item=>(subTotal+= item.total));
    const tempTax = subTotal*0.13;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(()=>{
      return{
        cartSubTotal:subTotal,
        cartTax:tax,
        cartTotal: total
      }
    })
  }


  // passing the context content
  render() {
    return(
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
