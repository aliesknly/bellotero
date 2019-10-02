import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
//Store
import { store } from './store';

//Components
import Container from './components/Container';
import Routes from './components/Routes';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Routes/>
          </Container>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
