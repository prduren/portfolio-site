import React from "react";
import { Helmet } from "react-helmet";

interface IndexProps {
  className?: string;
}

const IndexLayout: React.FC<IndexProps> = (props) => {
  return (
    <div className={props.className}>
      <Helmet />
    </div>
  );
};

export default IndexLayout;
