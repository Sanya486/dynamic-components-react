import React, { lazy } from 'react';

const componentMap = {
  ComponentA: lazy(() => import('./components/ComponentA')),
  ComponentB: lazy(() => import('./components/ComponentB')),
  ComponentC: lazy(() => import('./components/ComponentC')),
  ComponentD: lazy(() => import('./components/ComponentD')),
};

export const componentNames = Object.keys(componentMap);

const DynamicComponentLoader = ({ componentName }) => {
  const Component = componentMap[componentName];
  return Component ? <Component /> : null;
};

export default DynamicComponentLoader;
