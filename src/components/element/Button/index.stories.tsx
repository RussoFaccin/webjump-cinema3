import React from 'react';
import Button from './';
import { Props } from './types';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        fill: {
            control: 'color'
        }
    }
}

const Template = (args: Props) => <Button {...args}>{args.children}</Button>

export const Default = Template.bind({});