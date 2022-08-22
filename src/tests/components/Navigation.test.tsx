
import { render, screen } from '@testing-library/react';
import Navigation from '../../components/Navigation';

const prevPage = jest.fn();
const nextPage = jest.fn();

test('renders corretly', () => {
    render(<Navigation pageCount={2} currentPage={1} prevPage={prevPage} nextPage={nextPage} />);
    const divElement = screen.getByText(/Showing/i);
    const nextElement = screen.getByText(/next/i);
    const prevElement = screen.getByText(/previous/i);

    expect(divElement).toBeInTheDocument();
    expect(nextElement).toBeInTheDocument();
    expect(prevElement).toBeInTheDocument();
});
