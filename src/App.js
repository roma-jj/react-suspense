import './App.css';
import React, { Suspense } from 'react';
import { useResource } from './resource';
import { Posts } from './Posts';
import { Users } from './Users';
import Preloader from './preloader/preloader';

const resource = useResource();

function App() {

  return (
    <div className="App">
      <h1>Suspense</h1>
      <Suspense fallback={<Preloader />}>
        <Posts resource={resource} />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Users resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
