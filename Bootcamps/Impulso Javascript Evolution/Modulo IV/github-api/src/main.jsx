import React from "react";
import ReactDOM from 'react-dom/client';

import Providers from "./providers";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
