import React from 'react';

import { PostDTO } from '../../dtos/postDTO';

import {
    Container,
    Header,
    Title,
    ButtonName,
    Name,
    Content
} from './styles'

interface Props {
    data: PostDTO;
}

export default function Post({data} : Props){

    return (
        <Container>
            <Header>
                <Title>{data.title}</Title>

                <ButtonName>
                    <Name>Willian</Name>
                </ButtonName>
            </Header>
            <Content>
                {data.body}
            </Content>
        </Container>
    )
}