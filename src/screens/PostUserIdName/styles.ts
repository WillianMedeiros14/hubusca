import styled, { css } from 'styled-components/native';
import { TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';

import { PostDTO } from '../../dtos/postDTO';

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;


export const ContainerInput = styled.View `
    margin-top: -50px;
    margin-left: 25px;
    margin-right: 25px;
`;

export const Main = styled.View `
    flex: 1;
    margin-top: 20px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: ${getBottomSpace() + RFValue(85)}px;
`;

export const PostList = styled(FlatList as new () => FlatList<PostDTO>).attrs({
    showsVerticalScrollIndicator: false,
}) ``;

