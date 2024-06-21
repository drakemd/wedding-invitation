
import Home from '@/app/page';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

jest.mock('@dotlottie/react-player', () => ({
    DotLottiePlayer: jest.fn(() => <div>MockDotLottiePlayer</div>)
  }));

describe('Home page', () => {
  test('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});