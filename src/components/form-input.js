import React, { Component } from 'react';
import validator from 'email-validator';
import { Input } from "semantic-ui-react";

class FormInput extends Component {
  state = {
    value: "",
    error: false,
    emailError: false
  };

  handleInputChange = event => {
    const { value } = event.target;
    let error = false;
    if (value === "") {
      error = true;
    }
    this.setState({ value, error });
  };

  handleEmailChange = event => {
    const { value } = event.target;
    if (validator.validate(value)) {
      this.setState({ emailError: true });
    }
    this.setState({ emailValue: value });
  };

  renderError(error) {
    if (this.state.error) {
      return <p className="error-message">This field is required</p>;
    }
  }

  renderEmailError(error) {
    if (this.state.emailError) {
      return <p className="error-message">Enter a valid email address</p>;
    }
  }

  render() {
    const { value, error, emailValue, emailError } = this.state;

    return (
      <section>
        <div>
          <Input
            id="input"
            className={error ? "error" : ""}
            value={value}
            onChange={this.handleInputChange}
          />
          {this.renderError(error)}
        </div>
        <div>
          <Input
            id="email"
            className={emailError ? "error" : ""}
            value={emailValue}
            onChange={this.handleEmailChange}
          />
          {this.renderEmailError(error)}
        </div>
      </section>
    );
  }
}

export default FormInput;