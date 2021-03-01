import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';

describe('Calculator component test', () => {
  test("should renders 'Let's do some math!' text", () => {
    render(<Calculator />);
    const text = screen.getByText('Let\'s do some math!');
    expect(text).toBeInTheDocument();
  });

  test("should renders 'Let's do some math!' text", () => {
    render(<Calculator />);
    const node = screen.getByRole('calculator');
    expect(node).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <Calculator />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
