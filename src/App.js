import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import Category from './components/Category';
import Info from './components/Info';
import EditCategory from './components/EditCategory';
import { LicenseInfo } from '@mui/x-data-grid-pro';

LicenseInfo.setLicenseKey('403ecae9ce84c94e3c6117bcd098ff08T1JERVI6Mjg0MzcsRVhQSVJZPTE2NjA5OTUyMjUwMDAsS0VZVkVSU0lPTj0x')

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <div>
        <nav className={'header'}>
            <div >
              <Link to="/category" className={'nav-item'}>category</Link>
            </div>
            <div>
              <Link to="/info" className={'nav-item'}>info</Link>
            </div>
        </nav>
   
        <Switch>
        <Route path="/edit-category">
            <EditCategory/>
          </Route>
          <Route path="/category">
            <Category/>
          </Route>
          <Route path="/">
            <Info/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
