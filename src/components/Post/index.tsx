import React, { useState }  from 'react';

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
    ButtonCurtir,
    Button,
    Icon
} from './styles'

interface Props {
    data: PostDTO;
    onPresUserInformation?: () => void;
    active?: boolean;
    clean?: () => void;
}

export default function Post({data, onPresUserInformation, active, clean} : Props){

    const { users } = usePostStorage();
    const [userNamePost, seUserNamePost] = useState('');

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
                    <ButtonCurtir>
                        <Icon
                            name="heart"
                        />
                    </ButtonCurtir>
                    :
                    <Button onPress={clean}>
                        <Icon
                            name="trash"
                        />
                    </Button>
                }

            </Footer>
        </Container>
    )
}