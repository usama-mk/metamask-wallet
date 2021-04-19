import './App.css';
import DepositFundsPage from './Pages/DepositFundsPage/DepositFundsPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import RecipientLandingPage from './Pages/RecipientLandingPage/RecipientLandingPage';
import SignupPage from './Pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <SignupPage/> */}
      {/* <DepositFundsPage/> */}
      <RecipientLandingPage/>
    </div>
  );
}

export default App;
