import React, { useState, useEffect } from 'react';

import HeaderPages from '../../components/HeaderPages';
import Post from '../../components/Post';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { PostDTO } from '../../dtos/postDTO';

import {
    Container,
    Main,
    PostList
} from './styles'


export default function Home(){
    const [posts, setPosts] = useState<PostDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost(){
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
                
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        fetchPost();

    }, []);

    function teste(){
        console.log("Posts no estado");
        console.log(posts);
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
                            <Post data={item} />
                        }
                    />
                }
           </Main>
        </Container>
    )
}