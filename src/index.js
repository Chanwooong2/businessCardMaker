import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import DBService from './service/db_service';
import CardRepository from './service/card_repository';
import ImageUploader from './service/imageUploader'
import ImageFileInput from './components/cardMaker/imageFileInput'

const authService = new AuthService();
const dbService = new DBService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = props =>(
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App 
      authService={authService}
      dbService={dbService}
      cardRepository={cardRepository}
      FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
