import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ArtistDetailPage from '../../pages/ArtistDetailPage';

test('renders correctly', () => {    
    render(<BrowserRouter><ArtistDetailPage /></BrowserRouter> );
    const divElement = screen.getByText(/Blakey/i);
    expect(divElement).toBeInTheDocument();
});
