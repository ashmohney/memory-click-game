import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "../src/friends.json";
import "./App.css";


const shuffleArray = (array) => {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};

class App extends Component {
  //Setting state to this.state.friends, connecting to friends.json
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    friends,
    gameOver: false
  };

  // component mounts-- display starting message 
  componentDidMount() {
    this.setState({result: "Click a player to get started"})
  }
  
// click increases points by 1 -- checks for win/lose
  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    // console.log(`the score is ${score}`);
    if (score === this.state.friends.length) {
      this.setState({
        result: "You win! Start clicking to play again!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        friends,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "Correct! New high score!",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "Correct!"
      });
    }
    this.resetFriendsArray();
  }
  // click friend-- increase score and id to array
  handleEventClick = (id) => {
    // console.log(`Picture clicked with id: ${id}`);
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame();
    }
  }

  // set array to be mapped as new scrambled array with shuffle algorithm
  resetFriendsArray = () => {
    let newScramble = shuffleArray(friends);
    this.setState({friends: newScramble})
  }

  // reset game 
  resetGame = () => {
    this.setState({
      points: 0,
      currentScore:0,
      topScore: this.state.topScore,
      result: "You Loss!",
      clicked: [],
      friends,
      gameOver: true
    });
    // console.log('Game over? ', this.state.gameOver);
    this.resetFriendsArray();
  }



  
  render() {
    return(
        <Wrapper>
          <Title topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result} />
                  {/* //mapping over json object */}
           {this.state.friends.map(friend => (
             <FriendCard 
              handleEventClick = {this.handleEventClick}
              id={friend.id}
              key={friend.id}
              image={friend.image}
              
             />
           ))}
        </Wrapper>

    );
  }
}
export default App;