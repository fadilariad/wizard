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
                    <div className={'header'}>
                        <h1 className = "title">Summary:</h1>
                        <h1 className={"title"}>4/4</h1>
                    </div>
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
                            <h2><span className={"field"}>Email:  </span>{localStorage.getItem("email")}</h2>
                            <h2><span className={"field"}>Date of Birth:  </span>{localStorage.getItem("bday")}</h2>

                            <h2><span className={"field"}>Address:  </span>
                                {localStorage.getItem("street")}{" "}
                                {localStorage.getItem("homeNumber")}, {localStorage.getItem("city")}
                            </h2>

                            <div className={"hobbies-wrapper"}>
                            <h2><span className={"field"}>Hobbies:  </span></h2>
                            {JSON.parse(localStorage.hobbies).length > 0  &&  JSON.parse(localStorage.getItem("hobbies")).map((data,i) => {
                                return <h2 key={i} className={'title space'}>{data}</h2>
                            })}
                            </div>
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


