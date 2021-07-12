import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps;

export const Container = styled.View `
   width: 100%;
   background-color: ${({ theme }) => theme.colors.white};
   margin-bottom: 20px;
   
   padding: 17px;
   border-radius: 5px;
`;


export const Header = styled.View `
   width: 100%;
`;

export const Title = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.semiBold};
   color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonName = styled.TouchableOpacity `
   justify-content: center;
`;

export const Name = styled.Text `
   font-size: ${RFValue(12)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.user};
`;

export const Content = styled.Text `
   width: 100%;
   font-family: ${({ theme }) => theme.fonts.regular};
   margin-top: 10px;
   color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View `
   width: 100%;
   align-items: flex-end;
   margin-top: 10px;
`;

export const ButtonCurtir = styled.TouchableOpacity `

`;

export const Button = styled(RectButton)<Props> `

`;

export const Icon = styled(Feather) `
   font-size: ${RFValue(25)}px;
   color: ${({ theme }) => theme.colors.primary};
   
`;
