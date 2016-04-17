import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LogItem from './LogItem';
import LogItemBig from './LogItemBig';

export default class ActivityLog extends Component {
  render() {
    return (
      <div>
        <Row>
          <h3>Recent Activity</h3>
        </Row>
        <LogItemBig id="0" status="reported" location="Jackson st" type="police" onClick={this.props.onItemClick} />
        <LogItem id="1" status="reported" location="Jackson st" type="police" onClick={this.props.onItemClick} />
        <LogItem id="2" status="dispatched" location="Elm st" type="medic" onClick={this.props.onItemClick} />
        <LogItem id="3" status="dispatched" location="Lamar rd" type="fire" onClick={this.props.onItemClick} />
        <LogItem id="4" status="complete" location="aka rd" type="fire" onClick={this.props.onItemClick} />
      </div>
    );
  }
}
