import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const onSubmit = (values) => {
  console.log(values);
};

const CreateRenderer = render => (field) => {
  const {
    meta: {
      touched,
      error,
      input,
      label,
    },
  } = field;

  const fieldInput = field.input;
  const fieldLabel = field.label;
  const fieldType = field.type;
  const fieldChildren = field.children;

  const className = `form-group ${touched && error ? 'has-danger' : ''}`;
  return (
    <div className={className}>
      <label>{field.label}</label>
      {render(fieldInput, fieldLabel, fieldType, fieldChildren)}
      <label className="form-control-label" >
        {touched ? error : ''}
      </label>
    </div>
  );
};

const renderInput = CreateRenderer((input, label, type) => {

  return (
    <input
      className="form-control"
      placeholder={label}
      type={type}
      {...input}
    />
  );
});

const Radio = props => {
  if (props && props.input && props.options) {
    const renderRadioButtons = (key, index) => {
      return (
        <label className="labelSpace" key={`${index}`} htmlFor={`${props.input.name}-${index}`}>
          <Field
            id={index}
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
            className="labelSpace"
          />
          {props.options[key]}
        </label>
      )
    };
    return (
      <div>
        <div>
          {props.label}
        </div>
        <div className='radioHeight'>
          {props.options &&
            Object.keys(props.options).map(renderRadioButtons)}
        </div>
        <label className="labelColor" htmlFor="inputDanger1">
          {props.meta.submitFailed === false ?  '' : props.meta.error}
        </label>
      </div>
    );
  }
  return <div></div>
}

let SignupForm = ({ handleSubmit, submitting, closeModal }) =>
  <form onSubmit={handleSubmit(onSubmit.bind(this))}>
    <Field
      label="Fullname"
      name="fullname"
      type="text"
      component={renderInput}
    />

    <Field
      label="Email"
      name="email"
      type="text"
      component={renderInput}
    />

    <Field
      label="Birthday"
      name="birthday"
      type="date"
      component={renderInput}
    />

    <Field
      label="Password"
      name="password"
      type="password"
      component={renderInput}
    />

    <Field
      label="Gender"
      name="gender"
      component={Radio}
      options={{
       male: 'male',
       female: 'female',
       trans: 'trans'
      }}
    />

    <Field
      label="Username"
      name="username"
      type="text"
      component={renderInput}
    />

    <button
      className="btn btn-outline-success my-2 my-sm-0"
      type="submit"
      disabled={submitting}
    >
      Submit
    </button>
    <button
      className="buttonSpace btn btn-outline-danger my-2 my-sm-0"
      type="submit"
      onClick={closeModal}
    >
      Cancel
    </button>
  </form>;


const validate = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = 'Enter a fullname!';
  }

  if (!values.birthday) {
    errors.birthday = 'Enter a birthday!';
  }

  if (!values.email) {
    errors.email = 'Enter an email!';
  }

  if (!values.gender) {
    errors.gender = 'Select a gender!';
  }

  if (!values.password) {
    errors.password = 'Enter a password!';
  }

  if (!values.username) {
    errors.username = 'Enter a username!';
  }

  return errors;
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

SignupForm = reduxForm({
  validate,
  destroyOnUnmount: false,
  form: 'SignupForm',
})(SignupForm);

export default SignupForm;
