import React, { Component } from 'react';
import Rectangle from './../../images/Compare/Rectangle.svg';
import SortIllustration from './../../images/Compare/Illustrations/Sort Page.svg';
import './CompareStyles.css';

class CompareComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            countries: [
                // { id: 42, name: 'Argentina', number_of_evangelicals: 3, cultural_bridges_to_upgs: 19.72, regional_access_to_upgs: 772, religious_freedom: 2.4, prosperity: 53, current_sending_abroad: 0.01, mobilization_potential: 'High' },
                // { id: 33, name: 'Costa Rica', number_of_evangelicals: 700, cultural_bridges_to_upgs: 28.65, regional_access_to_upgs: 772, religious_freedom: 2.2, prosperity: 31, current_sending_abroad: 0.0083, mobilization_potential: 'High' }
            ]
        }
    }

    componentDidMount() {
        fetch('https://mobindex.herokuapp.com/countries.json')
        .then(res => {
            if (!res.ok) {
                console.log('error');
            }
            return res.json();
        })
        .then(response => {
            console.log(response.countries);
            this.setState({ countries: response.countries[0] });
        })
    }


    renderTableData() {
        return this.state.countries.map((countries) => {
            const { id, name, number_of_evangelicals, cultural_bridges_to_upgs, regional_access_to_upgs, religious_freedom, prosperity, current_sending_abroad, mobilization_potential} = countries
            
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{number_of_evangelicals} M</td>
                    <td>{cultural_bridges_to_upgs}</td>
                    <td>{regional_access_to_upgs} k</td>
                    <td>{religious_freedom}</td>
                    <td>{prosperity}</td>
                    <td>{current_sending_abroad} %</td>
                    <td>{mobilization_potential}</td>
                </tr>
            )
        })
    }
  
    render() {
        return (
            <div>
                <div className='Rectangle'>Sort + Compare</div>
                    <div className='scWrapper'>
                        <div className='scInfo'>
                            <div className='scLeft'>
                                The Mobilization Index exists to help you identify locations that are ripe
                                for mobilization efforts. Below we have made available the data to allow you
                                to sort and compare different locations based on the criteria that best suit
                                your organization or group's strengths. May God guide you as you plan and strategize. 
                            </div>
                            <div className='scRight'>
                                <img src={SortIllustration} />
                            </div>
                        </div>
                        <table id='countries'>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Total Number of Evangelicals</th>
                                    <th>Cultural Bridges to UPGs</th>
                                    <th>Regional Access to UPGs</th>
                                    <th>Religious Freedom</th>
                                    <th>Prosperty</th>
                                    <th>Current Sending Abroad</th>
                                    <th>Mobilization Potential</th>
                                </tr>
                            </thead>    
                            <tbody>    
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

export default CompareComponent