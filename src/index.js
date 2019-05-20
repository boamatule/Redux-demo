import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {Container, Header} from 'semantic-ui-react';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();



const App = () =>  {
    return (
      <>
        <Container>
          <Header as='h1'>Hello World</Header>
        </Container>
      </>
    );
  }


export default App;