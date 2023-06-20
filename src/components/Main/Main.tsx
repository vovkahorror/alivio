import styles from './Main.module.scss';

export const Main = () => {
    return (
        <section className={styles.main} id="main">
            <div className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    <h2 className={styles.title}>Be aware, Manage well.</h2>
                    <p className={styles.description}>
                        Everyone experiences stress in different ways.<br/>
                        Let Alivio guide you, in a personalized journal experience, to overcome your stress.
                    </p>
                    <button className={styles.button}>Find Your Way</button>
                </div>
            </div>
        </section>
    );
};