import React, { Component } from 'react';

export default class ReportModal extends Component {
  constructor(props) {
    super(props)

    this.props = props;
  };

  getInitialState() {
    return { showModal: true };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    <Modal show={this.state.showModal} onHide={this.close}>
    <p>Test</p>
    </Modal>
  }
}
