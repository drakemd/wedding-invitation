import Wedding from '@/app/wedding/page';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

jest.mock('@dotlottie/react-player', () => ({
  DotLottiePlayer: jest.fn(() => <div>MockDotLottiePlayer</div>)
}));

describe('Wedding page', () => {
  test('renders without crashing', () => {
    render(<Wedding />);
    expect(screen.getByTestId('wedding')).toBeInTheDocument();
  });
});