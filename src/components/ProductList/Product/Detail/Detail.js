import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {ButtonContainer} from '../../../UI/Button/Button';
import {ProductConsumer} from '../../../../context';

class Details extends Component {
  render() {
    return(
      <ProductConsumer>
      {
        (value)=>{
          const {id,company,img,info,price,title,inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">

              </div>
              {/* endtitle */}
            </div>
          )
        }
      }
      </ProductConsumer>
    )
  }
}

export default Details;
