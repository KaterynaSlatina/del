import React from 'react';
import { Component } from 'react';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.newContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', id: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>

        <label htmlFor={this.inputId}>
          Number
          <input
            type="tel"
            name="number"
            id={this.inputId}
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
