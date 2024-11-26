import React, { lazy } from 'react';

const componentMap = {
  ComponentA: lazy(() => import('./components/ComponentA')),
  ComponentB: lazy(() => import('./components/ComponentB')),
  ComponentC: lazy(() => import('./components/ComponentC')),
};

const DynamicComponentLoader = ({ componentName }) => {
  const Component = componentMap[componentName];
  return Component ? <Component /> : null;
};

export default DynamicComponentLoader;
