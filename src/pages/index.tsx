import React from "react";
import Wrapper from "../components/Wrapper";
import Reset from "../layouts/reset.js";
import Theme from "../components/styles/Theme";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Chivo", "sans-serif"],
  },
});

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
