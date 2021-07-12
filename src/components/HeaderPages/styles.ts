import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
   width: 100%;
   height: ${RFValue(190)}px;
   background-color: ${({ theme }) => theme.colors.primary};

   justify-content: center;
   padding: 25px;
`;

export const Title = styled.Text `
   font-size: ${RFValue(22)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
  
   color: ${({ theme }) => theme.colors.white};
  
`;

