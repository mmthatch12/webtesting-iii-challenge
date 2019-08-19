import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"

import Controls from './Controls'



describe('<Controls />', () => {
    // 2. write this test
  
    it('matches snapshot', () => {
      const tree = renderer.create(<Controls />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('defaults to unlocked and open', () => {
        const unlo = render(<Controls />)

        unlo.getByText(/open/i)
    })
  
  });

  