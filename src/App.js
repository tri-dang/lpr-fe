import Albums from "./components/Albums";
import { Container } from 'react-bootstrap';

const containerStyles = {
  marginTop: 30
};

function App() {
  return (
    <div className="App">
      <Container style={containerStyles}>
        <Albums />
      </Container>
    </div>
  );
}

export default App;
