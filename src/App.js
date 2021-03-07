import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import NoMatch from './component/NoMacth/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import CountryDetails from './component/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/name/:countryName">
          <CountryDetails></CountryDetails>
        </Route>
        
        <Route path ="*">
          <NoMatch></NoMatch>
        </Route>

        
      </Switch>
        
    
    </Router>
    
  );
}

export default App;
