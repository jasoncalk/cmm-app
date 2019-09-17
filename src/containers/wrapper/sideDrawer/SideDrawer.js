import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open' ;
    }

    return (
        <nav className={drawerClasses}> 
            <div className="DrawerTitle">
                <div>
                    Mobilization
                </div> 
                <div>
                    Index
                </div>
            </div>
            <ul>
                <li><a href="/">Map</a></li>
                <li><a href="/">Sort + Compare</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;