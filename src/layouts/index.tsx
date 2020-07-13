import React from 'react';
import { Helmet } from 'react-helmet';
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
interface IndexProps {
  className?: string;
}

const IndexLayout: React.FC<IndexProps> = props => {
  return (
    <div className={props.className}>
      <Helmet />
    </div>
  );
};

export default IndexLayout;
