
import App from '../App';
import { render, screen } from '@testing-library/react';

test('renders corretly', () => {
    render(<App />);
    const divElement = screen.getByText(/deezer/i);
    expect(divElement).toBeInTheDocument();

    const headerElement = screen.getByText(/top artists/i);
    expect(headerElement).toBeInTheDocument();
});
