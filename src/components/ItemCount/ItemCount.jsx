import React, { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);
 
  const incrementItem = () => {
    if(count<stock){
      setCount(count+1)
    }
  }
  const decrementar = () => {
    if(count>initial){
      setCount(count-1)
    }
  }
  
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <button onClick={() => decrementar()} className='btn btn-primary'><i class="fa-sharp fa-solid fa-square-xmark"></i></button>
        </div>
        <div className='col'>
          <h3 >{count}</h3>
        </div>
        <div className='col'>
          <button onClick={() => incrementItem() } className='btn btn-primary' ><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <div className='row' >
        <button className='btn btn-primary'  onClick={() => onAdd(count)}>Agregar al carrito</button>
        
      </div>
    </div>
  );
};

export default ItemCount;
