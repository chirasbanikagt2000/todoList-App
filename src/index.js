import React from 'react';
import ReactDOM from 'react-dom/client';  // Importing ReactDOM's createRoot method
import App from './App';// Importing the main App component
import './styles.css';// Importing styles

// Creating a root using ReactDOM's createRoot method and rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



//  ReactDOM.createRoot is used to create a new "root" from which React can start rendering the application.
// StrictMode is a tool for highlighting potential problems in the application. It doesn't render anything visible to users.