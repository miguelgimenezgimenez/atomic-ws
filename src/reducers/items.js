import {  SUPER_HAPPY, SAD, SUPER_SAD, SET_ITEM } from '../constants';

const INITIAL_STATE = {
    itemsList: [
        {
            id: "1",
            title: 'item 1',
            date: 'December 9, 2018 4:22pm',
            text: 'text 1',
            icon: SAD
        },
        {
            id: "2",
            title: 'item 2',
            date: 'December 9, 2018 4:22pm',
            text: 'text 2',
            icon: SUPER_SAD
        },
        {
            id: "3",
            title: 'item 3',
            date: 'December 9, 2018 4:22pm',
            text: 'text 3',
            icon: SUPER_HAPPY
        }
    ],
    currentItem: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ITEM:
            const currentItem = state.itemsList.find((item) => item.id === action.itemId);
            return { ...state, currentItem };

        default:
            return state;
    }
};

export const itemsSelector = (state) => state.items.itemsList;

export const currentItemSelector = (state) => state.items.currentItem;
