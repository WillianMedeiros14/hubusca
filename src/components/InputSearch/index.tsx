import React, { useState, useEffect } from 'react';

import {
    Container,
    Input,
    Button,
    Icon
} from './styles';

type Props = {
   search: (searchText: string) => void;
}

export function InputSearch({
    search,
}: Props){

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        search(searchText)
    }, [searchText])

    return (
        <Container>
            <Input
                placeholder="Titulo do post"
                value={searchText}
                onChangeText={(t) => setSearchText(t)}
            />
            <Button >
                <Icon
                    name="search-sharp"
                />
            </Button>
        </Container>
    );
}