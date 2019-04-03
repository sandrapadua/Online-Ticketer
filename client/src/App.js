import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/events/EventListContainer'
import EventDetailsContainer from './components/events/EventDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Route exact path="/" component={EventsListContainer} />        
      <Route exact path="/events/:id" component={EventDetailsContainer} />
    
            </div>
      </Provider>
    );
  }
}

export default App;
