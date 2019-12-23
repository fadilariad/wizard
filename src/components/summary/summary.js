import React from "react";
import {withRouter} from 'react-router-dom'

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages:{
                prev:'wizard-profile'
            }
        }
    }
    componentDidMount() {
        const {name, email, bday, street, homeNumber, city, image} = localStorage;
        if (!city || !street || !homeNumber || !image || !bday || !email || !name) {
            this.prevPage();
        }
    };

    prevPage = () => {
        const {history} = this.props;
      const location = this.state.pages.prev;
      history.push(location);

    };
    render() {
        return (
            <div>
                <div className={"page"}>
                    <div className={"img-wrapper"}>
                        <div
                            className={"img"}
                            style={{
                                backgroundImage: `url('${localStorage.getItem('image')}')`
                            }}
                        >

                        </div>
                        <div className={"details-wrapper"}>
                            <h1>{localStorage.getItem("name")}</h1>
                            <h2>{localStorage.getItem("email")}</h2>
                            <h2>{localStorage.getItem("bday")}</h2>

                            <h2>
                                {localStorage.getItem("street")}{" "}
                                {localStorage.getItem("homeNumber")}, {localStorage.getItem("city")}
                            </h2>

                            <h2 className={"title"}>Hobbies:</h2>
                            {JSON.parse(localStorage.hobbies).length > 0  &&  JSON.parse(localStorage.getItem("hobbies")).map((data,i) => {
                                return <h2 key={i} className={'title'}>{data}</h2>
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <button className={"btn"} onClick={this.prevPage}>Prev</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Summary);


