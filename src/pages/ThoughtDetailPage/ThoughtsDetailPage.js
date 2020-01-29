import React from 'react';
import useThoughtsDetailPage from './hooks/useThoughtsDetailPage'

function ThoughtsDetailPage({match}) {
    const { thoughtId } = match.params
    const {currentThought } = useThoughtsDetailPage(thoughtId)
    console.log(currentThought)
    return (
        <div>
{          JSON.stringify(currentThought)}
        </div>
    );
}
export default ThoughtsDetailPage;
