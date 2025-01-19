import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import your App component
import './styles.css';    // Import your styles

const root = ReactDOM.createRoot(document.getElementById('root'));  // Attach React to the div in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
