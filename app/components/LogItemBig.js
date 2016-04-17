import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default class LogItemBig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnStyle: this.props.btnStyle,
      iconUrl: this.props.iconUrl
    };

    //Color of button
    switch(this.props.status) {
      case 'dispatched':
        this.state.btnStyle = 'warning';
        break;
      case 'reported':
        this.state.btnStyle = 'danger';
        break;
    }

    switch(this.props.type) {
      case 'medic':
        this.state.icon = 'ic_ambulance.png';
        break;
      case 'fire':
        this.state.icon = 'ic_fire_truck.png';
        break;
      default:
        this.state.icon = 'ic_police.png';
        break;
    }
  }

  render() {
    return (
      <Row className="big-row" onClick={this.props.onClick.bind(null, this.props.id)} className="activity-item big-row">
        <Col className="incident-col" md={12}>
          <img src={"/public/images/ic_incident.png"} />
        </Col>
        <h5>Incident!</h5>
        <Col className="incident-desc" md={12}>
          <p>Recipient: Unknown</p>
          <p>Location: Unknown</p>
          <p>Time: 12:00PM</p>
          <Button bsStyle="danger" className="btn-block">
            Accept Call
          </Button>
        </Col>
      </Row>
    );
  }
}
