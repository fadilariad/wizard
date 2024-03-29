// Phase 2:
// --------
// 4- City (required)
// 5- Street (required)
// 6- Number (required, not 0 or negative)


import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Api from "../../api/api";
class AddressDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages:{
                prev: 'wizard-personal',
                next:'wizard-profile'
            },
            city: Api.getItem('city') ? Api.getItem('city') : '',
            street: Api.getItem('street') ? Api.getItem('street') : '',
            homeNumber: Api.getItem('homeNumber') ? Api.getItem('homeNumber') : '',
        };
    }

    componentDidMount() {
        if (!Api.isCompletePagePersonal()) {
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
        Api.setItem("city", city);
        Api.setItem("street",street);
        Api.setItem("homeNumber", homeNumber);
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
            <form className = "page" onSubmit={this.handleSubmit}>
                <div className={'header'}>
                    <h1 className = "title">Address details:</h1>
                    <h1 className={"title"}>2/4</h1>
                </div>

                <div className = "input-wrapper">
                    <h2>City: </h2>
                    <input  type="text" name="city" value={city} onChange={this.handleChange} required/>
                </div>

                <div className = "input-wrapper">
                    <h2>Street: </h2>
                    <input  type="text" name="street" value={street} onChange={this.handleChange} required/>
                </div>

                <div className = "input-wrapper">
                    <h2>Home number: </h2>
                    <input type="number" min="1" name="homeNumber"  value={homeNumber} onChange={this.handleChange} required/>
                </div>

                <div className="buttons">
                    <button  className="btn prev" onClick= {this.prevPage}>prev</button>
                    <div><small>field with * required</small></div>
                    <input  className="btn next" type={'submit'} value={'next'} />
                </div>


            </form>
        );
    }
}

export default withRouter(AddressDetails);