import React, { Component } from 'react';
import './FormButton.css';

export default class FormButton extends Component {
  render = () => {
    const style = (
      <style>{`
        #${this.props.id} {
          color: ${this.props.color};
          border-color: ${this.props.color};
        }

        #${this.props.id}:hover {
          background-color: ${this.props.color};
          color: white;
          transition-duration: 0.1s;
        }
      `}</style>
    );

    console.log(style);

    const input = <input {...this.props} />;


    return <div className='FormButton'>{style}{input}</div>;
  }
}

FormButton.defaultProps = {
  type: 'button',
  color: '#000000',
};
