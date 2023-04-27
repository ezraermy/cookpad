import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

describe('Layout component tests', () => {
  test('Layout should be rendered correctly', () => {
    render(<Layout />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  test('Layout should render the <Navbar /> as its child', async () => {
    render(<Layout />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
  });
});
