import './App.css';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import NavHead from './NavHead';
import HomePage from './HomePage';
import InstructorHome from './InstructorHome';
import QuestionMaker from './QuestionMaker';


function App() {
  return (
    <div className="App">
      <Router>
        <NavHead />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/instructor" component={InstructorHome} />
          <Route exact path="/instructor/question-maker" component={QuestionMaker} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
