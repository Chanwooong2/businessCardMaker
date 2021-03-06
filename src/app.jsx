import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardMaker from './components/cardMaker/cardMaker';
import Login from './components/login/login';

function App({authService, dbService, cardRepository, FileInput}) {
  return (
    <BrowserRouter>
      <Switch>

        <Route path={['/','/login']} exact>
          <div className="wrap">
            <Login authService={authService}/>
          </div>
        </Route>

        <Route path="/cardMaker">
          <CardMaker 
            authService={authService}
            dbService={dbService}
            cardRepository={cardRepository}
            FileInput={FileInput}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );



  
  
}

export default App;
