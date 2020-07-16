import React from "react";
import Wrapper from "../components/Wrapper";
import Reset from "../layouts/reset.js";
import Theme from "../components/styles/Theme";

const index = () => {
  return (
    <Theme>
      <Reset>
        <Wrapper />
      </Reset>
    </Theme>
  );
};

export default index;
