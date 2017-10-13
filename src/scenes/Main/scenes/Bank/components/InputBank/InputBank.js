import React, { Component } from 'react';
import SubmitInputBank from './components/SubmitInputBank/SubmitInputBank';
import FieldInputBank from './components/FieldInputBank/FieldInputBank';
import './InputBank.css';

export default class InputBank extends Component {
  constructor() {
    super();
    this.state = { input: '' };
  }
  handle_input_change = (e) => {
    this.setState({ input: e.target.value });
  }
  handle_submit = () => {
    this.props.add_card(this.state.input);
  }
  render = () => {
    const field = <FieldInputBank value={this.state.input} onChange={this.handle_input_change}/>;
    const submit = <SubmitInputBank onClick={this.handle_submit}/>;
    const form = <form>{field}{submit}</form>;

    return <div className='InputBank'>{form}</div>;
  }
}
