import React from "react";

export class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose = e => {
    this.props.show = false;
    this.props.onClose(e);
  };

  render() {
    // let modal = null;
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className="overlay">
          <div className="modal" id="modal">
            <div className="content">{this.props.children}</div>
          </div>
        </div>
      );
    }
  }
}

export class ModalCongrats extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose = e => {
    this.props.congrats = false;
    this.props.onClose(e);
  };

  render() {
    // let modal = null;
    if (!this.props.congrats) {
      return null;
    } else {
      return (
        <div className="modal front" id="modal-2">
          <div className="modal-image">
            <img src={this.props.image} alt={this.props.alt} />
          </div>
          <div className="content">{this.props.children}</div>
        </div>
      );
    }
  }
}
