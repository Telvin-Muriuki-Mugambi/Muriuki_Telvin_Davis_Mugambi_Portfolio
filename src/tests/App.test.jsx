import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import App from '../App';

describe('App Component', () => {
  it('mounts without crashing and displays initial elements', () => {
    render(<App />);

    // Checks that at least one heading (h1-h6) renders on the screen
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();

    // Optional: Check for specific text rendered by your App.jsx
    // expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
  });
});
