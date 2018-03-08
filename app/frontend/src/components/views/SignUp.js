import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import SignupForm from './SignupForm';
import { signUserUp } from '../../actions';

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
  onSubmit = (user) => {
    this.props.signUserUp(user);
  }
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
          onSubmit={this.onSubmit}
        />
      </Modal>
    );
  }
}

SignUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  shouldCloseOnOverlayClick: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  signUserUp: PropTypes.func.isRequired,
};

const dispatchToProps = (dispatch) => {
  return {
    signUserUp: (user) => dispatch(signUserUp(user)),
  };
};

export default connect(null, dispatchToProps)(SignUp);
