import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/home';
import Personal from './pages/personal';
import Professional from './pages/professional';
import NotFoundPage from './pages/notFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route path = "/personal" component = {Personal} />
            <Route path = "/professional" component = {Professional} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
