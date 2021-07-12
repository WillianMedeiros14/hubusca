import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import { useTheme } from 'styled-components';
import HeaderPages from '../../components/HeaderPages';
import { Button } from '../../components/Button';


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
import { PostDTO } from '../../dtos/postDTO';
import { api } from '../../services/api';


export default function NewPost(){
    const theme = useTheme();

    const [loading, setLoading] = useState(false);

    const { newPostStorage } = usePostStorage();

    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')


    function addNewPost(){
      
        if(title !== '' && content !== '') {
            const userIdPost = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            const data = {
                title,
                body: content,
                userId: userIdPost,
            }
            newPostStorage(data);
          
        }

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

                    onChangeText={setTitle}
               />

               <Title>Conteúdo</Title>
                <AreaText>
                    <InputContent
                        placeholder="Digite o conteúdo do post aqui..."
                        maxLength={220}
                        multiline
                        autoCorrect={false}

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
                    <Button title="Postar" onPress={addNewPost} />
                </ContainerButton>
           </Main>

           
        </Container>
    )
}