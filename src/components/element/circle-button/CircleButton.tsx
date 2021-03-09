import React from 'react';
import { JsxElement } from 'typescript';
import { BaseButton } from './styles';

interface CircleButtonProps {
    children: React.ReactNode,
    text: string
}

export const CircleButton = ({children, text}: CircleButtonProps) => {
    return (
        <BaseButton>
            {children}
            <span className="srOnly">{text}</span>
        </BaseButton>
    );
}
