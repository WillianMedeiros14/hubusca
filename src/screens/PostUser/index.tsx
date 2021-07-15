import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import HeaderPages from '../../components/HeaderPages';
import { InputSearch } from '../../components/InputSearch';
import Post from '../../components/Post';
import ModalDeletePost from '../../components/ModalDeletePost';
import { Load } from '../../components/Load';

import { PostDTO } from '../../dtos/postDTO';
import { usePostStorage } from '../../hooks/post';

import EmptySvg from '../../assets/emptySvg.svg';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ContainerInput,
    Main,
    PostList,
    Empty,
    TextEnpty,
} from './styles'


export default function PostUser(){
    const { newPost, loadStoragePostPost, loadingSearchPostStorage, removePostUser, saveEnjoyPosts } = usePostStorage();
    
    const navigation = useNavigation();

    const [openModal, setOpenModal] = useState(false);
    const [itemDelete, setItemDelete] = useState<PostDTO>({} as PostDTO);
    const [searchText, setSearchText] = useState('')
    const [listPost, setListPost] = useState<PostDTO[]>([]);
    const [openKeyboard, setOpenkeyboard] = useState(false);

    function deletePost(){
        setOpenModal(false)
        removePostUser(itemDelete);
    }

    function handleCloseModal(){
        setOpenModal(false);
    }

    function handleRemovePost(item: PostDTO){
        setItemDelete(item);
        setOpenModal(true);
    }

    useEffect(() => {
        loadStoragePostPost();
    }, []);

    useFocusEffect(useCallback(() => {
        loadStoragePostPost();
    },[]));
    
    useEffect(() => {
        if (searchText === '') {
          setListPost(newPost);
        } else {
            setListPost(
            newPost.filter(
              (item) =>
                item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            )
          );
        }
    }, [searchText, newPost]);


    function handleSeachText(item: string){
        setSearchText(item);
    }

    function actionKeyboard(status: boolean){
        setOpenkeyboard(status);
    }

    function handleEnjoyPost(item: PostDTO){
        const data ={
            userId: item.userId,
            id: item.id,
            enjoy: true,
        }

        saveEnjoyPosts(data);
    }

    function pageInformationUser(userId: Number){
        navigation.navigate('InformationUser', { userId });
    }

    return (
        <Container>
           <HeaderPages title="Posts do Usuário" />
           
           <ContainerInput>
              <InputSearch actionKeyboard={actionKeyboard} search={handleSeachText} />
           </ContainerInput>

            {
                newPost.length === 0 ?
                    <Empty>
                        <EmptySvg
                            width={279}
                            height={218}
                        />

                        <TextEnpty>
                            Você ainda não fez nenhum {'\n'}
                            post ou excluiu todos!
                        </TextEnpty>
                    </Empty>
                :                
                <Main statusKeyboard={openKeyboard} >
                    {
                        loadingSearchPostStorage 
                        ? <Load /> :
                        <PostList
                            data={listPost}
                            keyExtractor={(item) => String(item.id) }
                            renderItem={({ item }) => 
                                <Post 
                                    data={item} 
                                    clean={() => handleRemovePost(item)}
                                    enjoyPost={() => handleEnjoyPost(item)}
                                    onPresUserInformation={() => pageInformationUser(item.userId)}
                                    active
                                />
                            }
                        />
                    }                    
                </Main>
            }

            <ModalDeletePost 
                visible={openModal} 
                onClose={handleCloseModal}
                removePost={deletePost}
            />

        </Container>
    )
}