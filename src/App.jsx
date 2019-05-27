import React, { Component }from 'react';
import { connect } from 'react-redux';
import {Container, Header, Button, Input } from 'semantic-ui-react';




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    };
  };

  inputHandler() {

  }

  submitForm() {

  }

  render() {
    return (
      <>
      <Container>
        <Header as='h1'>{this.props.state.greeting}</Header>
        <Input
          placeholder='New greeting'
          onBlur={(event) => this.props.dispatch({ type: 'PROPOSE_GREETING',
        greeting: event.target.value })}
        />

        <Button
          primary
          onClick={() => this.props.dispatch({ type: 'CHANGE_GREETING',
          greeting: 'Hello Venus' })}
        >
          Change greeting
        </Button>
      </Container>
      
      <>
        <input id='email' placeholder='email' onChange={this.inputHandler.bind(this)}></input>
        <input id='password' placeholder='password' onChange={this.inputHandler.bind(this)}></input>
        <button onClick={this.submitForm}>Login</button>
      </>
    </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    state: state 
  }
}

export default connect(mapStateToProps) (App)
