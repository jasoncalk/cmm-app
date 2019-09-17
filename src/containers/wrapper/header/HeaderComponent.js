import React, { Component } from 'react';
import './HeaderStyles.css';
import cmmMark from './../../../images/Nav/Components/cmmMark.svg';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';
import Title from './../../../images/Nav/Components/Title.svg';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div className='HeaderWrapper'>
                <div className='Hamburger'>
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                <div className='Title'>
                    <img src={Title} alt="Mobilization Index"/>
                    <p>Visualizing the sending potential of global church</p>
                </div> 
                <div className='cmmIcon'>
                    <span> A PROJECT OF <img style={{verticalAlign: "middle", paddingLeft: "5px"}} src={cmmMark} alt="CMM Mark" /> </span>
                </div>
            </div>

        )
    }

}

export default Header;