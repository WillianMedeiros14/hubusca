import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';


export const Container = styled.View `
    height: ${RFValue(50)}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.TextInput `
    flex: 1;
    padding-left: 14px;
    padding-right: 14px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Button = styled.TouchableOpacity `
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-left-width: 1px;
    border-left-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Ionicons)`
   font-size: ${RFValue(25)}px;
   color: ${({ theme }) => theme.colors.primary};
`;


