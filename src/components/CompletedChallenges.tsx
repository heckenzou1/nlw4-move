import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenge() {
    return ( 
        <div className={styles.containerCompletedChallenge}>
            <span>Desafios concluídos</span>
            <span>5</span>
        </div>
     )
}