import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';
import Modal from '&/Modal';

const Home = lazy(() => import('#/Home'));
const ThoughtDetailPage = lazy(() => import('#/ThoughtDetailPage'));
const ThoughtsPage = lazy(() => import('#/ThoughtsPage'));

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
        <Suspense fallback={<div>Loading...</div>}>
            <Modal />
            <Router>
                <RouteWithLayout exact path={[ '/', '/home' ]} Component={Home} />
                <RouteWithLayout exact path={'/thoughts'} Component={ThoughtsPage} />
                <Route path={`/thoughts/:thoughtId`} component={ThoughtDetailPage} />
            </Router>
        </Suspense>
    );
}

export default App;
