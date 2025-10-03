import React, { useState } from 'react';

function Order() {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Add item to order
  const addItemToOrder = (item) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // ✅ Handle customer info input changes
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Order Page</h2>

      {/* Example form for customer info */}
      <form>
        <input
          type="text"
          name="name"
          value={customerInfo.name}
          onChange={handleCustomerInfoChange}
          placeholder="Enter name"
        />
        <input
          type="text"
          name="address"
          value={customerInfo.address}
          onChange={handleCustomerInfoChange}
          placeholder="Enter address"
        />
        <input
          type="email"
          name="email"
          value={customerInfo.email}
          onChange={handleCustomerInfoChange}
          placeholder="Enter email"
        />
      </form>

      {/* Example order list */}
      <div>
        <h3>Order Items</h3>
        <ul>
          {orderItems.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Order;
