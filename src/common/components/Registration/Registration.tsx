import {SubmitHandler, useForm} from 'react-hook-form';
import {validateEmail} from '../../validate/validateEmail';
import {validatePassword} from '../../validate/validatePassword';
import styles from './Registration.module.scss';
import {FC, useEffect, useRef} from 'react';

export const Registration: FC<RegistrationPropsType> = ({isPopupOpen, setIsPopupOpen}) => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        watch,
    } = useForm<Inputs>();

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current &&
                wrapperRef.current !== event.target &&
                !wrapperRef.current.contains(event.target as Node)) {
                setIsPopupOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [setIsPopupOpen]);

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div ref={wrapperRef} className={`${styles.registration} ${isPopupOpen ? styles.open : ''}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.title}>Registration</h2>

                <label className={styles.inputBlock}>
                    <span>Login:</span>
                    <input type="text" placeholder={'Your login'}
                           {...register('login', {required: 'This field is required'})}/>
                    {errors.login && <span className={styles.error}>{errors.login.message}</span>}
                </label>

                <label className={styles.inputBlock}>
                    <span>Email:</span>
                    <input type="text" placeholder={'Your email'}
                           {...register('email', {
                               required: 'This field is required',
                               validate: value => validateEmail(value),
                           })}/>
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </label>

                <label className={styles.inputBlock}>
                    <span>Password:</span>
                    <input type="password" placeholder={'Your password'}
                           {...register('password', {
                               required: 'This field is required',
                               validate: value => validatePassword(value),
                           })}/>
                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                </label>

                <label className={styles.inputBlock}>
                    <span>Confirm password:</span>
                    <input type="password" placeholder={'Confirm your password'}
                           {...register('confirmPassword', {
                               required: 'This field is required',
                               validate: value =>
                                   validatePassword(value) ||
                                   value === watch('password') ||
                                   'Your passwords do no match',
                           })}/>
                    {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
                </label>

                <button className={styles.button} type={'submit'}>Sign Up</button>
            </form>
        </div>
    );
};

type Inputs = {
    login: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type RegistrationPropsType = {
    isPopupOpen: boolean;
    setIsPopupOpen: (isPopupOpen: boolean) => void;
}