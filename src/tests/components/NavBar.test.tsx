import NavBar from '../../components/NavBar';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

test('renders correctly', () => {
    render(<BrowserRouter><NavBar /></BrowserRouter>);
    const divElement = screen.getByPlaceholderText(/Search Artists/i);
    expect(divElement).toBeInTheDocument();
});
