import React, { useState, useEffect } from 'react';

import HeaderPages from '../../components/HeaderPages';
import { Button } from '../../components/Button';


import {
    Container,
    Main,
    ContainerUser,
    Title,
    Content,
    CatchPhrase,
    ContainerButton
} from './styles'



export default function InformationUser(){
 
    return (
        <Container>
           <HeaderPages title="Informações do usuário" />
           
           <Main>
                <ContainerUser>
                    <Title>Nome</Title>
                    <Content>Willian Medeiros</Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Username</Title>
                    <Content>Medeiros</Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Email</Title>
                    <Content>incere@april.biz</Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Endereço</Title>
                    <Content>Rua: Kulas Light, apto 556, Gwenborough - AM, 92998-3873</Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Telefone</Title>
                    <Content>-770-736-8031 x56442</Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Website</Title>
                    <Content>hildegard.org</Content>
                </ContainerUser>

                <ContainerUser>
                    <Title>Empresa</Title>
                    <Content>Romaguera-Cron</Content>
                    <CatchPhrase>Multi-layred client-server</CatchPhrase>
                </ContainerUser>
           </Main>

            <ContainerButton>
                <Button title="Posts do usuário" onPress={() => {}} />
            </ContainerButton>
           
        </Container>
    )
}