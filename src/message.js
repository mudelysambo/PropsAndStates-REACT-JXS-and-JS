import react, { Component } from 'react';
import { render } from 'react-dom';

class Message extends Component{

  constructor() {
    super()
    this.state = {
      message: 'welcome visitor'
    }

  }

  changeMessage(){
    this.setState({
      message: 'Thank you for subscribing'
    })
  }


  render(){
    return(
      <div>
      <h1>{this.state.message}</h1>
      <button onClick={() => this.changeMessage()}>subcribe</button>
      </div>
    )
  }
}
 export default Message;