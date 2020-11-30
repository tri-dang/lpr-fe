import { Container } from 'react-bootstrap';
import { Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Nav from './components/Nav';
import Categories from "./components/Categories";
import { RoutedComponent as Category } from "./components/Category";
import { RoutedComponent as Album } from "./components/Album";

library.add(fab);
library.add(fas);

const containerStyles = {
  marginTop: 10
};

function App() {
  return (
    <div className="App">
      <Container style={containerStyles}>
        <Nav />
        <Switch>
          <Route path="/" component={Categories} exact />
          <Route path="/categories/:slug" component={Category} exact />
          <Route path="/albums/:slug" component={Album} exact />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
