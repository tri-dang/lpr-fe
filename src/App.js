import { Container } from 'react-bootstrap';
import { Switch, Route } from "react-router-dom";

import Nav from './components/Nav';
import Categories from "./components/Categories";
import { RoutedComponent as Category } from "./components/Category";
import { RoutedComponent as Album } from "./components/Album";

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
