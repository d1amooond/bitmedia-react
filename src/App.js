import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';



import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route
                path={'/'}
                component={HomePage}
                exact
            />
            <Route
                path={'/users'}
                component={UsersPage}
                exact
            />
            <Route
                path={'/user/:id'}
                component={UserPage}
                exact
            />
        </Switch>
    </div>
  );
}

export default App;
