import React, { Component } from 'react';
import ViewBank from './components/ViewBank/ViewBank';
import InputBank from './components/InputBank/InputBank';

export default class Bank extends Component {
  render = () => {
    const view = <ViewBank/>;
    const input = <InputBank/>;
    return <div className='Bank'></div>;
  }
}
