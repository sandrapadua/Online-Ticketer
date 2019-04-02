import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/eventsListConatiner'
// import AdsDetailsContainer from './components/adsDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Route path="/" exact component={EventsListContainer} />
      {/* <Route path="/advertisements/:id" component={AdsDetailsContainer} />    */}
            
            </div>
      </Provider>
    );
  }
}

export default App;
