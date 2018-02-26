import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#app');

const customStyles = {
  content: {
    margin: 'auto',
    width: '85%',
    marginTop: '50px',
    overflow: 'none',
    padding: '0px',
    border: 'none',
  },
};

class SignUp extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        style={customStyles}
        contentLabel="Modal"
        shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
        onRequestClose={this.props.closeModal}
      >
        <form>
          <div className="form-group">
            <label>Example label</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              placeholder="Example input"
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <label>Example label</label>
            <input
              className="form-control"
              type="date"
              id="example-date-input"
            />
          </div>
        </form>
      </Modal>
    );
  }
}

SignUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  shouldCloseOnOverlayClick: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignUp;
