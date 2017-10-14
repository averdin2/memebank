import React, { Component } from 'react';
import ViewBank from './components/ViewBank/ViewBank';
import InputBank from './components/InputBank/InputBank';
import Card from './components/ViewBank/components/Card/Card';
import './Bank.css';

export default class Bank extends Component {
  constructor() {
    super();
    this.state = { card_list: [] };
    const test_memes = [
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22448387_140390503260490_5599005195409214752_n.jpg?oh=8437843ad343646ebaf16882f1ab232d&oe=5A3D3B81',
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22406431_140250626607811_3521404222895044032_n.jpg?oh=4a033f55a6fbb5e2e0d3d8314f5eb09f&oe=5A7BD277',
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22449875_140246849941522_4383734371021943494_n.jpg?oh=07df914d2f7e8135a7928af975cb24ef&oe=5A6F1ABD',
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22406051_140189809947226_1512199981733474486_n.jpg?oh=7329f741f91d42cf14a30b63ae1483d4&oe=5A3C5CF9',
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22405381_140189583280582_5867287838572682114_n.jpg?oh=80b9872ff51d3e93a22b53d3bb3e0416&oe=5A721CEF',
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22405770_140131883286352_9017872679912984459_n.jpg?oh=df94697767ba6fd2775c7bf5eb068393&oe=5A3E03E5',
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22365638_140131749953032_107465379036048960_n.jpg?oh=02e3d3b556525336334c92f199b9b056&oe=5A3A035B',
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22365472_140128579953349_5525512254169539538_n.jpg?oh=91b5e82aa80c33c123d63629eb9f2478&oe=5A8347F6',
      'https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22310482_140053859960821_3473914751880482881_n.jpg?oh=98fda23654a4a122c6cfc0acc738b7df&oe=5A7E0382',
    ];

    for (const src in test_memes) {
      this.state.card_list.push(<Card src={test_memes[src]}/>);
    }
  }

  add_card = (src) => {
    const new_card_list = this.state.card_list.slice();
    new_card_list.push(<Card src={src}/>);
    this.setState({ card_list: new_card_list });
    console.log(this.state.card_list);
  }
  render = () => {
    const view = <ViewBank card_list={this.state.card_list}/>;
    const input = <InputBank add_card={this.add_card}/>;
    const content = [
      view,
      input,
    ];
    return <div className='Bank'>{content}</div>;
  }
}
