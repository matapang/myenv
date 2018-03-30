import React from 'react';

import renderer from 'react-test-renderer';
import Table from './index';


it('Table should match snapshot', () => {  
    const component = renderer.create(
      <Table rows={[{name:'Michael',  lastName:'Jordan'}]} columns={[{name:'name', headerName:'First Name'}, {name:'lastName', headerName:'Last Name'}]} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
});
