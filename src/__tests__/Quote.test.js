import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quote';

describe('Quote component test', () => {
  test('should renders the corrent quote', () => {
    render(<Quote />);
    const text = screen.getByText(/Mathematics is about numbers,/i);
    expect(text).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <Quote />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
