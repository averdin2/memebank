import React, { Component } from 'react';

// Nested Components
import FieldInputBank from './components/FieldInputBank/FieldInputBank';
import SubmitInputBank from './components/SubmitInputBank/SubmitInputBank';

// Styles
import './InputBank.css';

export default class InputBank extends Component {
  constructor (props) {
    super(props);
    this.state = { input: '' };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = () => {
    this.props.addCard(this.state.input, this.props.active, this.props.token);
    this.setState({ input: '' });
  }

  handleKeySubmit = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render () {

    const fieldProps = {
      value: this.state.input,
      onChange: this.handleInputChange,
      onKeyPress: this.handleKeySubmit,
    };

    const buttonProps = {
      onClick: this.handleSubmit,
    };

    const field = <FieldInputBank {...fieldProps} />;
    const button = <SubmitInputBank {...buttonProps} />;

    return <div className='InputBank'>{field}{button}</div>;
  }
}
