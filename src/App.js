import React, { useState, Suspense } from 'react';
import DynamicComponentLoader from './DynamicComponentLoader';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentChange = event => {
    setSelectedComponent(event.target.value);
  };

  return (
    <div>
      <h1>Dynamic Component Loader</h1>
      <select onChange={handleComponentChange}>
        <option value="">Select a component</option>
        <option value="ComponentA">Component A</option>
        <option value="ComponentB">Component B</option>
        <option value="ComponentC">Component C</option>
      </select>
      <Suspense fallback={<div>Loading...</div>}>
        {selectedComponent && (
          <DynamicComponentLoader componentName={selectedComponent} />
        )}
      </Suspense>
    </div>
  );
};

export default App;
