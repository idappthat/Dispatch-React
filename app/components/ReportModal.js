import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ReportModal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      showModal: props.show
    };

    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onresult = this._onRecognition;
    this.recognition.start();
  }

  _onRecognition(e) {
    console.log(e.results.length);
    if(e.results[e.results.length - 1].isFinal == true) {
      let box = $('#dialog-box');
      let d = new Date,
          dformat = [d.getMonth()+1,
                     d.getDate(),
                     d.getFullYear()].join('/')+' '+
                    [d.getHours(),
                     d.getMinutes(),
                     d.getSeconds()].join(':');

      box.val(box.val() + `[${dformat}] ${e.results[e.results.length - 1][0].transcript}\n`);

      $.ajax({
        url: 'https://mobihackdfw.herokuapp.com/message',
        data: {
          'message': e.results[e.results.length - 1][0].transcript,
        },
        method: 'POST',
        success: function(response) {
            console.log(response);
        }
      });
    }
  }

  _onSuccessParse(resp) {
    console.log(resp);
  }

  close() {
    this.setState({showModal: false})
  }

  render() {
    return (
    <div>
      <Modal className="report-modal" show={this.props.show}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="emergency-header">
            <img className="emergency-icon" src={"/public/images/ic_incident.png"} />
          </div>
          <div className="input-group">
            <textarea id="dialog-box" className="dialog-box" name="dialog"></textarea>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    )
  }
}
