import { ParagraphProps } from './Paragraph.props';
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({ appearance, children, ...props }: ParagraphProps): JSX.Element => {
    return  (<p
            className={cn(styles.p, {
                [styles.small]: appearance == 'small',                
                [styles.medium]: appearance == 'medium',                
                [styles.large]: appearance == 'large'
            })}
                {...props}
                >
                {children}
            </p>);
};