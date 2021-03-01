import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

describe('Home component test', () => {
  test('should renders welcome text', () => {
    render(<Home />);
    const text = screen.getByText('Welcome to our page!');
    expect(text).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <Home />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
