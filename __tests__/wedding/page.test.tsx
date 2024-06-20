import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../../app/wedding/page';

describe('Home component', () => {
  test('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});