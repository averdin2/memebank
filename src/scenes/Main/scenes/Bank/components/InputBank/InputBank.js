import React, { Component } from 'react';
import FieldInputBank from './components/FieldInputBank/FieldInputBank';
import SubmitInputBank from './components/SubmitInputBank/SubmitInputBank';
import './InputBank.css';

export default class InputBank extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handle_input_change = (e) => {
    this.setState({ input: e.target.value });
  }

  handle_submit = () => {
    this.props.add_card(this.state.input);
    this.setState({ input: '' });
  }

  handle_key_submit = (event) => {
    if (event.key === 'Enter') {
      this.handle_submit();
    }
  }

  render = () => {

    const field_props = {
      value: this.state.input,
      onChange: this.handle_input_change,
      onKeyPress: this.handle_key_submit,
    }

    const button_props = {
      onClick: this.handle_submit,
    }

    const field = <FieldInputBank {...field_props}/>;
    const button = <SubmitInputBank {...button_props}/>;

    const content = [
      field,
      button,
    ]

    return <div className='InputBank'>{content}</div>;
  }
}
