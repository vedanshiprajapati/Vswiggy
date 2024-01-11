import React from "react";

class ClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //same like useee
  }
  render() {
    return (
      <div>
        <h1>class based component</h1>
        <h2>my name is {this.props.name}</h2>
      </div>
    );
  }
}

export default ClassBasedComponent;
