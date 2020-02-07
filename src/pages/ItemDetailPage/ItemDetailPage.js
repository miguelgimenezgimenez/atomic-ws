import React from 'react';
import useItemDetailPage from './hooks/useItemDetailPage';
import TextWithDetail from '~molecules/TextWithDetail';

import { TEXT } from '~/constants';
import Layout from '~templates/Layout';

function ItemDetailPage({ match }) {
    const { itemId } = match.params;
    const { currentItem } = useItemDetailPage(itemId);
    return (
        <Layout>
            <TextWithDetail text={currentItem.title} detail={currentItem.date} />
            <div>
                <TextWithDetail text={TEXT} detail={currentItem.text} />
            </div>
        </Layout>
    );
}
export default ItemDetailPage;
