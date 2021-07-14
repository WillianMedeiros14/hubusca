import React, { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import HeaderPages from '../../components/HeaderPages';
import { Button } from '../../components/Button';
import ModalConformationPost from '../../components/ModalConformationPost';

import { usePostStorage } from '../../hooks/post';

import {
    Container,
    Main,
    Title,
    AreaText,
    Input,
    InputContent,
    ContainerButton,
    ViewWarning,
    Warning
} from './styles'


export default function NewPost(){
    const theme = useTheme();
    const navigation = useNavigation();
  
    const { newPostStorage, loadingPostCrate } = usePostStorage();

    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')

    const [openModalConfirmationPost, setOpenModalConfirmationPost] = useState(false);

    function addNewPost(){
        if(title !== '' && content !== '') {
            const userIdPost = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            const data = {
                title,
                body: content,
                userId: userIdPost,
            }
            newPostStorage(data);
            if(loadingPostCrate === false) {
                setOpenModalConfirmationPost(true);
            }
        }
    }
    
    function handleCloseModalConfirmationPost(){
        setOpenModalConfirmationPost(false);
        setTitle('');
        setContent('');
        navigation.navigate("PostUser");
    }


    return (
        <Container>
           <HeaderPages title="Novo post" />
           
           <Main>
               <Title>Titulo</Title>
               <Input
                    placeholder="Digite o título do post"
                    placeholderTextColor={theme.colors.user}
                    multiline
                    value={title}
                    onChangeText={setTitle}
               />

               <Title>Conteúdo</Title>
                <AreaText>
                    <InputContent
                        placeholder="Digite o conteúdo do post aqui..."
                        maxLength={220}
                        multiline
                        autoCorrect={false}
                        value={content}
                        onChangeText={setContent}

                    />
               </AreaText>

               <ViewWarning>
                    {
                       ( title === '' || content === '') &&
                            <Warning>Os campos não podem ser vazio</Warning>
                    }
               </ViewWarning>

                <ContainerButton>  
                    <Button title="Postar" enabledButton={openModalConfirmationPost} onPress={addNewPost} />  
                </ContainerButton>
           </Main>

           <ModalConformationPost
                visible={openModalConfirmationPost} 
                onClose={handleCloseModalConfirmationPost}
            />

        </Container>
    )
}