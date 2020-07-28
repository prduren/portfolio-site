import React from 'react';
import './reset.css';

interface Props {
  children: React.ReactNode;
  // any other props that come into the component
}

const Reset = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Reset;
