import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import '../../styles/index.scss';
import { Footer, Header } from '../elements';
import Spinner from '../ui/Spinner/Spinner';

function App() {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
