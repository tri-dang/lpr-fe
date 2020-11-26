import { Container } from 'react-bootstrap';

import Query from "./components/Query";
import Albums from "./components/Albums";
import META_QUERY from "./queries/meta/meta";

const containerStyles = {
  marginTop: 10
};

function App() {
  return (
    <div className="App">
        <Query query={META_QUERY} id='1'>
          {({ data: { meta } }) => {
            return (
              <Container style={containerStyles}>
                <img src={meta.picture[0].url} width='100' alt=''/>
                <br/>
                <br/>
                <Albums />
              </Container>
            )
          }}
        </Query>
    </div>
  );
}

export default App;
