import React from 'react';
import { Happy, SuperHappy, Sad, SuperSad } from '~/assets/icons';
import useItemsList from './hooks/useItemsList';
import ListItem from '~organisms/ListItem';

import { HAPPY, SUPER_HAPPY, SAD, SUPER_SAD } from '~/constants';

const mappedIcons = {
    [HAPPY]: Happy,
    [SAD]: Sad,
    [SUPER_SAD]: SuperSad,
    [SUPER_HAPPY]: SuperHappy
};

function ItemsList(props) {
    const { items } = useItemsList()
    return (
        <div>
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    id={item.id}
                    icon={mappedIcons[item.mood]}
                    text={item.title}
                    detail={item.date}
                />
            ))}
        </div>
    );
}

export default ItemsList;
