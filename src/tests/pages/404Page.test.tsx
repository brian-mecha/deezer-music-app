import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from '../../pages/404Page';

test('renders corretly', () => {
    render(<Router><PageNotFound/></Router>);
    const divElement = screen.getByText(/Uh oh! I think you’re lost./i);
    expect(divElement).toBeInTheDocument();
});
