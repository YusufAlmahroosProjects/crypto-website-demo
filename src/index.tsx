import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const rootElement = document.getElementById('root');
if(rootElement)
{
  const root = createRoot(rootElement);
  root.render(<App />);
}
else
{
  console.error("Root Element Not Found");
}

