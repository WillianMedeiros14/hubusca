import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect, useRoute } from '@react-navigation/native';



import HeaderPages from '../../components/HeaderPages';
import { InputSearch } from '../../components/InputSearch';
import Post from '../../components/Post';
import ModalDeletePost from '../../components/ModalDeletePost';
import ModalConformationPost from '../../components/ModalConformationPost';

import { PostDTO } from '../../dtos/postDTO';
import { usePostStorage } from '../../hooks/post';

import EmptySvg from '../../assets/emptySvg.svg';

import {
    Container,
    ContainerInput,
    Main,
    PostList,
} from './styles'
import { api } from '../../services/api';

type Params = {
    userId: number
}

export default function PostUserIdName(){
    const route = useRoute();
    const { userId } = route.params as  Params;
    
    const {  users } = usePostStorage();

    const [openModal, setOpenModal] = useState(false);
   
    const [postsUserId, setPostsUserId] = useState<PostDTO[]>([]);
    const [nameUserId, setNameUserId] = useState(''); 
    const [itemDelete, setItemDelete] = useState<PostDTO>({} as PostDTO);

    const [searchText, setSearchText] = useState('')
    const [listPost, setListPost] = useState<PostDTO[]>([]);

    async function fetchApiPostId(){
        try {
            const responsePosts = await api.get(`/posts?userId=${userId}`);
            setPostsUserId(responsePosts.data);

            console.log(postsUserId.length);           

        } catch (error) {
            console.log(error);
        }finally{
            //setLoading(false);
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


    function deletePost(){
        setOpenModal(false)
        //removePostUser(itemDelete);
    }

    function handleCloseModal(){
        setOpenModal(false)
    }

    
    function handleRemovePost(item: PostDTO){
        setItemDelete(item);
        setOpenModal(true)
    }

   
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
                <PostList
                    data={listPost}
                    keyExtractor={(item) => String(item.id) }
                    renderItem={({ item }) => 
                        <Post 
                            data={item} 
                            clean={() => handleRemovePost(item)} 
                        />
                    }
                />
            </Main>
           

            <ModalDeletePost 
                visible={openModal} 
                onClose={handleCloseModal}
                removePost={deletePost}
            />

        </Container>
    )
}