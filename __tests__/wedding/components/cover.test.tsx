import Cover from '@/app/wedding/components/cover';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Cover component', () => {
  test('renders without crashing', () => {
    render(<Cover />);
    expect(screen.getByTestId('cover')).toBeInTheDocument();
  });
});