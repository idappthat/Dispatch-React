import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'; 

import LogItem from './LogItem';

export default class ActivityLog extends Component {
  render() {
    return (
      <div>
        <Row>
          <h3>Recent Activity</h3>
        </Row>
        <LogItem status="reported" location="Jackson st" type="police" />
        <LogItem status="dispatched" location="Elm st" type="medic" />
        <LogItem status="dispatched" location="Lamar rd" type="fire" />
        <LogItem status="complete" location="aka rd" type="fire" />
      </div>
    );
  }
}