import React from 'react';
import ThoughtsList from '../../containers/ThoughtsList';
import Button from '@material-ui/core/Button';
import styles from './ThoughtsPage.module.css'

function ThoughtsPage() {
    return (
        <div>
            <ThoughtsList />
            <div className={styles.button} >
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
        </div>
    );
}
export default ThoughtsPage;
