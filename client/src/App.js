import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventDetails from './components/events/EventDetails';
import EventsListContainer from './components/events/EventListContainer'
import TicketDetails from './components/tickets/TicketDetails'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Route exact path="/" component={EventsListContainer} />       
      <Route exact path="/events/:id" component={EventDetails} />
      <Route exact path="/ticket/:id" component={TicketDetails} />

    
            </div>
      </Provider>
    );
  }
}

export default App;
