
import { ReactNode } from 'react';
import './styles.css';

interface IProps {
    children: ReactNode;
    className?: string;
}

export function Popup(props: IProps) {

    const { children, className } = props;

    return (
        <div className={`popup ${className}`}>
            {children}
        </div>
    );
}