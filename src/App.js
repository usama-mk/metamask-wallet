import './App.css';
import DepositFundsPage from './Pages/DepositFundsPage/DepositFundsPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import MainPage from './Pages/MainPage/MainPage';
import RecipientLandingPage from './Pages/RecipientLandingPage/RecipientLandingPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal'


Modal.setAppElement("#root")
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/depositfunds" exact component={DepositFundsPage} />
          <Route path="/recipientlanding" exact component={RecipientLandingPage} />
          <Route path="/mainpage" exact component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
