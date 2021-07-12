import React from 'react';
import { ModalProps } from 'react-native';

import CleanSvg from '../../assets/cleanSvg.svg';
import { ButtonModalDelete } from '../../components/ButtonModalDelete';
import { PostDTO } from '../../dtos/postDTO';
import { usePostStorage } from '../../hooks/post';

import {
    Container,
    Main,
    Background,
    Header,
    ButtonClose,
    TitleClose,
    Text,
    ContainerButton
} from './styles'

type Props = ModalProps & {
    visible: boolean;
    onClose: () => void;
    removePost: () => void;
}

export default function ModalDeletePost({
    visible, 
    onClose, 
    removePost,
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
                    <CleanSvg
                        width={200}
                        height={150}
                    />

                    <Text>
                        Você tem certeza que deseja {`\n`}
                        excluir esse post?
                    </Text>

                    <ContainerButton >
                        <ButtonModalDelete 
                            title="Sim" 
                            onPress={removePost}
                        />
                        <ButtonModalDelete 
                            active 
                            title="Não" 
                            onPress={onClose}
                        />
                    </ContainerButton>
                </Background>
           </Main>
        </Container>
    )
}