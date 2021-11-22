import './App.css';
/*eslint no-useless-escape: "error"*/
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import Planets from './component/Planets.jsx';
import Characters from './component/Characters';

function App()  {
  return (
    <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/Planets" component={Planets}/>
          <Route exact path="/Characters" component={Characters}/>
        </div>
    </Router>
  );
}

export default App;
