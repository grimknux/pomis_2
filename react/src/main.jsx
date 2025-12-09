import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import $ from "jquery";
window.$ = $;
window.jQuery = $;

//import './index.css'
import '../public/assets/dist/css/bootstrap.min.css';
import '../public/assets/dist/css/plugins.css';
import '../public/assets/dist/css/main.css';
import '../public/assets/dist/css/buttons.dataTables.min.css';
import '../public/assets/dist/css/themes.css';

import '../public/assets/dist/js/bootstrap.bundle.min.js';
import '../public/assets/dist/js/plugins.js';
import '../public/assets/dist/js/app.js';
import '../public/assets/dist/js/pages/uiTables.js';
import '../public/assets/dist/js/pages/formsComponents.js';
import '../public/assets/dist/js/dataTables.buttons.min.js';


import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
