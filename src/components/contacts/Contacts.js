import React, { Component } from "react";
import Contact from "./Contact"; //import generic with 'imp' + TAB
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    //The value comes from context.js which is the whole state
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
