import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import {
    Container,
    Input,
    Button,
    Icon
} from './styles';

type Props = {
   search: (searchText: string) => void;
   actionKeyboard: (keyboardStatus: boolean) => void;
}

export function InputSearch({
    search,
    actionKeyboard,
}: Props){
    
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        search(searchText)
    }, [searchText])

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
      }, []);

      function _keyboardDidShow(){
        actionKeyboard(true)
      }

      function _keyboardDidHide(){
        actionKeyboard(false)
      }


    return (
        <Container>
            <Input
                placeholder="Titulo do post"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            <Button >
                <Icon
                    name="search-sharp"
                />
            </Button>
        </Container>
    );
}