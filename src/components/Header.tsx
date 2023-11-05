import styles from './Header.module.css';


export function Header() {
    return(
        <header className={styles.header}> 
            <h1>Devs Feed</h1>
        </header>
    );
}