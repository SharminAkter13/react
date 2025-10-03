import React, { useState, useEffect } from 'react';

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

  // ✅ Update totalPrice whenever orderItems change
  useEffect(() => {
    const total = orderItems.reduce(
      (acc, item) => acc + (item.price || 0) * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [orderItems]);

  // ✅ Handle customer info input changes
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Example: print order to console
    console.log('Customer Info:', customerInfo);
    console.log('Order Items:', orderItems);
    console.log('Total Price:', totalPrice);

    // Simulate API call
    setTimeout(() => {
      alert('Order submitted successfully!');
      setOrderItems([]);
      setCustomerInfo({ name: '', address: '', email: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <h2>Order Page</h2>

      {/* Customer Info Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={customerInfo.name}
          onChange={handleCustomerInfoChange}
          placeholder="Enter name"
          required
        />
        <input
          type="text"
          name="address"
          value={customerInfo.address}
          onChange={handleCustomerInfoChange}
          placeholder="Enter address"
          required
        />
        <input
          type="email"
          name="email"
          value={customerInfo.email}
          onChange={handleCustomerInfoChange}
          placeholder="Enter email"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Order'}
        </button>
      </form>

      {/* Example buttons to add items */}
      <div>
        <h3>Add Items</h3>
        <button onClick={() => addItemToOrder({ id: 1, name: 'Apple', price: 10 })}>
          Add Apple
        </button>
        <button onClick={() => addItemToOrder({ id: 2, name: 'Banana', price: 5 })}>
          Add Banana
        </button>
      </div>

      {/* Order List */}
      <div>
        <h3>Order Items</h3>
        <ul>
          {orderItems.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <h4>Total Price: ${totalPrice}</h4>
      </div>
    </div>
  );
}

export default Order;
