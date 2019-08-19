import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Dashboard from './Dashboard'



describe('<Dashboard />', () => {
    // 2. write this test
  
    it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('buttons text changes to reflect state of door', () => {
        const { getByText, queryByText } = render(<Dashboard />)

        expect(queryByText(/open gate/i)).toBeFalsy()

        const button = getByText(/close Gate/i)

        fireEvent.click(button)
        

        expect(queryByText(/open gate/i)).toBeTruthy()
    })
  
  });