import './App.css';
/*eslint no-useless-escape: "error"*/
import { Router, Route } from 'react-router-dom';
import Home from './component/Home';
import { Switch } from 'react-router';
import Planets from './component/Planets.jsx';
import Characters from './component/Characters';

function App()  {
  return (
    <Router>
        <Switch>
          <div className="App">
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route exact path="/Planets" >
              <Planets/>
            </Route>
            <Route exact path="/Characters">
              <Characters/>
            </Route>
          </div>
      </Switch>
    </Router>
  );
}

export default App;
