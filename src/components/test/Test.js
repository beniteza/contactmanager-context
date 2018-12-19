import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    id: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          id: data.id
        })
      );
  }

  //   componentWillMount() {
  //     //runs before didmount
  //     console.log("comp will mount...");
  //   }

  //   componentDidUpdate() {
  //     //runs if state was changed
  //     console.log("comp did update...");
  //   }

  //   componentWillUpdate() {
  //     console.log("comp will update...");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     //This is getting deprecated along with others
  //     //runs when comp receives new properties
  //     console.log("comp will rec props...");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //       //returns the state
  //     return {
  //       test: "something"
  //     };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     //runs before dom up mutated
  //     console.log("getSnapshotBeforeUpdate...");
  //   }

  render() {
    const { title, id } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{id}</p>
      </div>
    );
  }
}

export default Test;
