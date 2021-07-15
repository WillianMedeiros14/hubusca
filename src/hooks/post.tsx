import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';
import { PostDTO } from '../dtos/postDTO';
import { UserDTO } from '../dtos/userDTO';
import { EnjoyPostDTO } from '../dtos/enjoyPostDTO';

type PostContextData = {
    posts: PostDTO[];
    users: UserDTO[];
    fetchApi: () => Promise<void>;

    loadingSearchDadosApi: boolean;
    loadingPostCrate: boolean;
    loadingRemovePost: boolean;
    loadingSearchPostStorage: boolean;

    newPostStorage: (data: dataNewPost) => void;
    loadStoragePostPost: () => Promise<void>;
    newPost: PostDTO[];

    removePostUser: (item: PostDTO) => void;

    enjoyPosts: EnjoyPostDTO[];
    saveEnjoyPosts: (item: EnjoyPostDTO) => void;
}

type PostProviderProps = {
    children: ReactNode;
}

interface dataNewPost {
    title: string;
    body: string;
    userId: number;
}

export const PostContext = createContext({} as PostContextData);

function PostProvider({ children }: PostProviderProps){
    const [posts, setPosts] = useState<PostDTO[]>([]);
    const [users, setUsers] = useState<UserDTO[]>([]);
    const [enjoyPosts, setEnjoyPosts] = useState<EnjoyPostDTO[]>([]);

    const [loadingSearchDadosApi, setLoadingSearchDadosApi] = useState(true);
    const [loadingRemovePost, setLoadingRemovePost] = useState(false);
    const [loadingSearchPostStorage, setLoadingSearchPostStorage] = useState(true);
    const [loadingPostCrate, setLoadingPostCreate] = useState(false);
    
    const [newPost, setNewPost] = useState<PostDTO[]>([]);
    const [newPostID, setNewPostID] = useState(1000);
    
    const CHAVE_STORAGE_POSTS = '@hubusca:postCreated';
    const CHAVE_STORAGE_IDPOST = '@hubusca:idPostCreated';
    const CHAVE_STORAGE_ENJOYPOSTS = '@hubusca:enjoyPosts';

    useEffect(() => {
        loadStoragePostPost();
    }, []);


    async function fetchApi(){
        try {
            const responsePosts = await api.get('/posts');
            const responseUsers = await api.get('/users');
            setPosts(responsePosts.data);
            setUsers(responseUsers.data);
        } catch (error) {
            console.log(error);
        }finally{
            setLoadingSearchDadosApi(false);
        }
    }

    async function newPostStorage(data: dataNewPost){
        setLoadingPostCreate(true);

        api.post(`/posts`, {
            data
        }).then(() => {

            const { title, body, userId } = data;
            const dataPost = {
                id: newPostID + 1,
                title,
                body,
                userId 
            }
    
            const storagePost = [
               ...newPost,
               dataPost
            ]
            
            setNewPost(storagePost);
            setNewPostID(dataPost.id)
            AsyncStorage.setItem(CHAVE_STORAGE_POSTS, JSON.stringify(storagePost));
            AsyncStorage.setItem(CHAVE_STORAGE_IDPOST, JSON.stringify(dataPost.id));

            setLoadingPostCreate(false);
        })
        .catch(() => {
            Alert.alert('Não foi possível criar o post.');
        })
        
        setLoadingPostCreate(false);
    }

    async function loadStoragePostPost(){
        const storage = await AsyncStorage.getItem(CHAVE_STORAGE_POSTS);
        const storageId = await AsyncStorage.getItem(CHAVE_STORAGE_IDPOST);
        const storageEnjoyPost = await AsyncStorage.getItem(CHAVE_STORAGE_ENJOYPOSTS);

        if(storage){
            const data = await JSON.parse(storage);
            setNewPost(data);
        }

        if(storageId){
            const dataId = await JSON.parse(storageId);
            setNewPostID(dataId);
        }
       
        if(storageEnjoyPost){
            const dataEnjoy = await JSON.parse(storageEnjoyPost);
            setEnjoyPosts(dataEnjoy);
        }
        
        setLoadingSearchPostStorage(false);
    }

    async function removePostUser(item: PostDTO) {
        setLoadingRemovePost(true);
        const removeItem = newPost.filter(
            itemPost => itemPost.id !== item.id
        )
        setNewPost(removeItem);
        await AsyncStorage.setItem(CHAVE_STORAGE_POSTS, JSON.stringify(removeItem));
        setLoadingRemovePost(false);
    }

    async function saveEnjoyPosts(item: EnjoyPostDTO){
        const storageEnjoyPost = [
            ...enjoyPosts,
            item
        ]

        let alter = [...enjoyPosts];
        let verifica = 0;
        enjoyPosts.map((alterTask, index) => {
            if(alterTask.id === item.id) {
                alter[index].enjoy = !alterTask.enjoy;
                setEnjoyPosts(alter);
                verifica = 1;
            }
        })  

        if(verifica === 1) {
            await AsyncStorage.setItem(CHAVE_STORAGE_ENJOYPOSTS, JSON.stringify(alter));
        }

        if(verifica === 0) {
            setEnjoyPosts(storageEnjoyPost);
            await AsyncStorage.setItem(CHAVE_STORAGE_ENJOYPOSTS, JSON.stringify(storageEnjoyPost));
        }     
    }

    return (
        <PostContext.Provider value={{
            posts,
            users,
            fetchApi,

            loadingSearchDadosApi,
            loadingPostCrate,
            loadingRemovePost,
            loadingSearchPostStorage,

            newPostStorage,
            loadStoragePostPost,
            newPost,

            removePostUser,

            enjoyPosts,
            saveEnjoyPosts
        }}>
            {children}
        </PostContext.Provider>
    )
}


function usePostStorage(){
    const context = useContext(PostContext);

    return context;
}

export {
    PostProvider,
    usePostStorage
}