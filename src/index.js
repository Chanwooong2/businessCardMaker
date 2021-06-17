import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import DBService from './service/db_service';

const authService = new AuthService();
const dbService = new DBService();

ReactDOM.render(
  <React.StrictMode>
    <App 
      authService={authService}
      dbService={dbService}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
