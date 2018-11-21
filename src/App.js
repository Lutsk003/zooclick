import React, { Component } from 'react';
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Count from "./components/Count";
import animals from "./animals.json";
import './App.css';

class App extends Component {
  // set initial state
  state = {
    animals,
    clickedAnimals: [],
    count: 0,
    goal: 12,
    status: ""
  };

  // shuffle cards every time one is clicked
  shuffleCards = id => {
    let clickedAnimals = this.state.clickedAnimals;

    if(clickedAnimals.includes(id)) {
      this.setState({ clickedAnimals: [], count: 0, status: "Oops, you already clicked that one, click another animal to play again!"});
      return;
    }
    else {
      clickedAnimals.push(id)
    }

      if(clickedAnimals.length === 12){
        this.setState({count: 12, status: "Congratulations, you won! Click another animal to play again!"});
        return;
      }

      this.setState({ animals, clickedAnimals, count: clickedAnimals.length, status: " "});

      for (let i = animals.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [animals[i], animals[j]] = [animals[j], animals[i]];
      }
  }


  // render card images over each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zoo Clicky</h1>
          <p classname="App-intro">
            Click all of the zoo animals without clicking the same image more than once!
          </p>
        </header>
        <Count total={this.state.count} goal={12} status={this.state.status} />

        <Wrapper>
          {this.state.animals.map(animal => (
            <Cards
              shuffleCards={this.shuffleCards}
              id={animal.id}
              key={animal.id}
              image={animal.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default App;
