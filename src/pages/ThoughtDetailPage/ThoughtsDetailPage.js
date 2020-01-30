import React from 'react';
import useThoughtsDetailPage from './hooks/useThoughtsDetailPage';
import TextWithDetail from '../../components/TextWithDetail';

function ThoughtsDetailPage({ match }) {
    const { thoughtId } = match.params;
    const { currentThought } = useThoughtsDetailPage(thoughtId);
    return (
        <div>
            <TextWithDetail text={currentThought.title} detail={currentThought.description} />
        </div>
    );
}
export default ThoughtsDetailPage;
