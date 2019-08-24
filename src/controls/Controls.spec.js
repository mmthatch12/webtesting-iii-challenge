import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'



import Controls from './Controls'


beforeEach(cleanup)

describe('<Controls />', () => {

    it('provides button', () => {
        render(<button></button>)
    })




  
    it('matches snapshot', () => {
      const tree = renderer.create(<Controls />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    

    it('closed toggle button is disabled if gate is locked', () => {
        const locked = true;

        const { getByText } = render(<Controls locked={locked} />)

        const toggleB = getByText(/close gate/i)

        expect(toggleB).toBeDisabled()


    })

    it('locked toggle button is disabled if gate is open', () => {
        const closed = false;

        const { getByText } = render(<Controls closed={closed} />)

        const toggleB = getByText(/lock gate/i)

        expect(toggleB).toBeDisabled()


    })

  });

  