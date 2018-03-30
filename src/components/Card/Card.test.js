import React from 'react';

import renderer from 'react-test-renderer';
import Card from './index';


it('Card should match snapshot', () => {  
    const component = renderer.create(
      <Card>I am a child of this Card</Card>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
});


it('Card append passed class name with class name of bg-main pt-elevation-2 ', () => {  
  const component = renderer.create(
    <Card className="d-flex" />,
  );
  let tree = component.toJSON();  
  expect(tree.props.className).toEqual("pt-card pt-elevation-0 bg-main pt-elevation-2 d-flex")
});