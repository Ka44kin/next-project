import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps <HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    appearance: 'small' | 'medium' ;
    color: 'ghost' | 'red' | 'green' | 'gray' | 'primary' ;
    href?: string;
}