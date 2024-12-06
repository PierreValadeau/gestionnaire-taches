import { Metric } from 'web-vitals';  // Importation du type Metric de web-vitals

const reportWebVitals = (metric: Metric) => {
  console.log(metric);  // Affichage des métriques dans la console
};

export default reportWebVitals;  // Exportation de la fonction


