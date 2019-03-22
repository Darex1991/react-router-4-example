import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
  BrowserRouter as Router,
} from 'react-router-dom';
import AsideRouters from './aside_routers';
import HomeMessages from './components/HomeMessages';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import SideBarHome from './components/SideBarHome';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <aside className="App__aside">
            <div className="menu">
                <ul>
                  <li> <NavLink        activeStyle={{ color: 'red' }}
                                    to="/">Home</NavLink> </li>
                  <li> <NavLink        activeStyle={{ color: 'red' }}
                                    to="/messages">Messages</NavLink> </li>
                  <li> <NavLink        activeStyle={{ color: 'red' }}
                                     to="/about">About</NavLink> </li>
                </ul>
            </div>
          </aside>
          <AsideRouters />
          <main>
            <header className="App-header">
              <h1 className="App-title">Some header</h1>
            </header>

              <div className="App-intro">
                <Route exact path="/" >
                  <Route component={Home} />
                    <Route path="/home-messages" component={HomeMessages} />
                </Route>
                <Route path="/messages" component={Messages} />
                <Route path="/about" component={About} />
                {/*<Redirect to='/' push />*/}
              </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
