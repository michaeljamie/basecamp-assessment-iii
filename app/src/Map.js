import React, { Component } from 'react';

class Map extends Component {
    render() {
      return ( <ul className = "Gallery">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.225238359353!2d-111.66297004888067!3d40.226293979286496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d97574f96827d%3A0xf1e15119e2daaefd!2sDevMountain+%7C+Provo!5e0!3m2!1sen!2sus!4v1527799390474" className = "Map"></iframe>
        </ul>
      );
    }
  }
  
  export default Map;