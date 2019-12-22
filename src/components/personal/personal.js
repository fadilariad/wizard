import React from "react";

class Personal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            bday: '',
            next: "address"
        }
    }
    componentDidMount() {
        let storage_name = localStorage.getItem('name');
        let storage_email = localStorage.getItem('email');
        let storage_bday = localStorage.getItem('bday');
        if (storage_name !== "" && storage_email !== "" && storage_bday !=="") {
            this.setState({
                name: storage_name,
                email: storage_email,
                bday: storage_bday
            })
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        const {name, email, bday} = this.state;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('bday', bday);
    };

    render() {
        return (
            <div className={"page"}>
                <h1 className={"title"}>PLEASE FILL IN YOUR DETAILS</h1>
                <form action={"/action_page.php"} className={"form"} onSubmit={this.handleSubmit}>
                    <div className={"input-wrapper"}>
                        <h2>First name:</h2>
                        <input type={"text"} name={'name'} value={this.state.name} onChange={this.handleChange} minLength={"3"} required/>
                    </div>
                    <div className={"input-wrapper"}>
                        <h2>E-mail:</h2>
                        <input type={"email"} name={"email"} value={this.state.email} onChange={this.handleChange} required/>
                        {/*<input type="submit"/>*/}
                    </div>
                    <div className={"input-wrapper"}>
                        <h2>Birthday:</h2>
                        <input type={"date"} name={"bday"} value={this.state.bday} onChange={this.handleChange} required/>
                    </div>
                    <div className={"submit buttons"}>
                        <button className={"btn"}>Prev</button>
                        <input type="submit" value="next"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Personal