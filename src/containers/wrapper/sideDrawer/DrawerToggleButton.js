import React from 'react';
import './DrawerToggleButton.css';
import Hamburger from './../../../images/Nav/Components/Hamburger.svg';

const drawerToggleButton = props => (
    <button className='toggleButton' onClick={props.click}>
        <img style={{ verticalAlign: "middle", paddingRight: "5px"}} src={Hamburger} alt=" "/> Menu
    </button>
);
export default drawerToggleButton;