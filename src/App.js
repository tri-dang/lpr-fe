import { Container } from 'react-bootstrap';

import Nav from './components/Nav';
import Categories from "./components/Categories";

const containerStyles = {
  marginTop: 10
};

function App() {
  return (
    <div className="App">
      <Container style={containerStyles}>
        <Nav />
        <Categories />
      </Container>
    </div>
  );
}

export default App;
