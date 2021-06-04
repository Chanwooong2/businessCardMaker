import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardMaker from './components/CardMaker';
import Login from './components/login/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path={['/','/login']} exact>
          <Login/>
        </Route>

        <Route path="/cardMaker">
          <CardMaker/>
        </Route>
      </Switch>
    </BrowserRouter>
  );



  
  
}

export default App;
