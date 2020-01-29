import { HAPPY, SUPER_HAPPY, SAD, SUPER_SAD } from '../constants';

const INITIAL_STATE = {
    thoughtsList: [
        {
            id: 1,
            title: 'I need to think more what the other person is feeling',
            date: 'December 9, 2018 4:22pm',
            description: 'Yes, bill was very rude to me',
            mood: SAD
        },
        {
            id: 2,
            title: 'I need to think more what the other person is feeling',
            date: 'December 9, 2018 4:22pm',
            description: 'Yes, bill was very rude to me',
            mood: SUPER_SAD
        },
        {
            id: 3,
            title: 'I need to think more what the other person is feeling',
            date: 'December 9, 2018 4:22pm',
            description: 'Yes, bill was very rude to me',
            mood: SUPER_HAPPY
        }
    ],
    currentThought: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECT_THOUGHT':
            return { ...state, currentThought: action.thought };

        default:
            return state;
    }
};

export const thoughtsSelector = (state) => state.thoughts.thoughtsList;

export const currentThoughtSelector = (state) => state.thoughts.currentThought;
