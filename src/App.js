import React, { Component } from 'react';
import HeaderComponent from './containers/wrapper/header/HeaderComponent';
import FooterComponent from './containers/wrapper/footer/FooterComponent';
import HomeComponent from './containers/home/Home Component';
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
         
        <header className="App-header">
          <HeaderComponent drawerClickHandler={this.drawerToggleClickHandler} />
        </header>
        <div className="Container"> 
          <div className="App-homeBody">
            <HomeComponent />
          </div>

          {/* <div className="scComponent">
            <CompareComponent>
              
            </CompareComponent>
          </div> */}
        </div>
        <footer className="App-footer>">
          <FooterComponent />
        </footer> 
      </div>
    );
  }
 }

export default App;
