import React from 'react';
import Button from '@material-ui/core/Button';

import ItemsList from '~organisms/ItemsList';
import styles from './ItemsPage.module.scss';
import useItemsPage from './hooks/useItemsPage';
import Layout from '~templates/Layout';
import Navigation from '~organisms/Navigation/Navigation';

function ItemsPage() {
    const { addItem } = useItemsPage();
    return (
        <Layout footer={<Navigation/>} header="items" >
            <ItemsList />
            <div className={styles.button}>
                <Button onClick={addItem} variant="contained" color="primary">
                    Add item
                </Button>
            </div>
        </Layout>
    );
}
export default ItemsPage;
