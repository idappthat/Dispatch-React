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
              <ActivityLog onItemClick={this.handleActivityClick.bind(this, this.state.showModal)} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  handleActivityClick(state, id) {
    this.setState({showModal: true});
    console.log(id);
  }
}
