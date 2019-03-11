import React, { Component } from 'react';
// ^^^ code above shows that 'react' is coming from node_modules file
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
// ^^ super invokes the constructor function from the Component that we are extending from
    this.state = {
      friends : [{
        name: 'carolyn',
        imageUrl: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/06/12192622/Corgi-Graffiti-e1518728713647.jpg'
      },
      {
        name: 'anna',
        imageUrl: 'https://i.pinimg.com/originals/d2/cd/c9/d2cdc9ac859ce43d5bd1cc841e67418e.jpg'
      }
    ],
    newFriend: '',
    newFriendImageUrl: ''
    }
  }

  handleFriendChange = (e)=>{
    console.log(111111, e.target.value)
    this.setState({
      newFriend: e.target.value
    })
  }
  // handleFriendChange WITHOUT arrow function: 'this' keyword would refer to the window
  // handleFriendChange WITH arrow function: 'this' keyword shares context with the instance of the class App
  // could also be bound to the 'this' keyword: this.handleFriendChange = this.handleFriendChange.bind(this)


  handleImageUrlChange = (e)=>{
    console.log(111111, e.target.value)
    this.setState({
      newFriendImageUrl: e.target.value
    })
  }

  handleAddFriend = ()=>{
    let { newFriend, newFriendImageUrl } = this.state;
// object destructuring above
    this.setState({
      friends: [...this.state.friends, { name: newFriend, imageUrl: newFriendImageUrl }]
// the spread operator spreads the friends array out and adds a new object next to it with the newFriend properties
    })
  }

  render() {
    let { friends } = this.state 
// unpacking 'friends' key from this.state
    return (
      <div className="App">
{/* className App has flex box styling to it */}
        <h1>these are my friends that think that arrays start at 1</h1>
        <input 
          type="text" 
          // value={this.state.newFriend} 
          placeholder='friends name'
          onChange={this.handleFriendChange}></input>
        <input 
          type="text" 
          // value={this.state.newFriendImageUrl} 
          placeholder='friends image'
          onChange={this.handleImageUrlChange}></input>
          <button onClick={this.handleAddFriend}>add friend here
          </button>
        {friends.map((friend, i)=>{ 
          return (
            <div key={i}>
              <p>{friend.name}</p>
              <img src={friend.imageUrl} alt="" width="320" />
            </div>
          )
// code above returns in JSX but we still have to escape back to javascript to display friend.name
// also render can only return everythin in ONE JSX TAG, HENCE THE DIV
        })}
      </div>
    );
  }
}

export default App;
