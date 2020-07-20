import React from "react";
import Wrapper from "../components/Wrapper";
import Reset from "../layouts/reset.js";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Chivo", "sans-serif"],
  },
});

const index = () => {
  return (
    <Reset>
      <>
        <Wrapper />
      </>
    </Reset>
  );
};

export default index;
