import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';
import ArtistDetailPage from '../pages/ArtistDetailPage';
import PageNotFound from '../pages/404Page';
import NavBar from './NavBar';


const Routes = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/artist/:id" component={ArtistDetailPage} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </Router>
);

Routes.propTypes = {
    props: PropTypes.any,
};

export default Routes;
