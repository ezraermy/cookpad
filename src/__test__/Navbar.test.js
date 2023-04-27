import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders the component without errors', () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });
});
