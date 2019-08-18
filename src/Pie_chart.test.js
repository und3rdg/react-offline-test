import React from 'react';
import Pie_chart from './Pie_chart';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const perc = [70, 30]
    const colors = ["#c11", "#c22"]
    const tree = renderer
        .create(<Pie_chart perc={perc} colors={colors} test={true} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
