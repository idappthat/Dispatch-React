import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import ActivityLog from './ActivityLog';
import ReportModal from './ReportModal';
import Map from './Map';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid className="dashboard">
          <Row>
            <Col md={9} className="map">
              <Map />
            </Col>
            <ReportModal />

            <Col md={3} className="activity">
              <ActivityLog />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
