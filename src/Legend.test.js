import React from 'react';
import {Legend} from './Legend';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const names = ["name1", "name2"]
    const colors = ["#c11", "#c22"]
    const tree = renderer
        .create(<Legend names={names} colors={colors} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
