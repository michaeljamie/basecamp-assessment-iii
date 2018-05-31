import React, { Component } from 'react';


class ContactsList extends Component {
  render() {
    return (
      <ul className="Contact">
        <li> <strong>Dublin:</strong> 555-555-5555 </li>
        <li> <strong>Baylor:</strong> 555-555-5555 </li>
        <li> <strong>Pierre:</strong> 555-555-5555 </li>        
        </ul>
    );
  }
}

export default ContactsList;