import styles from './Pricing.module.scss';
import photo from '../../assets/images/pricingPhoto.jpg';
import avatar from '../../assets/images/avatar.png';

export const Pricing = () => {
    return (
        <section className={styles.pricing} id="pricing">
            <div className={styles.pricingContainer}>
                <img className={styles.pricingPhoto} src={photo} alt=""/>
                <div className={styles.pricingText}>
                    <div className={styles.designation}>Our product</div>
                    <h2 className={styles.title}>You tell us your stress, We make your diary</h2>
                    <p className={styles.description}>Everyone experiences it, and in different ways.<br/>
                        Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
                    <button className={styles.button}>Find Your Way</button>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Customized For</h3>
                    <hr className={styles.line}/>
                    <img className={styles.avatar} src={avatar} alt=""/>
                    <span className={styles.name}>Mikayla</span>
                    <h4 className={styles.contentsTitle}>Your custom contents</h4>
                    <ul className={styles.contents}>
                        <li>Understand Your Stress</li>
                        <li>Anger Management</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};