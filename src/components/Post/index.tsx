import React from 'react';

import { PostDTO } from '../../dtos/postDTO';
import { UserDTO } from '../../dtos/userDTO';

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
    onPress?: () => void;
    active?: boolean;
    clean?: () => void;
}

export default function Post({data, onPress, active, clean} : Props){

    return (
        <Container>
            <Header>
                <Title>{data.title}</Title>

                <ButtonName onPress={onPress}>
                    <Name>Willian</Name>
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