import type { FC } from 'react';
import { Link } from 'wouter';

interface Props {
  children: React.ReactNode;
  problemName: string;
}

const ProblemWrapper: FC<Props> = ({ children, problemName }) => {
  return (
    <div className="px-5 py-10 max-w-4xl mx-auto">
      <div className="text-sm mb-5">
        <Link to="/" className="text-blue-500 underline">
          Home
        </Link>{' '}
        &gt; {problemName}
      </div>
      {children}
    </div>
  );
};

export default ProblemWrapper;
