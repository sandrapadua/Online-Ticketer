import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventDetails from './components/events/EventDetails';
import EventsListContainer from './components/events/EventListContainer'
import TicketDetails from './components/tickets/TicketDetails'
import LoginPage from './components/login/LoginPage'
import TopBar from './components/layout/TopBar'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <TopBar/>
      <main style={{ marginTop: 75 }}>
      <Route exact path="/" component={EventsListContainer} />       
      <Route exact path="/events/:id" component={EventDetails} />
      <Route exact path="/ticket/:id" component={TicketDetails} />
      <Route exact path="/login" component={LoginPage} />
</main>
    
            </div>
      </Provider>
    );
  }
}

export default App;
