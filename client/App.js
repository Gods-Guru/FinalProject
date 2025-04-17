import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(res => console.log('Response from server:', res.data))
      .catch(err => console.error('Error fetching from server:', err));
  }, []);

  return (
    <div>
      <h1>Automobile Accessories Store</h1>
      <p>Check your console for server response.</p>
    </div>
  );
}

export default App;
