import LoginForm from './components/loginForm'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageNotFound from './components/pageNotFound'
import TopSideBar from './components/topSideBar'
import timeClock from './components/timeClock'
import profileEmploy from './components/profileEmploy'
import RegisterPage from './components/registerPage';

function App() {
  return (
    <Router>
        <div>
        <Switch>
        <Route path={"/"} component={LoginForm}  exact={true} / >
        <Route path={"/timeClock"} component={timeClock} / >
        <Route path={"/topsideBar"} component={TopSideBar} / >
        <Route path={"/ProfileEmploy"} component={profileEmploy} / >
        <Route path={"/registerPage"} component={RegisterPage} / >

       
          <Route   component={PageNotFound} / >
        </Switch> 
        </div> 
    </Router>

    


  );
}

export default App;
