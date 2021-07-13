import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { usePostStorage } from '../../hooks/post';
import { Load } from '../Load';


import {
    Container,
    Title
} from './styles';


type Props = RectButtonProps & {
    title: string;
    enabledButton?: boolean;
}

export function Button({title, enabledButton, ...rest}: Props){

    return (
        <Container enabled={!enabledButton} {...rest}>
            {
                enabledButton
                ? <Load /> 
                : <Title>{title}</Title>
            }
        </Container>
    );
}