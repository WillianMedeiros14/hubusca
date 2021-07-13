import React, { useState, useEffect }  from 'react';

import { PostDTO } from '../../dtos/postDTO';
import { UserDTO } from '../../dtos/userDTO';

import { usePostStorage } from '../../hooks/post';

import {
    Container,
    Header,
    Title,
    ButtonName,
    Name,
    Content,
    Footer,
    ButtonAction,
    Icon
} from './styles'

interface Props {
    data: PostDTO;
    onPresUserInformation?: () => void;
    active?: boolean;
    clean?: () => void;
    enjoyPost?: () => void;
}

export default function Post({data, onPresUserInformation, active, clean, enjoyPost} : Props){
    const { users, enjoyPosts } = usePostStorage();
    const [nameIcon, setNomeIcon] = useState('heart-outlined')

    useEffect(() => {
        enjoyPosts.map((enjoyId) => {
            if(enjoyId.id === data.id){
                if(enjoyId.enjoy === true) {
                    setNomeIcon('heart')
                } else {
                    setNomeIcon('heart-outlined')
                }
            }
        })
    }, [enjoyPosts]);

    return (
        <Container>
            <Header>
                <Title>{data.title}</Title>
    
                <ButtonName onPress={onPresUserInformation}>
                   <Name>
                        {
                            users.map((nameUser) => {
                                if(nameUser.id === data.userId){
                                   return nameUser.name
                                }
                            }) 
                        }
                      
                   </Name>
                </ButtonName>
            </Header>

            <Content>
                {data.body}
            </Content>

            <Footer>
                {
                    active ? 
                    <ButtonAction onPress={enjoyPost}>
                        <Icon
                            name={nameIcon}
                        />
                    </ButtonAction>
                    :
                    <ButtonAction onPress={clean}>
                        <Icon
                            name="trash"
                        />
                    </ButtonAction>
                }

            </Footer>
        </Container>
    )
}