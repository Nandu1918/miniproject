// Import Web Vitals for performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Function to handle performance entries
const serviceWorker = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Call Web Vitals functions to measure various metrics
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default serviceWorker;
