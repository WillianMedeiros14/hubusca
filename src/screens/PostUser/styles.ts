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
    margin-top: ${RFValue(-56)}px;;
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

export const Empty = styled.View `
    flex: 1;
    align-items: center;
    padding-top: 44px;
`;

export const TextEnpty = styled.Text `
    text-align: center;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text};
    margin-top: 30px;
`;
