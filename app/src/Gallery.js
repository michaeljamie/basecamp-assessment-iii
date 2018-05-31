import React, { Component } from 'react';


class Gallery extends Component {
  render() {
    return ( <ul className = "Gallery">
      <li><img src = 'https://a0.muscache.com/im/pictures/26003118/06bf6fed_original.jpg?aki_policy=xx_large' className="Image"/></li>
      <li><img src = 'https://a0.muscache.com/im/pictures/26003188/287fb86e_original.jpg?aki_policy=x_large' className="Image"/></li>
      <li><img src = 'https://a0.muscache.com/im/pictures/26002074/c4360c29_original.jpg?aki_policy=x_large' className="Image"/></li>
      <li><img src = 'https://a0.muscache.com/im/pictures/26002129/af9bab2d_original.jpg?aki_policy=x_large' className="Image"/></li>
      </ul>
    );
  }
}

export default Gallery;