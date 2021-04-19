import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Yujin from './pages/yujin'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(rp) => <LandingPage {...rp} />}/>
        <Route exact path="/yujin" render={(rp) => <Yujin {...rp} /> }/>
      </Switch>
    </div>
  );
}

export default App;
