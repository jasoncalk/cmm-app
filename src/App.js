import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import HeaderComponent from './containers/wrapper/header/HeaderComponent';
import FooterComponent from './containers/wrapper/footer/FooterComponent';
import HomeComponent from './containers/home/Home Component';
import CompareComponent from './containers/compare/CompareComponent';
import SideDrawer from './containers/wrapper/sideDrawer/SideDrawer';
import Backdrop from './containers/wrapper/backdrop/Backdrop';

// import CompareComponent from './containers/compare/CompareComponent';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  };

  state = { 
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
         <SideDrawer show={this.state.sideDrawerOpen} />
         {backdrop}
{/* Header for the entire website */}
        <header className="App-header">
          <HeaderComponent drawerClickHandler={this.drawerToggleClickHandler} />
        </header>

{/* Body for the entire website */}
{/* Router Open */}
        <div className="Container"> 
          {/* <div className="App-homeBody">            
            <HomeComponent />
          </div> */}
          <div className="App-compareBody">
            <CompareComponent />
          </div>
        </div>
{/* Router Close */}
{/* Footer for the entire website */}
        <footer className="App-footer>">
          <FooterComponent />
        </footer> 
{/* Closes the render for the app */}
      </div>
    );
  }
 }

export default App;
