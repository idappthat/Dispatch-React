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
       type: 'POST',
       dataType: 'json',
       url: 'https://mobihackdfw.herokuapp.com/message/',
       data : { 'message': e.results[e.results.length - 1][0].transcript },
       success: function(data) {
        //  console.log(data);
         if(data['keys'] !== undefined) {
           for(let dat of data['keys']) {
             if(dat == 'fire') {
               $('#fire').addClass('selected');
             } else if(dat == 'police') {
               $('#police').addClass('selected');
             } else if(dat == 'medic') {
               $('#medic').addClass('selected');
             }

             if(dat == 'location') {
               $('#coordinates').val(`${data['location']['latitude']}, ${data['location']['longitude']}`)
               $('#location').val(`${data['address']}`)
             }
           }
         }
       }
      });
    }
  }

  _onSuccessParse(resp) {

  }

  close() {
    this.setState({showModal: false})
  }

  submit() {
    let coords = $('#coordinates');
    let type = '';

    if($('#police').hasClass('selected')) {
      type = 'police';
    } else if($('#medic').hasClass('selected')) {
      type = 'medic';
    } else if($('#fire').hasClass('selected')) {
      type = 'fire';
    }

    let status = 'reported';

    $.ajax({
     type: 'POST',
     dataType: 'json',
     url: 'https://mobihackdfw.herokuapp.com/report/new',
     data : { 'type': type, 'status': status },
     success: function(data) {
       console.log('sent');
     }
    });
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
          <div className="input-group">
            <input id="location" className="two" name="dialog" value="Location"></input>
            <input id="coordinates" className="two" name="dialog" value="Coordinates"></input>
          </div>
          <div className="input-group">
            <button id="police"><img src={"/public/images/ic_police.png"} /> Police</button>
            <button id="fire"><img src={"/public/images/ic_fire_truck.png"} /> Fire</button>
            <button id="medic"><img src={"/public/images/ic_ambulance.png"} /> Medic</button>
          </div>

          <Button onClick={this.submit} bsStyle="danger" className="btn-block">
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </div>
    )
  }
}
