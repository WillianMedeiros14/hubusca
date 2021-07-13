import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Title
} from './styles';


type Props = TouchableOpacityProps & {
    title: string;
    active?: boolean;
}

export function ButtonModalDelete({title, active, ...rest}: Props){

    return (
        <Container 
            active={active} 
            activeOpacity={.7}
            {...rest}
        >
            <Title active={active}>{title}</Title>
        </Container>
    );
}