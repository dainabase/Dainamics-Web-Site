import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (GA_MEASUREMENT_ID && import.meta.env.VITE_APP_ENV === 'production') {
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
      send_page_view: true
    });
  `;
  document.head.appendChild(script2);
}

createRoot(document.getElementById("root")!).render(<App />);
