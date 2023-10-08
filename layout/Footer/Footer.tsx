import { FooterProps } from './Footer.props';
import styles from "./Footer.module.css";
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
    return  (
        <footer className={cn(className, styles.footer)} { ...props}>
            <div>
                OwlTop 2020 - {format(new Date, 'yyyy')} Все права защищены
            </div>
            <a href="#" target='_blank'>Пользовательское соглашение</a>
            <a href="#" target='_blank'>Политика конфиденциальности</a>
        </footer>
    );
};
{/* <p className={styles.one}>OwlTop 2020-2023 Все права защищены</p>
            <p className={styles.two}>Пользовательское соглашение</p>
            <p className={styles.three}>Политика конфиденциальности</p> */}