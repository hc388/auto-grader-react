import './App.css';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import NavHead from './NavHead';
import HomePage from './HomePage';
import InstructorHome from './InstructorHome';
import QuestionMaker from './QuestionMaker';
import ExamMaker from './ExamMaker';
import StudentHome from './StudentHome'
import TakeExam from './TakeExam'


function App() {
  return (
    <div className="App">
      <Router>
        <NavHead />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/instructor" component={InstructorHome} />
          <Route exact path="/instructor/question-maker" component={QuestionMaker} />
          <Route exact path="/instructor/exam-maker" component={ExamMaker} />
          <Route exact path="/student" component = {StudentHome} />
          <Route exact path="/student/take-exam" component = {TakeExam} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
