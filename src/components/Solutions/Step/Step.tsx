import {FC} from 'react';
import styles from './Step.module.scss';

export const Step: FC<StepPropsType> = ({number, title, description, secondParagraph, image}) => {
    return (
        <div className={styles.step}>
            <div className={styles.titleBlock}>
                <span className={styles.number}>{number}</span>
                <span className={styles.title} data-title={title}>{title}</span>
            </div>
            <p className={styles.description} data-description={description}>
                {description}<br/>
                {secondParagraph ? secondParagraph : null}
            </p>
            <img src={image} alt="illustration" className={styles.image}/>
        </div>
    );
};

type StepPropsType = {
    number: string;
    title: string;
    description: string;
    secondParagraph?: string;
    image: string;
};