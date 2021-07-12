import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { PostDTO } from '../dtos/postDTO';
import { UserDTO } from '../dtos/userDTO';
import { api } from '../services/api';

type PostContextData = {
    posts: PostDTO[];
    users: UserDTO[];
    fetchApi: () => Promise<void>;
    loading: boolean;
    newPostStorage: (data: dataNewPost) => void;
    loadStoragePostPost: () => Promise<void>;
    newPost: PostDTO[];
    removePostUser: (item: PostDTO) => void;
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

    const [loading, setLoading] = useState(true);

    const [newPost, setNewPost] = useState<PostDTO[]>([]);
    const [newPostID, setNewPostID] = useState(Number);

    const CHAVE_STORAGE_POSTS = '@hubusca:postCreated';
    const CHAVE_STORAGE_IDPOST = '@hubusca:idPostCreated';

    useEffect(() => {
        loadStoragePostPost();
    }, []);

    async function fetchApi(){
        try {
            const responsePosts = await api.get('/posts');
            const responseUsers = await api.get('/users');
            setPosts(responsePosts.data);
            setUsers(responseUsers.data);

            console.log(posts.length);           

        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    
    async function newPostStorage(data: dataNewPost){
        setLoading(true);
        
        api.post(`/posts`, {
            data
        }).then(() => {
            Alert.alert('Post Criado.');         
        })
        .catch(() => {
            Alert.alert('Não foi possível criar o post.');
            setLoading(false);
        })

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

        console.log('Id do post criado: ' + dataPost.id);

        setNewPost(storagePost);
        setNewPostID(dataPost.id)
        await AsyncStorage.setItem(CHAVE_STORAGE_POSTS, JSON.stringify(storagePost));
        await AsyncStorage.setItem(CHAVE_STORAGE_IDPOST, JSON.stringify(dataPost.id));
    }

    async function loadStoragePostPost(){
        const storage = await AsyncStorage.getItem(CHAVE_STORAGE_POSTS);
        const storageId = await AsyncStorage.getItem(CHAVE_STORAGE_IDPOST);
       /// await AsyncStorage.removeItem(CHAVE_STORAGE_POSTS);

        if(storage){
            const data = JSON.parse(storage);
            setNewPost(data);
            console.log(data)
        }

        if(storageId){
            const dataId = JSON.parse(storageId);
            setNewPostID(dataId);
        }
        console.log('Id do post criado POR ULTIMO: ' + newPostID)
        setLoading(false)
    }

    async function removePostUser(item: PostDTO) {
        const removeItem = newPost.filter(
            itemPost => itemPost.id !== item.id
        )
        setNewPost(removeItem);
        await AsyncStorage.setItem(CHAVE_STORAGE_POSTS, JSON.stringify(removeItem));
    }

    return (
        <PostContext.Provider value={{
            posts,
            users,
            fetchApi,
            loading,
            newPostStorage,
            loadStoragePostPost,
            newPost,
            removePostUser
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