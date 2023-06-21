import styles from './Solutions.module.scss';
import {steps} from './steps';
import {Step} from './Step/Step';
import {v1} from 'uuid';

export const Solutions = () => {
    return (
        <section className={styles.solutions} id="solutions">
            <div className={styles.solutionContainer}>
                <div className={styles.designation}>How it works</div>
                <div className={styles.introduction}>
                    <h2 className={styles.title}>Understand & Release the stress in 3 steps</h2>
                    <p className={styles.description}>Alivio offers as many journals it takes, tackling different areas
                        such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help
                        you become aware of your emotions, and guide you in how to manage stress.</p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, index) => {
                        return <Step key={v1()}
                                     number={(index + 1).toString().padStart(2, '0')}
                                     title={step.title}
                                     description={step.description}
                                     secondParagraph={step.secondParagraph}
                                     image={step.image}/>;
                    })}
                </div>
            </div>
        </section>
    );
};