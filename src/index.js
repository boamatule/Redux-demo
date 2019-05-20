// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// src/App.jsx
import React from 'react';
import {Container, Header} from 'semantic-ui-react'
const App = () => { {
  return (
    <>
      <Container>
        <Header as='h1'>Hello World</Header>
      </Container>
    </>
  );
}
export default App;
