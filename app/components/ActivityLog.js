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
        <LogItem reportId="1" status="reported" location="Jackson st" type="police" />
        <LogItem reportId="2" status="dispatched" location="Elm st" type="medic" />
        <LogItem reportId="3" status="dispatched" location="Lamar rd" type="fire" />
        <LogItem reportId="4" status="complete" location="aka rd" type="fire" />
      </div>
    );
  }
}
