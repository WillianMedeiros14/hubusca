import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.ScrollView `
    flex: 1;
    margin-top: -50px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};

    padding: 17px;
`;

export const ContainerUser = styled.View `
   margin-bottom: 20px;
`

export const Title = styled.Text `
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.Text `
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
`

export const CatchPhrase = styled.Text `
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
`

export const ContainerButton = styled.View `
    margin-top: 20px;
    margin-bottom: ${getBottomSpace() + RFValue(110)}px;
    padding-left: 25px;
    padding-right: 25px;
`