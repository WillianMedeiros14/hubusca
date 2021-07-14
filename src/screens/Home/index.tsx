import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import HeaderPages from '../../components/HeaderPages';
import Post from '../../components/Post';
import { Load } from '../../components/Load';

import { PostDTO } from '../../dtos/postDTO';

import { usePostStorage } from '../../hooks/post';

import {
    Container,
    Main,
    PostList,
    ContainerLoading
} from './styles'

interface PropsPostUser {
    post: PostDTO;
    title: string;
}


export default function Home(){
    const navivigation = useNavigation();

    const { fetchApi, loadingSearchDadosApi, posts, saveEnjoyPosts } = usePostStorage();

    useEffect(() => {
        fetchApi();
    }, []);
   
    function pageInformationUser(userId: Number){
        navivigation.navigate('InformationUser', { userId });
    }

    function handleEnjoyPost(item: PostDTO){
        const data ={
            userId: item.userId,
            id: item.id,
            enjoy: true,
        }

        saveEnjoyPosts(data);
    }
    
    return (
        <Container>
           <HeaderPages title="Posts" />
           
           <Main>
                { 
                    loadingSearchDadosApi ? 
                        <ContainerLoading>
                            <Load /> 
                        </ContainerLoading>
                    :
                    <PostList
                        data={posts}
                        keyExtractor={(item) => String(item.id) }
                        renderItem={({ item }) => 
                            <Post 
                                data={item} 
                                onPresUserInformation={() => pageInformationUser(item.userId)}
                                enjoyPost={() => handleEnjoyPost(item)}
                                active
                            />
                        }
                       
                    />
                }
           </Main>
        </Container>
    )
}