import React, { Component } from 'react';

// Nested Components
import StackGrid from 'react-stack-grid';
import Card from './components/Card/Card';

export default class ViewBank extends Component {

  // Create a Card component with input as src
  stuffCard = (src, key) => {
    return <Card key={key} src={src} />;
  }

  // Update layout
  updateLayout = () => {
    this.grid.updateLayout();
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
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23376439_752444558281583_1297364718323175561_n.jpg?oh=29954fe38d8d12017eb8f0c48c61b627&oe=5AA95DC6',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23517635_2009989402661667_2971602636033065708_n.jpg?oh=d51ef70a4415ae5733d05f37c48f0bb2&oe=5AAA3375',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23517538_2009989179328356_4120578929519047963_n.jpg?oh=7cc7eaeef69fa46b776ac5e74aa7d298&oe=5A621F98',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23473047_2009989005995040_6117660060663808009_n.jpg?oh=1df3fedf0b5f31875eb5c1badc30b169&oe=5A66796B',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23472728_2009988529328421_3606640391025786311_n.jpg?oh=84054c51c456abea418e7c89fd044771&oe=5A992C9B',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23319085_2009114682749139_1620154231016590417_n.jpg?oh=e7c795d162728cbaaac12dee41ce7c96&oe=5A9788FE',
      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23561646_215907662282564_5559455452299414741_n.jpg?oh=24f95b14944c0abbc0d25f3d5e6667c8&oe=5A926584',
    ];

    // Holds Card components to be rendered
    const cards = [];

    // Stuff test links
    for (const i in testList) {
      cards.unshift(this.stuffCard(testList[i], i));
    }

    cards.unshift(<iframe src='https://gfycat.com/ifr/HotScornfulGraywolf?referrer=https%3A%2F%2Fwww.redditmedia.com%2Fmediaembed%2F7cjtsa' frameborder='0' scrolling='no' width='100%' height='250' allowfullscreen></iframe>);

    // Stuff stored links
    for (const i in this.props.cards) {
      cards.unshift(this.stuffCard(this.props.cards[i].src, i + cards.length));
    }

    // Properties of grid component
    const gridProps = {

      // Set a reference for the grid instance :: this.grid
      gridRef: grid => this.grid = grid,

      // Resize image height on load
      monitorImagesLoaded: true,

      // Layout
      columnWidth: '33%',
      gutterWidth: 10,
      gutterHeight: 10,

      // Animation
      duration: 1000,

      // Layout updating :: this is a hack and needs to be changed to something else
      onMouseMove: this.updateLayout,
    };

    const grid = <StackGrid {...gridProps} >{cards}</StackGrid>;

    return <div className='ViewBank'>{grid}</div>;
  }
}
