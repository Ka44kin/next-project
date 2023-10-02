import { TagProps } from './Tag.props';
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({ appearance, children, color, href, ...props }: TagProps): JSX.Element => {
    return  (<div
            className={cn(styles.tag, {
                [styles.small]: appearance == 'small',                
                [styles.medium]: appearance == 'medium',
                [styles.ghost]: color == 'ghost',
                [styles.gray]: color == 'gray',
                [styles.green]: color == 'green',
                [styles.red]: color == 'red',
                [styles.primary]: color == 'primary'

            })}
                {...props}
                >
                    {href
                        ? <a href={href}>{children}</a>
                        : <>{children}</>}
            </div>);
};