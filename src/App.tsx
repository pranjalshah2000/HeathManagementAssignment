import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import { HomeRequestContainer } from './components/homeComponent';
import { EditPatientsContainer } from './components/editStateComponent';

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomeRequestContainer} />
          <Route exact path="/editstate" component={EditPatientsContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
