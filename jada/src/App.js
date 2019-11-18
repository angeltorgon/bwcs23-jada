import React from 'react';
import { Route } from 'react-router-dom'

//components
import Register from './Components/Auth/register'
import Login from './Components/Auth/login'
import PrivateRoute from './utilities/PrivateRoute'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={Register} />
      <Route exact path='/login' component={Login} />

      <PrivateRoute path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
