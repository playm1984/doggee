import React, { Children } from 'react';

import './button.css'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> { }

const Button: React.FC<ButtonProps> = ({ ...props }) => {
    return <button>{props.children}</button>;
};

export default Button;