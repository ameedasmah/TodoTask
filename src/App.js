import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import TodoDetails from './Components/TodoDetails';
import Create from './CreateTodo';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
    <div className="App">
      <div className="content">
        <Switch>
        <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/create">
              <Create />
            </Route>
            <Route  path="/todo/:id">
              <TodoDetails />
            </Route>
            <Route  path="*">
              <NotFound />
            </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
