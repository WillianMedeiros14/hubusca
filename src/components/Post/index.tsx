import React, { useState, useEffect }  from 'react';
import { StyleSheet } from 'react-native';

import { PostDTO } from '../../dtos/postDTO';

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
    ButtonActionClean,
    Icon,
    ViewEnjoyHome
} from './styles'

interface Props {
    data: PostDTO;
    active?: boolean;
    activeHome?: boolean;
    onPresUserInformation?: () => void;
    clean?: () => void;
    enjoyPost?: () => void;
}

export default function Post({
    data, 
    active, 
    activeHome,
    onPresUserInformation, 
    clean, 
    enjoyPost
} : Props){
    
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
        <Container style={styles.shadow}>
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
                { activeHome &&
                    <ViewEnjoyHome>
                        <ButtonAction onPress={enjoyPost}>
                            <Icon
                                name={nameIcon}
                            />
                        </ButtonAction>
                    </ViewEnjoyHome>
                }
                {
                    active && 
                    <>
                        <ButtonAction onPress={enjoyPost}>
                            <Icon
                                name={nameIcon}
                            />
                        </ButtonAction>
                        
                        <ButtonActionClean
                            onPress={clean}
                            activeOpacity={0.7}
                        >
                            <Icon
                                name="trash"
                            />
                        </ButtonActionClean>
                    </>
                }
            </Footer>
        </Container>
    )
}

export const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 2
    }
})