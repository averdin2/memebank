import React, { Component } from 'react';

// Nested Components
import StackGrid from 'react-stack-grid';
import Card from './components/Card/Card';

export default class ViewBank extends Component {

  // Create a Card component with input source
  stuffCard = (src, key) => {
    return <Card key={key} src={src} />;
  }

  render () {

    const testList = [
      'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/23509163_1121066991365810_5191679965986893461_o.jpg?oh=9468a8ba143289ab143fe526cb68f52b&oe=5A9EC866',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23434791_1121066764699166_212418881890078286_n.jpg?oh=b86d8f80ece4f103a1489d6207b31128&oe=5A642212',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23518922_1121065994699243_1689184336706776320_n.jpg?oh=95e71acf286fed461791806909cc06da&oe=5A66CC96',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/23405794_1120243508114825_7967570775754467912_o.jpg?oh=e426ef963b76919e3ad810d0f358f9db&oe=5A62EC48',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23471949_1120243294781513_2563904664383380531_n.jpg?oh=aec8caa86b8a7c0353d8c3439fa6951f&oe=5AAE9831',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23434730_1120243021448207_5698947967030120206_n.jpg?oh=65b9adce8c5ed419cc163675a65e2bc3&oe=5A98DE88',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23376159_1120242831448226_2512118175480590559_n.jpg?oh=8319ef8a1119b1b87ca92fdfc63bbded&oe=5A9C267A',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23434907_1120242598114916_5844990629720809884_n.jpg?oh=5cc369926bf6a6629450efb89942d02d&oe=5AAB964B',
    ];

    const cardList = [];

    for (const i in testList) {
      cardList.unshift(this.stuffCard(testList[i], i));
    }

    for (const i in this.props.cards) {
      cardList.unshift(this.stuffCard(this.props.cards[i].src, i + cardList.length));
    }

    // Properties of grid component
    const gridProps = {
      columnWidth: '25%'
    };

    const grid = <StackGrid monitorImagesLoaded {...gridProps} >{cardList}</StackGrid>;

    return <div className='ViewBank'>{grid}</div>;
  }
}
