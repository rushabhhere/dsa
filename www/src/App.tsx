import { Link, Route, Switch } from 'wouter';
import Home from './pages/home';
import Sudoku from './pages/problems/sudoku';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sudoku" component={Sudoku} />
        {/* 404 */}
        <Route>
          <main className="max-w-4xl px-5 py-10 mx-auto">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-3 mb-5 text-xl">Page not found</p>
            <Link
              className="px-4 py-2 text-lg text-white bg-blue-500 rounded-md"
              to="/"
            >
              Go Home
            </Link>
          </main>
        </Route>
      </Switch>
    </>
  );
}

export default App;
