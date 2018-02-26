import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class NavigationBarView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      signUpModalOpen: false,
      signInModalOpen: false,
    };
  }

  openModal = (event) => {
    if(event === 'signUpModalOpen') {
      this.setState({
        signUpModalOpen: true,
      });
    }

    if (event === 'signInModalOpen') {
      this.setState({
        signInModalOpen: true,
      });
    }
}

afterOpenModal = () => {
  // references are now sync'd and can be accessed.
  this.subtitle.style.color = '#f00';
}

closeModal = () => {

  this.setState({
    signUpModalOpen: false,
    signInModalOpen: false,
  });

}


handleModal = (event) => {
  this.openModal(event);
}

handleClick = (event) => {

  if (event === 'signUpModalOpen') {
    this.handleModal(event);
  }

  if (event === 'signInModalOpen') {
    this.handleModal(event);
  }

}

  render() {

    let modal;

    if (this.state.signUpModalOpen) {
      modal = <SignUp
        isOpen={this.state.signUpModalOpen}
        closeModal={this.closeModal}
        onAfterOpen={this.afterOpenModal}
        shouldCloseOnOverlayClick={true}
        />
    }

    if (this.state.signInModalOpen) {
      modal = <SignIn
        isOpen={this.state.signInModalOpen}
        closeModal={this.closeModal}
        onAfterOpen={this.afterOpenModal}
        shouldCloseOnOverlayClick={true}
        />
    }


    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler
          navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="/">SF Film Map</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <span className="nav-link" onClick={() => this.handleClick('signUpModalOpen')}>Sign up</span>
            </li>
            <li className="nav-item active">
              <span className="nav-link" onClick={() => this.handleClick('signInModalOpen')}>Sign in</span>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        {modal}
      </nav>
    );
  }
}

export default NavigationBarView;
