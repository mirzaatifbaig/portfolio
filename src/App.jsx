import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import {projects} from "@/data/data.js";
const Project = lazy(() => import('./components/Project'));

const App = () => {

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      <div id="projects" className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<div>Loading...</div>}>
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;