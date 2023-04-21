import React, { useState } from 'react';
import './payment.scss';

export const Payment = (props) => {
  const [value, setValue] = useState(props.location.state);

  const handlePay = () => {
    // Handle payment logic
  };

  return (
    <section><div className="checkout">
    <div className="product-card">
      {/* <img src={value.image} className="image" /> */}

      <h2>{value.name}</h2>
      <h3>{value.price}$</h3>
      <button onClick={handlePay}>Pay Now</button>
    </div>
  </div>
   </section>
    
  );
};





