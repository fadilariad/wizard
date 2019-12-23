import React from "react";
import {withRouter} from 'react-router-dom'

class Personal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pages: {next:"wizard-address"},
            name: localStorage.name ? localStorage.name : '',
            email:localStorage.email ? localStorage.email : '',
            bday:localStorage.bday ? localStorage.bday : ''
        }
    }


    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, bday} = this.state;
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('bday',bday);
        const {history} = this.props;
        const location = this.state.pages.next;
        history.push(location);
        console.log("submitted");

    };

    render() {
        const {name, email, bday} =this.state;
        return (
            <div className={"page"}>
                <h1 className={"title"}>PLEASE FILL IN YOUR DETAILS</h1>
                <form className={"form"} onSubmit={this.handleSubmit}>
                    <div className={"input-wrapper"}>
                        <h2>First name:</h2>
                        <input  type={"text"} name={'name'} value={name} onChange={this.handleChange} minLength={"3"} required/>
                    </div>
                    <div className={"input-wrapper"}>
                        <h2>E-mail:</h2>
                        <input type={"email"} name={"email"} value={email} onChange={this.handleChange} required/>
                        {/*<input type="submit"/>*/}
                    </div>
                    <div className={"input-wrapper"}>
                        <h2>Birthday:</h2>
                        <input type={"date"} name={"bday"}  value={bday} onChange={this.handleChange} required/>
                    </div>
                    <div className={"submit buttons"}>
                        <input className={'btn'} type="submit" value="next" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Personal);