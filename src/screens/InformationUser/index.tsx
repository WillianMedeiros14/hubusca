import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import HeaderPages from '../../components/HeaderPages';
import { Button } from '../../components/Button';

import { UserDTO } from '../../dtos/userDTO';
import { usePostStorage } from '../../hooks/post';


import {
    Container,
    Main,
    ContainerUser,
    Title,
    Content,
    CatchPhrase,
    ContainerButton
} from './styles'

type Params = {
    userId: number
 }

export default function InformationUser(){
    const navigation = useNavigation();
    const route = useRoute();
    const { userId } = route.params as  Params;
    
    const { users } = usePostStorage();

    const { name, username, email, address, phone, website, company } =  users[userId-1];


    function handlePostUserIdName(){
        navigation.navigate('PostUserIdName', { userId });
    }


    return (
        <Container>
           <HeaderPages title="Informações do usuário" />
           
           <Main>
                <ContainerUser>
                    <Title>Nome</Title>
                    <Content>
                        {name}
                    </Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Username</Title>
                    <Content>
                        {username}
                    </Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Email</Title>
                    <Content>
                        {email}
                    </Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Endereço</Title>
                    <Content>
                        {`Rua: ${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
                    </Content>
                  
                </ContainerUser>

                <ContainerUser>
                    <Title>Telefone</Title>
                    <Content>
                        {phone}
                    </Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Website</Title>
                    <Content>
                        {website}
                    </Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Empresa</Title>
                    <Content>{company.name}</Content>
                    <CatchPhrase>{company.catchPhrase}</CatchPhrase>
                </ContainerUser>
           </Main>

            <ContainerButton>
                <Button title="Posts do usuário" onPress={handlePostUserIdName} />
            </ContainerButton>
           
        </Container>
    )
}