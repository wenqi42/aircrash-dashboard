import React from 'react';
import Map from '../../components/Map/index';
import DetailsDrawer from '@/components/DetailsDrawer';
import './index.scss'
const Main: React.FC = (() => {
  return (
    <div className="main-container">
      <Map id='map' />
      <DetailsDrawer />
    </div>
  );
});

export default Main; 