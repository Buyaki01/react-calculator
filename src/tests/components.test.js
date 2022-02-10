import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CalculatorContainer from '../components/CalculatorContainer';
import Calculator from '../components/pages/Calculator';
import Quote from '../components/pages/Quote';

describe('Test UI of the webpage', () => {
  it('Displays the Homepage', () => {
    const { asFragment } = render(
      <CalculatorContainer />,
      { wrapper: MemoryRouter },
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Displays the Calculator page', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Displays the details page', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
