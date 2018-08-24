import React, { Component } from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css';
import Villian from './Villian';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      villains: [
        {
          name: 'Lex Luthor', description: 'Lex Luthor is a wealthy, power-mad American business magnate, ingenious engineer, philanthropist to the city of Metropolis, and one of the most intelligent people in the world.', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/LexLuthor1.png/250px-LexLuthor1.png'
        },
        { name: 'Captain Cold', description: 'Captain Cold is the leader of the Rogues, a loose criminal association, as well as the older brother of Golden Glider.', imageUrl: 'https://vignette.wikia.nocookie.net/theflash/images/5/5a/Captain_Cold_Wentworth_Miller-14.jpg/revision/latest?cb=20150512045523' },
        { name: 'Snoke', description: 'Snoke, a Force-sensitive humanoid male alien, was the Supreme Leader of the First Order and a powerful practitioner of the dark side of the Force.', imageUrl: 'https://vignette.wikia.nocookie.net/starwars/images/e/ed/Snoke_TLJ.png/revision/latest?cb=20180105001738' }
      ]
    }



  }
  render() {
    return (<div><Header />

      <div class="container">
        <div class="text-center">
          <Villian villains={this.state.villains}/>
          
        </div>
      </div>
    </div>);
  }
}

export default App;