import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


import HeaderPages from '../../components/HeaderPages';
import Post from '../../components/Post';
import { Load } from '../../components/Load';

import { api } from '../../services/api';
import { PostDTO } from '../../dtos/postDTO';
import { UserDTO } from '../../dtos/userDTO';

import { usePostStorage } from '../../hooks/post';

import {
    Container,
    Main,
    PostList
} from './styles'

interface PropsPostUser {
    post: PostDTO;
    title: string;
}


export default function Home(){

    const { fetchApi, loading, posts, newPost } = usePostStorage();

    const navivigation = useNavigation();

    useEffect(() => {
        fetchApi();
    }, []);

   
    function pageInformationUser(){
        navivigation.navigate('InformationUser');
    }
    
  
    return (
        <Container>
           <HeaderPages title="Posts" />
           
           <Main>
             
                { loading ? <Load /> :
                    <PostList
                        data={posts}
                        keyExtractor={(item) => String(item.id) }
                        renderItem={({ item }) => 
                            <Post data={item} onPress={pageInformationUser}  active/>
                        }
                       
                    />
                }
           </Main>
        </Container>
    )
}