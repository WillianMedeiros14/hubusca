import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View `
   width: 100%;
   height: ${RFValue(190)}px;
   background-color: ${({ theme }) => theme.colors.primary};
   padding: 25px;
`;

export const Title = styled.Text `
   font-size: ${RFValue(22)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.white};
   margin-top: 10px;
`;

export const Goback = styled.View `
   width: 100%;
   min-height: ${RFValue(38)}px;
   align-items: flex-end;
`

export const ButtonGoBack = styled(BorderlessButton) `

`

export const Icon = styled(Ionicons) `
   font-size: ${RFValue(35)}px;
   color: ${({ theme }) => theme.colors.white};
`