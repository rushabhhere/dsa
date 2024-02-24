import { Link } from 'wouter';

function Home() {
  return (
    <main className="px-5 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Rushabh's DSA Problems</h1>
      <ol className="list-decimal ml-7 mt-5">
        <li>
          <Link className="underline text-red-500" to="/sudoku">
            Sudoku Solver
          </Link>
        </li>
      </ol>
    </main>
  );
}

export default Home;
