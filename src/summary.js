import React from "react";

<<<<<<< HEAD
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
            ></div>
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
=======
class Summary extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>

            </form>
        );
    }
}

export default Summary
>>>>>>> 82a4cee70c8b230e6ad70f4ac21519f463dd262c
