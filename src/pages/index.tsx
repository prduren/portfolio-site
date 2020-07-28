import React from 'react';
import Wrapper from '../components/Wrapper';
import Reset from '../layouts/reset';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Chivo', 'Overpass'],
  },
});

const index = () => {
  return (
    <Reset>
      <Wrapper />
    </Reset>
  );
};

export default index;
