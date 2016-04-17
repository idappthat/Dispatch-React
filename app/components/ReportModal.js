import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ReportModal extends Component {
  constructor(props) {
    super(props)
    this.state = {showModal: false};
  }

  close() {
    this.state = {showModal: false};
  }

  open() {
    this.state = {showModal: true};
  }

  render() {
    return (
    <div>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}
