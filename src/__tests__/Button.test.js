import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';

describe('Button component test', () => {
  test("should renders '5' text", () => {
    render(<Button buttonName="5" clickHandler={() => ''} />);
    const text = screen.getByText('5');
    expect(text).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <Button buttonName="5" clickHandler={() => ''} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
