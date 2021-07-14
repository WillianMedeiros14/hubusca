import React from 'react';
import { ModalProps } from 'react-native';

import LottieView from 'lottie-react-native';

import ConfirmationPost from '../../assets/confirmationPost.json';

import {
    Container,
    Main,
    Background,
    Header,
    ButtonClose,
    TitleClose,
    Text,
} from './styles'

type Props = ModalProps & {
    visible: boolean;
    onClose: () => void;
}

export default function ModalConformationPost({
    visible, 
    onClose, 
    ...rest
} : Props){
   
    return (
        <Container
            transparent
            animationType="fade"
            statusBarTranslucent
            {...rest}
            visible={visible}
        >
           <Main>
               <Background>
                    <Header>
                        <ButtonClose onPress={onClose}>
                            <TitleClose>X</TitleClose>
                        </ButtonClose>
                    </Header>

                    <LottieView
                        source={ConfirmationPost}
                        style={{ height: 200}}
                        autoPlay
                    />  

                    <Text>
                        O post foi criado {`\n`}
                        com sucesso
                    </Text>
                </Background>
           </Main>
        </Container>
    )
}