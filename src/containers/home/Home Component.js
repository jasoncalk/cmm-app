import React, { Component } from 'react';
import './HomeStyles.css';
import Thumbnail from './../../images/Home/Thumbnail.svg';
import ProfileNigeria from './../../images/Home/ProfileNigeria.svg';
import EvaDot from './../../images/Home/EvaDot.svg';
import ProfileCont from './../../images/Home/Illustrations/ProfileContemplation.svg';
import Sort from './../../images/Home/Illustrations/Sort.svg';
import Arrow from './../../images/Home/buttons/arrow.svg';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="Home">

                <div className="HomeUpper">
                    <div className="HomeUpperLeft">
                        <div className="hulTop">
                            <span style={{textDecoration: "underline", textDecorationColor: "#966274"}}> 60 </span> Countries. <br />
                            <span style={{textDecoration: "underline", textDecorationColor: "#966274"}}> 520 </span> Million <br />
                            Believers. <br />
                            <span style={{textDecoration: "underline", textDecorationColor: "#966274"}}> Unprecedented </span> <br />
                            Access. <br />
                        </div>
                        <div className="hulMiddle">
                            God is growing His kingdom in areas with strategic access to 
                            unreached people groups. The Mobilization Index shines a 
                            light on how we can all work together to advance the gospel 
                            to unreached prople groups (UPGs).
                        </div>
                        <div className="hulBottom">
                            <img src={Thumbnail} alt="take me to church" />
                        </div>
                    </div>
                    <div className="HomeUpperRight">
                        <img style={{zIndex: "100" }}src={ProfileNigeria} alt="insert yearbook photo" />
                    </div>
                </div>

                <div className="HomeLower">
                    <div className="HomeLowerTop">
                        <div className="HLT-Left">
                            <p style={{color: "#808080", fontSize: ".75em"}}> 
                                Country + Region Maps
                            </p>
                            
                            <p>
                                Explore the unique sending potential of countries with one million or more believers.
                            </p>
                            <p style={{color: "#FFB134", fontSize: ".75em"}}>
                                Choose a country to explore.
                            </p>
                            <img style={{alignSelf:"flex-start" }}src={Arrow} alt="go to map" />
                        </div>
                        <div className="HLT-Right">
                            <p>
                                <img src={ProfileCont} alt="country profiles" />
                            </p>
                        </div>
                    </div>
                    <div className="HomeLowerBottom">
                        <div className="HLB-Left">
                            <img src={Sort} alt="sort and compare" />
                        </div>
                        <div className="HLB-Right">
                            <p style={{color: "#808080", fontSize: ".75em"}}> 
                                Sort + Compare
                            </p>
                            <p>
                                Make informed, strategic decisions based on your mission vision.
                            </p>
                            <p style={{color: "#FFB134", fontSize: ".75em"}}>
                                Identify the countries around the world with the greatest sending potential.
                            </p>
                            <img style={{alignSelf:"flex-start" }}src={Arrow} alt="go to map" />

                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}