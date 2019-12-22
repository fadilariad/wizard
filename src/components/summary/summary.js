import React from "react";

class Summary extends React.Component {
    render() {
        return (
            <div>
                <div className={"page"}>
                    <div className={"img-wrapper"}>
                        <div
                            className={"img"}
                            style={{
                                backgroundImage: `url(${localStorage.getItem("image")})`
                            }}
                        >

                        </div>
                        <div className={"details-wrapper"}>
                            <h1>{localStorage.getItem("name")}</h1>
                            <h2>{localStorage.getItem("email")}</h2>
                            <h2>{localStorage.getItem("birth")}</h2>

                            <h2>
                                {localStorage.getItem("street")}{" "}
                                {localStorage.getItem("number")}, {localStorage.getItem("city")}
                            </h2>

                            <h2 className={"title"}>Hobbies:</h2>
                            <h2>{localStorage.getItem("hobbies")}</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={"btn"}>Prev</button>
                </div>
            </div>
        );
    }
}

export default Summary;


