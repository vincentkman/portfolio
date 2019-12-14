import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carousel.scss';

const items = [
    {
      src: require('../../images/me.jpg'),
      altText: 'Slide 1',
    },
    {
      src: require('../../images/hk.jpg'),
      altText: 'Slide 2',
    },
    {
      src: require('../../images/hollywood.jpg'),
      altText: 'Slide 3',
    }
  ];
  
  const Example = () => <UncontrolledCarousel  items={items} />;
  
  export default Example;