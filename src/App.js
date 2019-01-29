import React, { Component } from 'react';
import Search from './components/Search';
import {AppBg} from './appStyles'

class App extends Component {
  render() {

    return (
      <AppBg>
        <Search />
      </AppBg>
      
    );
  }
}

export default App;
