import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { CareerQuizProvider } from './context/CareerQuizContext';
import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <CareerQuizProvider>
        <App />
      </CareerQuizProvider>
    </HashRouter>
  </React.StrictMode>
);
