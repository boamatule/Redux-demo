import React, { Component }from 'react';
import { connect } from 'react-redux';
import {Container, Header, Button, Input } from 'semantic-ui-react';




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

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
        <imput id='email' onChange={this.imputHandler.bind(this)}></imput>
        <imput id='password' onChange={this.imputHandler.bind(this)}></imput>
        <button onClick={this.submitForm}></button>
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
