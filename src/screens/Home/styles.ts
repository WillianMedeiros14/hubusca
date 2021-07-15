import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { PostDTO } from '../../dtos/postDTO';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.View `
    flex: 1;
    margin-top: -50px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: ${getBottomSpace() + RFValue(90)}px;
`;

export const PostList = styled(FlatList as new () => FlatList<PostDTO>).attrs({
    showsVerticalScrollIndicator: false,
    
}) ``;

export const ContainerLoading = styled.View `
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: ${getBottomSpace() + RFValue(85)}px;
`;