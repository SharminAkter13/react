import React from 'react';
    import { useState } from 'react';
        function Order() {
    const OrderPage = () => {
      const [orderItems, setOrderItems] = useState([]);
      const [totalPrice, setTotalPrice] = useState(0);
      const [customerInfo, setCustomerInfo] = useState({ name: '', address: '', email: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);

      // ... rest of your component logic
    };
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }
export default Order;