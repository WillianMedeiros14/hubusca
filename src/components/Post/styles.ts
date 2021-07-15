import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View `
   width: 99.5%;
   background-color: ${({ theme }) => theme.colors.white};
   margin-bottom: 20px;
   padding: 17px;
   border-radius: 5px;
   margin-right: 1px;
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
   flex-direction: row;
   justify-content: space-between;
`;

export const ButtonAction = styled(BorderlessButton) ``;

export const ButtonActionClean = styled.TouchableOpacity ``;

export const Icon = styled(Entypo) `
   font-size: ${RFValue(30)}px;
   color: ${({ theme }) => theme.colors.primary};
`;

export const ViewEnjoyHome = styled.View `
   width: 100%;
   align-items: flex-end;
`;

