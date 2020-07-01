import React from 'react';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import MyTickets from './pages/myTickets/myTickets';
import CreateTicket from './pages/createTicket/createTicket';
import PendingApprovals from './pages/pendingApprovals/pendingApprovals';
import Header from './components/header/header';
import SystemAlerts from './pages/systemAlerts/systemAlerts';
import Surveys from './pages/surveys/surveys';

//import LoginPage from './pages/loginPage/loginPage';

function App() {

  return (  
      <>
          <Header />

          <Switch>

            <Route exact path="/home" component={HomePage} />
            <Route path="/mytickets" component={MyTickets} />
            <Route path="/pending-approvals" component={PendingApprovals} />
            <Route path="/create-ticket" component={CreateTicket} />
            <Route path="/system-alerts" component={SystemAlerts} />
            <Route path="/surveys" component={Surveys} />

          </Switch>
  
      </>
    );
}

export default App;
