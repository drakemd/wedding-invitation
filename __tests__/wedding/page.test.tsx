import Wedding from '@/app/wedding/page';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Wedding page', () => {
  test('renders without crashing', () => {
    render(<Wedding />);
    expect(screen.getByTestId('wedding')).toBeInTheDocument();
  });
});