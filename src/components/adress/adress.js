// Phase 2:
// --------
// 4- City (required)
// 5- Street (required)
// 6- Number (required, not 0 or negative)


import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class AddressDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages:{
                prev: 'wizard-personal',
                next:'wizard-profile'
            },
            city: localStorage.city ? localStorage.city : '',
            street: localStorage.street ? localStorage.street : '',
            homeNumber: localStorage.homeNumber ? localStorage.homeNumber : '',
        };
    }

    componentDidMount() {
        const {name, email, bday} = localStorage;
        if (!name || !email || !bday) {
            this.prevPage();
        }
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {city, street, homeNumber} = this.state;
        localStorage.setItem("city", city);
        localStorage.setItem("street",street);
        localStorage.setItem("homeNumber", homeNumber);
        const {history} = this.props;
        const location = this.state.pages.next;
        history.push(location);
    };
    prevPage =() => {
      const {history} = this.props;
      const location = this.state.pages.prev;
      history.push(location);
    };


    render() {
        const {city, street, homeNumber} = this.state;
        return (
            <div className = "page">
                <div className={'header'}>
                    <h1 className = "title">Address details:</h1>
                    <h1 className={"title"}>2/4</h1>
                </div>

                <div className = "input-wrapper">
                    <h2>City: </h2>
                    <input className ="input" type="text" name="city" value={city} onChange={this.handleChange} required/>
                </div>

                <div className = "input-wrapper">
                    <h2>Street: </h2>
                    <input className ="input" type="text" name="street" value={street} onChange={this.handleChange} required/>
                </div>

                <div className = "input-wrapper">
                    <h2>Home number: </h2>
                    <input className ="input" type="number" min="1" name="homeNumber"  value={homeNumber} onChange={this.handleChange} required/>
                </div>

                <div className="buttons">
                    <button  className="btn prev" onClick= {this.prevPage}>prev</button>
                    <button  className="btn next" onClick= {this.handleSubmit}>next</button>
                </div>

            </div>
        );
    }
}

export default withRouter(AddressDetails);