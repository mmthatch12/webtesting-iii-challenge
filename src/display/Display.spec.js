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

    it('displays if gate is open/closed', () => {

      render(<Display />)
    })

    it('displays closed of the closed prop is true', () => {
      const closed = true;
      
      const { getByText } = render(<Display closed={closed} />)
      const closedText = getByText(/closed/i)

      expect(closedText).toBeTruthy()

    })

    it('displays open if the closed prop is true', () => {
      const closed = false;
      
      const { getByText } = render(<Display closed={closed} />)
      const closedText = getByText(/open/i)

      expect(closedText).toBeTruthy()

    })

    it('displays locked if the locked prop is true', () => {
      const locked = true;
      
      const { getByText } = render(<Display locked={locked} />)
      const lockedText = getByText(/locked/i)

      expect(lockedText).toBeTruthy()

    })

    it('displays unlocked if the locked prop is false', () => {
      const locked = false;
      
      const { getByText } = render(<Display locked={locked} />)
      const lockedText = getByText(/unlocked/i)

      expect(lockedText).toBeTruthy()

    })
  
  });