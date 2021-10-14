import './App.css';
import logo from './logo.png'
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import NavHead from './NavHead';
import HomePage from './HomePage';
import InstructorHome from './InstructorHome';


function App() {
  return (
    <div className="App">
      <Router>
        <NavHead />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/instructor" component={InstructorHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
