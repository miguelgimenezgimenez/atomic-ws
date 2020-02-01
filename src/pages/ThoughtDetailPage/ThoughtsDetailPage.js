import React from 'react';

import useThoughtsDetailPage from './hooks/useThoughtsDetailPage';
import TextWithDetail from '@/TextWithDetail';
import {EVIDENCE_QUESTION} from '~/constants'
function ThoughtsDetailPage({ match }) {
    const { thoughtId } = match.params;
    const { currentThought } = useThoughtsDetailPage(thoughtId);
    return (
        <div>
            <div>
                <TextWithDetail text={EVIDENCE_QUESTION} detail={currentThought.evidence} />
            </div>
        </div>
    );
}
export default ThoughtsDetailPage;
