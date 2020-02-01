import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';
import ThoughtsPage from '#/ThoughtsPage';
import Home from '#/Home';
import ThoughtDetailPage from '#/ThoughtDetailPage';
import Modal from '&/Modal';

function RouteWithLayout({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(routerProps) => (
                <Layout>
                    <Component {...routerProps} />
                </Layout>
            )}
        />
    );
}

function App() {
    return (
        <>
            <Modal/>
            <Router>
                <RouteWithLayout exact path={['/','/home']} Component={Home} />
                <RouteWithLayout exact path={'/thoughts'} Component={ThoughtsPage} />
                <Route path={`/thoughts/:thoughtId`} component={ThoughtDetailPage}/>
            </Router>
        </>
    );
}

export default App;
