import React, { Children } from 'react';

import styles from './button.module.css'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> { }

const Button: React.FC<ButtonProps> = ({ ...props }) => {
    return <button className={styles.button}>{props.children}</button>;
};

export default Button;