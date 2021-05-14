import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you Lookking for Movie? or an actor"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
