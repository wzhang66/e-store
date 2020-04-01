import React,{Component} from 'react';

import Title from '../Title/Title';
import CartColumns from './CartColumns/CartColumns';
import {ProductConsumer} from '../../context';
import CartList from './CartList/CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
  render() {
    // 
    return(
      <section>
        <ProductConsumer>
          {value =>{
            const {cart} = value;
            let cartContent = <Title name="your cart is empty" />;
            if(cart.length>0){
              cartContent = (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value}/>
                  <CartTotals 
                    value={value} 
                    history={this.props.history}/>
                </React.Fragment>
              );
            }
            return cartContent;
          }}
        </ProductConsumer>
        
      </section>
    )
  }
}

export default Cart;
