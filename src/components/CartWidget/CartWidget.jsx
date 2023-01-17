import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
const {getQuantity} = useContext(CartContext)    

  return (<>
      {
      <Link to={"/cart"} style={{ color:"white", border: 'none', marginLeft: 16, marginRight: 24 }}>
        <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        {
        getQuantity()>0&&<button style={{ color:"white", border: 'none', marginLeft: 16 }}>{getQuantity()}</button>
        }
      </Link>
      }
  </>
  );
};

export default CartWidget;
