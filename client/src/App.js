import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LogoutPage from './components/logout/LogoutPage'
import EventDetails from './components/events/EventDetails';
import EventsListContainer from './components/events/EventListContainer'
import TicketDetails from './components/tickets/TicketDetails'
import LoginPage from './components/login/LoginPage'
import TopBar from './components/layout/TopBar'
import SignupPage from './components/signup/SignupPage'
class App extends Component {
  render() {
    return (
    
      <div className="App">
      <TopBar/>
      <main style={{ marginTop: 75 }}>
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/" component={EventsListContainer} />       
      <Route exact path="/events/:id" component={EventDetails} />
      <Route exact path="/ticket/:id" component={TicketDetails} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
</main>
    
            </div>

    );
  }
}

export default App;
