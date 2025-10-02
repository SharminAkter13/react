import React from 'react';
    import { useState } from 'react';
        function Order() {
      const [count, setCount] = useState(0);

      const increment = () => {
        setCount(count + 1); // Updates 'count' and triggers a re-render
      };

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }
export default Order;