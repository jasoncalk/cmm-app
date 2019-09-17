import React, { Component } from 'react';
import './FooterStyles.css';
import FooterInner from './../../../images/Footer/Components/FooterInner.svg';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    } 

    render () {
        return (
            <div className="FooterWrapper">
                {/* <img src={FooterInner} /> */}
                
                <div className="LeftContent">
                    <p> 
                    <span style={{ fontSize: "1.3125em" }}>Mobilization Index</span> <br />
                        Visualizing the sending potential of the global church
                    </p>
                    <p>
                        A project of the <span style={{ color:"#D8DFBA"}}>Center for Mission Mobilization</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faFacebookF} fixedWidth /> <FontAwesomeIcon icon={faTwitter} fixedWidth />
                    </p>

                </div>
                <div className="RightContent">
                    <div className="RightUpper">
                    <p>
                        Map  <br />
                        Sort + Compare
                    </p>
                    </div>
                    <div classname="RightLower">
                        <p>
                            About <br />
                            Sources <br />
                            Definitions <br />
                            Contact
                        </p>
                    </div>
                </div>
            </div>

        )
    }

}