import React from "react";
import userContext from "../utils/UserContext";
class ClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vedanshi",
    };
  }
  componentDidMount() {
    //simiar as useesffect
  }
  render() {
    return (
      <div>
        <userContext.Consumer>
          {({ name }) => <h1>{name} yoooo</h1>}
        </userContext.Consumer>
        <h1>class based component</h1>
        <h2>my name is v</h2>
      </div>
    );
  }
}

export default ClassBasedComponent;
