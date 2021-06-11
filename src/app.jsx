import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardMaker from './components/cardMaker/cardMaker';
import Login from './components/login/login';

function App({authService}) {
  return (
    <BrowserRouter>
      <Switch>

        <Route path={['/','/login']} exact>
          <div className="wrap">
            <Login authService={authService}/>
          </div>
        </Route>

        <Route path="/cardMaker">
          <CardMaker/>
        </Route>
      </Switch>
    </BrowserRouter>
  );



  
  
}

export default App;
