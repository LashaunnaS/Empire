import React, { Component } from 'react';
import Search from './components/Search';
import MyList from './components/MyList';
import { AppBg } from './appStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <Router>
        <AppBg>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/myList" component={MyList} />
            <Route render={() => <h1>404 Error</h1>} />
          </Switch>
        </AppBg>
      </Router>
    );
  }
}

export default App;
