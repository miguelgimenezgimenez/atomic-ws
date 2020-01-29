import React from 'react';
import { Happy, SuperHappy, Sad, SuperSad } from '../../assets/icons';
import useThoughtsList from './hooks/useThoughtsList';
import ThoughtListItem from '../../components/ThoughtListItem';

import { HAPPY, SUPER_HAPPY, SAD, SUPER_SAD } from '../../constants';

const mappedIcons = {
    [HAPPY]: Happy,
    [SAD]: Sad,
    [SUPER_SAD]: SuperSad,
    [SUPER_HAPPY]: SuperHappy
};

function ThoughtsList(props) {
    const { thoughts } = useThoughtsList()
    return (
        <div>
            {thoughts.map((thought) => (
                <ThoughtListItem
                    key={thought.id}
                    id={thought.id}
                    icon={mappedIcons[thought.mood]}
                    text={thought.title}
                    detail={thought.date}
                />
            ))}
        </div>
    );
}

export default ThoughtsList;
