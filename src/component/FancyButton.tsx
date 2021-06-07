import * as React from 'react';
import { Button } from 'antd';

export interface Props {
    /** The user's name */
    name: string;
    /** Should the name be rendered in bold */
    type?: string;
}

const FancyButton: React.FC<Props> = (props) => {
    return (
        <Button type="primary">{props.name}</Button>
    )
}

export default FancyButton;