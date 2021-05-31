import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './app.css';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <Switch>
      <Route path={['/','/home']} exact>
        <Home/> 
        </Route>
        {/* 성능적으로 이게 낫다 */}
      <Route path="/profile">
        <Profile/>
      </Route>
    </Switch>
  </BrowserRouter>
  
}

export default App;
