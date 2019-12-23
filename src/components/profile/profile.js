import React from "react";
import {withRouter} from 'react-router-dom';


class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pages:{
                prev:'wizard-address',
                next:'wizard-summary'
            },
            hobbies:localStorage.hobbies ? JSON.parse(localStorage.getItem('hobbies')) : '',
            image:localStorage.image ? localStorage.image : ''
        };
        this.selectedCheckboxes = new Set();
    }
    componentDidMount() {
        const {city, street, homeNumber, name, email, bday} = localStorage;
        if (!city || !street || !homeNumber || !name || !email || !bday) {
            this.prevPage();
        }
    }

    handelSubmit = (e) => {
        e.preventDefault();
        const {hobbies,image} = this.state;
        const {history} = this.props;
        const location = this.state.pages.next;
        localStorage.setItem('hobbies',JSON.stringify(hobbies));
        localStorage.setItem('image',image);
        history.push(location);

    };
    toggleCheckbox = (e) => {
        const label = e.target.value;
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        const hobbies = [];
        for (const checkbox of this.selectedCheckboxes ){
            hobbies.push(checkbox);
        }
        this.setState({hobbies:hobbies});
    };
    prevPage = () => {
        const {history} = this.props;
        const location = this.state.pages.prev;
        history.push(location);
    };
    handleChange = (e) => {
        const imageURL = e.target.value;
        this.setState({image:imageURL});
    };
    render() {
        const {hobbies,image} = this.state;
        return (
            <form className = "page">
                <div className={'header'}>
                    <h1 className = "title">Profile details:</h1>
                    <h1 className={"title"}>3/4</h1>
                </div>
                <div className = "input-wrapper">
                    <h2>Profile Image URL: </h2>
                    <input type={"text"} name={'url'}  onChange={this.handleChange} value={image}  required />
                </div>
                <div className = "radio-wrapper">
                    <h2>Hobbies: </h2>
                    <input onChange={this.toggleCheckbox}  type="checkbox" name="hobbies" value="chess" checked={hobbies.includes('chess')}/><h2 className={"radio-option"}>chess</h2> <br/>
                    <input onChange={this.toggleCheckbox} type="checkbox" name="hobbies" value="movies" checked={hobbies.includes('movies')}/> <h2 className={"radio-option"}>Movies</h2> <br/>
                    <input onChange={this.toggleCheckbox} type="checkbox" name="hobbies" value="sport" checked={hobbies.includes('sport')}/><h2 className={"radio-option"}>sports</h2> <br/>
                    <input onChange={this.toggleCheckbox} type="checkbox" name="hobbies" value="cars" checked={hobbies.includes('cars')}/><h2 className={"radio-option"}>cars</h2> <br/>
                    <input onChange={this.toggleCheckbox} type="checkbox" name="hobbies" value="dolls" checked={hobbies.includes('dolls')}/> <h2 className={"radio-option"}>dolls</h2> <br/>
                </div>

                <div className="buttons">
                    <button type="submit" className="btn prev" onClick= {this.prevPage}>prev</button>
                    <input type={'submit'} className="btn next" onClick= {this.handelSubmit} value={'next'}/>
                </div>

            </form>

        );
    }
}

export default withRouter(Profile);