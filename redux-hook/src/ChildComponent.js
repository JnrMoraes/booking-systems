import React from 'react';
import { useStore } from './store/Store';

const ChildComponent = () => {
  const { logoColor } = useStore();

  return <div style={{ color: logoColor }}> ChildComponent </div>;
};

export default ChildComponent;
