import React from 'react';
import Layout from '~templates/Layout';
import Navigation from '~organisms/Navigation';

function Home() {
    return (
        <Layout header="HOME" footer={<Navigation/>}>
            HOME
        </Layout>
    );
}
export default Home;
