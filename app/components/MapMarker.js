import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap'; 

import {greatPlaceStyle} from './my_great_place_styles.js';

export default class MapMarker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}