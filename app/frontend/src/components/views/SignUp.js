import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import SignupForm from './SignupForm';

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
        <SignupForm
          closeModal={this.props.closeModal}
        />
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
