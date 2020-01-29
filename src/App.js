import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';
import ThoughtsPage from './pages/ThoughtsPage';

function App() {
    return (
        <Router>
            <Route
                exact
                path={[ '/', '/thoughts' ]}
                render={(props) => (
                    <Layout>
                        <ThoughtsPage />
                    </Layout>
                )}
            />
        </Router>
    );
}

export default App;
