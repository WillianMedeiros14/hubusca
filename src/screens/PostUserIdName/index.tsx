import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import HeaderPages from '../../components/HeaderPages';
import { InputSearch } from '../../components/InputSearch';
import Post from '../../components/Post';

import { PostDTO } from '../../dtos/postDTO';
import { usePostStorage } from '../../hooks/post';

import {
    Container,
    ContainerInput,
    Main,
    PostList,
    ContainerLoading
} from './styles'
import { api } from '../../services/api';
import { Load } from '../../components/Load';

type Params = {
    userId: number
}

export default function PostUserIdName(){
    const route = useRoute();
    const { userId } = route.params as  Params;
    
    const {  users } = usePostStorage();
   
    const [postsUserId, setPostsUserId] = useState<PostDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [nameUserId, setNameUserId] = useState(''); 

    const [searchText, setSearchText] = useState('')
    const [listPost, setListPost] = useState<PostDTO[]>([]);

    async function fetchApiPostId(){
       
        try {
            const responsePosts = await api.get(`/posts?userId=${userId}`);
            setPostsUserId(responsePosts.data);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApiPostId();
        
        users.map((nameId) => {
            if(nameId.id === userId){
                setNameUserId(nameId.name);
            }
        })

    }, [])
    
    useEffect(() => {
      
        setListPost(postsUserId);
        if (searchText === '') {
          setListPost(postsUserId);
        } else {
            setListPost(
                postsUserId.filter(
              (item) =>
                item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            )
          );
        }
       
    }, [searchText, postsUserId]);


    function handleSeachText(item: string){
        setSearchText(item)
    }

    return (
        <Container>
           <HeaderPages title={nameUserId} />
           
           <ContainerInput>
              <InputSearch search={handleSeachText} />
           </ContainerInput>


            <Main>
                {
                    loading ?
                    <ContainerLoading>
                        <Load /> 
                    </ContainerLoading>
                    :
                    <PostList
                        data={listPost}
                        keyExtractor={(item) => String(item.id) }
                        renderItem={({ item }) => 
                            <Post 
                                data={item} 
                                active
                            />
                        }
                    />
                }
            </Main>
        </Container>
    )
}