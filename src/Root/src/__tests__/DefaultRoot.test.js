import React from 'react';
import { shallow } from 'enzyme';

import DefaultRoot from '../components/ecosystems/DefaultRoot';

describe('DefaultRoot', () => {
  it('renders', () => {
    const tree = shallow(<DefaultRoot />);
    expect(tree).toMatchSnapshot();
  });
});
