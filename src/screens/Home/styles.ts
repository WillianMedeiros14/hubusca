import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { PostDTO } from '../../dtos/postDTO';

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.View `
    flex: 1;
`;


export const PostList = styled(FlatList as new () => FlatList<PostDTO>).attrs({
    contentContainerStyle: {
        padding: 24,
    },
    showsVerticalScrollIndicator: false,
}) ``;