import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/pageNotFound/PageNotFound';

// import ProTip from './ProTip';

export default function App() {
  return (
    <div>
      <Box >
      <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/home" component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Box>
    </div>
  );
}
