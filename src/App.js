import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Modal from '~templates/Modal';

const Home = lazy(() => import('#/Home'));
const ItemDetailPage = lazy(() => import('#/ItemDetailPage'));
const ItemsPage = lazy(() => import('#/ItemsPage'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Modal />
            <Router>
                <Route exact path={[ '/', '/home' ]} component={Home} />
                <Route exact path={'/items'} component={ItemsPage} />
                <Route path={`/items/:itemId`} component={ItemDetailPage} />
            </Router>
        </Suspense>
    );
}

export default App;
