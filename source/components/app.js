import React from 'react';

export default class App extends React.Component {
  render(){
    var hasSite = this.props.websites.length >= 1 ? 'yep' : 'nope'
    return <div>
      <h1>Hello {this.props.firstname} {this.props.lastname}</h1>
      <p>do you have a website? <b>{hasSite}</b></p>
    </div>
  }
}
