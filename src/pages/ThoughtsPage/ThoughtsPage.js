import React from 'react';
import ThoughtsList from '&/ThoughtsList';
import Button from '@material-ui/core/Button';
import styles from './ThoughtsPage.module.scss';
import useThoughtsPage from './hooks/useThoughtsPage';

function ThoughtsPage() {
    const { addThought } = useThoughtsPage();
    return (
        <div>
            <ThoughtsList />
            <div className={styles.button}>
                <Button onClick={addThought} variant="contained" color="primary">
                    Add thought
                </Button>
            </div>
        </div>
    );
}
export default ThoughtsPage;
