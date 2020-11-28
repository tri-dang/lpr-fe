import { Container } from 'react-bootstrap';

import Query from "./components/Query";
import Categories from "./components/Categories";
import META_BY_SLUG_QUERY from "./queries/meta/metaBySlug";

const containerStyles = {
  marginTop: 10
};

function App() {
  return (
    <div className="App">
      <Container style={containerStyles}>
        <Query query={META_BY_SLUG_QUERY} slug='logo' spinnerDisabled>
          {({ data: { metaBySlug } }) => {
            return (
              <div>
                <img src={metaBySlug.picture[0].url} width='50' alt='' />
                <br/>
                <br/>
                <Categories />
              </div>
            )
          }}
        </Query>
      </Container>
    </div>
  );
}

export default App;
