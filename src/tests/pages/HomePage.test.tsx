import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../../pages/HomePage';

describe('Home Page', () => {      
    it('renders correctly', async() => {
        render(
            <BrowserRouter>
                <HomePage/>
            </BrowserRouter>
        );
        const divElement = screen.getByText(/Drake/i);
        expect(divElement).toBeInTheDocument();
    })
});
