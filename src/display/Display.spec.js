import React from 'react'
import renderer from 'react-test-renderer'
import Display from './Display'
import { render } from 'react-testing-library';

describe('<Display />', () => {
    it('shoes the controls and display', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot()
    })
})