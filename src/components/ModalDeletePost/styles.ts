import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.Modal `
   
`;

export const Main = styled.View `
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color:  rgba(0, 0, 0, 0.7);
   
`;

export const Background = styled.View `
    width: 85%;
    height: 441px;
    padding: 31px;
   
    border-radius: 8px;
    background-color:  ${({ theme }) => theme.colors.backgroundModal};
    align-items: center;
    justify-content: center;
`;



export const Header = styled.View `
    width: 100%;
    align-items: flex-end;
  
    margin-bottom: -20px;
`;

export const ButtonClose = styled.TouchableOpacity `
    width: 30px;
    height: 30px;
    border-radius: 3px;
    align-items: center;
    justify-content: center;

`;

export const TitleClose = styled.Text `
    font-size: ${RFValue(25)}px;
    font-family:  ${({ theme }) => theme.fonts.regular};
    text-align: center;
    color:  ${({ theme }) => theme.colors.danger};

`;

export const Text = styled.Text `
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
    color:  ${({ theme }) => theme.colors.text};
    margin-top: 28px;
    margin-bottom: 28px;
`;




export const ContainerButton = styled.View `
    width: 100%;
    min-height: ${RFValue(115)}px;
    justify-content: space-between;
   
`;
