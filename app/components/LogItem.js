import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap'; 

export default class LogItem extends Component {
  static defaultProps = {
    btnStyle: 'success',
    type: 'police;'
  };

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

    //icon
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
      <Row className="activity-item">
        <h5>Incident at {this.props.location}</h5>
        <Col md={7}>
          <img src={"/public/images/ic_incident.png"} />
          <img className="img-middle" src={"/public/images/ic_arrow.png"} />
          <img src={"/public/images/" + this.state.icon} />
        </Col>
        <Col md={5}>
          <Button bsStyle={this.state.btnStyle} className="btn-block">
            {this.props.status}
          </Button>
        </Col>
      </Row>
    );
  }
}