// Phase 2:
// --------
// 4- City (required)
// 5- Street (required)
// 6- Number (required, not 0 or negative)


import React, { Component } from 'react';

class AddressDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prev: 'personal',
            next:'image',
            city: '',
            street: '',
            home_number: ''
        };
    }

    componentDidMount(){
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("city", this.state.city)
        localStorage.setItem("street", this.state.street)
        localStorage.setItem("home_number", this.state.home_number)
    };


    render() {
        const {city, street, home_number} = this.state;
        return (
            <div className = "page">
                <h1 className = "title">Address details:</h1>

                <div className = "input-wrapper">
                    <h2>City: </h2>
                    <input className ="input" type="text" name="city" value={city} onChange={this.handleChange}/>
                </div>

                <div className = "input-wrapper">
                    <h2>Street: </h2>
                    <input className ="input" type="text" name="street" value={street} onChange={this.handleChange}/>
                </div>

                <div className = "input-wrapper">
                    <h2>Home number: </h2>
                    <input className ="input" type="number" min="1" name="home_number"  value={home_number} onChange={this.handleChange}/>
                </div>

                <div className="buttons">
                    <button type="submit" className="btn prev" onClick= {this.handleSubmit}>prev</button>
                    <button type="submit" className="btn next" onClick= {this.handleSubmit}>next</button>
                </div>

            </div>
        );
    }
}

export default AddressDetails;