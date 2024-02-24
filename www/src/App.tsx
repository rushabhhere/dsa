import { Route, Switch } from 'wouter';
import Home from './pages/home';
import Sudoku from './pages/problems/sudoku';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sudoku" component={Sudoku} />
      </Switch>
    </>
  );
}

export default App;
