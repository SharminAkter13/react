import React, { useState, useEffect } from 'react';

function Checkout() {
  // Example products (you can replace with your dynamic product list)
  const [products] = useState([
    { id: 1, name: 'Apple', price: 10 },
    { id: 2, name: 'Banana', price: 5 },
    { id: 3, name: 'Orange', price: 8 },
  ]);

  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add product to order
  const addToOrder = (product) => {
    setOrderItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Update quantity
  const updateQuantity = (id, qty) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // Delete item from order
  const removeItem = (id) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update total price whenever orderItems change
  useEffect(() => {
    const total = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [orderItems]);

  // Handle customer info change
  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle order submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      alert('Please fill all customer info');
      return;
    }
    if (orderItems.length === 0) {
      alert('Please add items to your order');
      return;
    }

    setIsSubmitting(true);

    // Example: simulate API call
    setTimeout(() => {
      alert(
        `Order submitted!\nCustomer: ${customerInfo.name}\nTotal: $${totalPrice}`
      );
      // Reset order
      setOrderItems([]);
      setCustomerInfo({ name: '', email: '', address: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Order Checkout</h2>

      {/* Customer Info */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          value={customerInfo.name}
          onChange={handleCustomerChange}
          placeholder="Name"
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type="email"
          name="email"
          value={customerInfo.email}
          onChange={handleCustomerChange}
          placeholder="Email"
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="address"
          value={customerInfo.address}
          onChange={handleCustomerChange}
          placeholder="Address"
          required
          style={{ marginRight: '10px' }}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Order'}
        </button>
      </form>

      {/* Product List */}
      <h3>Products</h3>
      <div style={{ marginBottom: '20px' }}>
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => addToOrder(product)}
            style={{ marginRight: '10px', marginBottom: '10px' }}
          >
            Add {product.name} (${product.price})
          </button>
        ))}
      </div>

      {/* Order Summary */}
      <h3>Order Items</h3>
      {orderItems.length === 0 ? (
        <p>No items added</p>
      ) : (
        <ul>
          {orderItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              {item.name} - ${item.price} x{' '}
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                style={{ width: '50px', marginRight: '10px' }}
              />
              = ${item.price * item.quantity}
              <button
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: '10px', color: 'red' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h4>Total Price: ${totalPrice}</h4>
    </div>
  );
}

export default Checkout;
