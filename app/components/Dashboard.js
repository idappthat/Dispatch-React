import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import ActivityLog from './ActivityLog';
import ReportModal from './ReportModal';
import Map from './Map';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    console.log(this.state);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <ReportModal show={this.state.showModal} />
        <Header />
        <Grid className="dashboard">
          <Row>
            <Col md={9} className="map">
              <Map />
            </Col>

            <Col md={3} className="activity">
              <ActivityLog onItemClick={this.handleActivityClick} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  handleActivityClick(id, e) {
    console.log(id + " clicked");
  }
}
