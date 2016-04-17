import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import GoogleMap from 'google-map-react';

export default class Map extends Component {
  static defaultProps = {
    config: {
      language: 'en',
      key: 'AIzaSyAPcRlK8wQg-9q88cvh_L12hIqSXjkO-mY'
    },
    center: {lat: 32.778109, lng: -96.794974},
    zoom: 9,
    greatPlaceCoords: {lat: 32.769088, lng: -96.798665}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap
          bootstrapURLKeys={this.props.setup}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
        </GoogleMap>
    );
  }
}
