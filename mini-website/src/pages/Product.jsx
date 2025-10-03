import React, { useState } from 'react';

function Product() {
  const [product, setProduct] = useState({ id: '', name: '', price: '' });
  const [productList, setProductList] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.id || !product.name || !product.price) {
      alert('Please fill all fields');
      return;
    }

    // Check if product ID already exists
    const exists = productList.find((p) => p.id === product.id);
    if (exists) {
      alert('Product ID already exists');
      return;
    }

    // Add product to list
    setProductList((prev) => [...prev, { ...product, price: parseFloat(product.price) }]);

    // Reset form
    setProduct({ id: '', name: '', price: '' });
  };

  // Handle product deletion
  const handleDelete = (id) => {
    setProductList((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          placeholder="Product ID"
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Add Product</button>
      </form>

      <h3>Product List</h3>
      {productList.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {productList.map((p) => (
            <li key={p.id}>
              {p.name} - ${p.price.toFixed(2)}
              <button
                onClick={() => handleDelete(p.id)}
                style={{ marginLeft: '10px', color: 'red' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Product;
