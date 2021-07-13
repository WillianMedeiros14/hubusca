import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    active?: boolean;
}

export const Container = styled.TouchableOpacity<Props> `
    height: ${RFValue(52)}px;

    background-color: ${({ theme, active }) => 
        active ? theme.colors.white :  theme.colors.danger}
    ;

    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.danger};
`;

export const Title = styled.Text<Props> `
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

    color: ${({ theme, active }) => 
        active ? theme.colors.danger :  theme.colors.white}
    ;
`;
