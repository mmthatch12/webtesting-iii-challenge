import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'


import Display from './Display'



describe('<Display />', () => {
    // 2. write this test
  
    it('matches snapshot', () => {
      const tree = renderer.create(<Display />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();

      
    });

    it('defaults to open', () => {
      const unlo = render(<Display />)

      unlo.getByText(/open/i)
    })

    it('defaults to unlocked', () => {
      const unlo = render(<Display />)

      unlo.getByText(/unlocked/i)
    })
  
  });