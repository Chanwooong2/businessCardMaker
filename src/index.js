import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import DBService from './service/db_service';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const dbService = new DBService();
const cardRepository = new CardRepository();

ReactDOM.render(
  <React.StrictMode>
    <App 
      authService={authService}
      dbService={dbService}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
