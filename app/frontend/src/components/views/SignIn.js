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

class SignIn extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        style={customStyles}
        contentLabel="Modal"
        shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
        onRequestClose={this.props.closeModal}
      >
        <div>
          Sign INNNN
        </div>
      </Modal>
    );
  }
}

SignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  shouldCloseOnOverlayClick: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignIn;
