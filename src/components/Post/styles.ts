import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
   width: 100%;
   background-color: ${({ theme }) => theme.colors.background_Post};
   margin-bottom: 20px;
   padding: 10px;
   border-radius: 4px;
`;


export const Header = styled.View `
   width: 100%;
`;

export const Title = styled.Text`
   font-size: ${RFValue(20)}px;
   font-family: ${({ theme }) => theme.fonts.semiBold};
   color: ${({ theme }) => theme.colors.text};
`;

export const ButtonName = styled.TouchableOpacity `
 
`;

export const Name = styled.Text `
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.name};
`;

export const Content = styled.Text `
   width: 100%;
   
   margin-top: 10px;
   color: ${({ theme }) => theme.colors.text};
`;

