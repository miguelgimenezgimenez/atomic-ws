import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '#/Home'
import ItemsPage from '#/ItemsPage'
import ItemDetailPage from '#/ItemDetailPage'
import Modal from '~templates/Modal';


function App() {
    return (
        <div fallback={<div>Loading...</div>}>
            <Modal />
            <Router>
                <Route exact path={[ '/', '/home' ]} component={Home} />
                <Route exact path={'/items'} component={ItemsPage} />
                <Route path={`/items/:itemId`} component={ItemDetailPage} />
            </Router>
        </div>
    );
}

export default App;
