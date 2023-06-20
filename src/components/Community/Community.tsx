import styles from './Community.module.scss';
import {ReactComponent as PlayIcon} from '../../assets/icons/playButton.svg';

export const Community = () => {
    return (
        <section className={styles.community} id="community">
            <div className={styles.communityContainer}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>Let's hear about Kayla's success story</h2>
                    <p className={styles.description}>See how well Alivio works in a real customer’s life. </p>
                    <button className={styles.button}>Let’s get started</button>
                </div>
                <div className={styles.videoBlock}>
                    <div className={styles.iconWrapper}><PlayIcon className={styles.icon}/></div>
                </div>
            </div>
        </section>
    );
};