import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';  // Importer la fonction reportWebVitals
import { getCLS, getFID, getLCP } from 'web-vitals';  // Importer les fonctions depuis 'web-vitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Utilisation des fonctions de 'web-vitals'
getCLS(reportWebVitals);  // Calcul du CLS (Cumulative Layout Shift)
getFID(reportWebVitals);  // Calcul du FID (First Input Delay)
getLCP(reportWebVitals);  // Calcul du LCP (Largest Contentful Paint)

