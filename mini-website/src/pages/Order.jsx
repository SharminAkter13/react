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
    const addItemToOrder = (item) => {
  setOrderItems((prevItems) => {
    const existingItem = prevItems.find((i) => i.id === item.id);
    if (existingItem) {
      return prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    }
    return [...prevItems, { ...item, quantity: 1 }];
    
    const handleCustomerInfoChange = (e) => {
  const { name, value } = e.target;
  setCustomerInfo((prevInfo) => ({
    ...prevInfo,
    [name]: value,
  }));
};

  });
};
     
export default Order;