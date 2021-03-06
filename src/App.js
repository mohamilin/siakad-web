// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import PageAdmin from "./pages/PageAdmin";
import PageUser from "./pages/PageUser";
import PageModerator from "./pages/PageModerator";
import Login from "./pages/Login";
import Register from  "./pages/Register";
import Profile from "./pages/Profile";
import Absensi from "./pages/Absensi";
import PageTest from './pages/PageTest';

function App() {
  return (
    <>
   <div>
     <Router>
       <Switch>
         <Route exact path="/" component={Homepage}/>
         <Route exact path="/user" component={PageUser}/>
         <Route exact path="/mod" component={PageModerator}/>
         <Route exact path="/admin" component={PageAdmin}/>
         <Route exact path="/profile" component={Profile}/>
         <Route exact path="/absensi" component={Absensi}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/register" component={Register}/>
       </Switch>
     </Router>
     <PageTest/>
   </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
