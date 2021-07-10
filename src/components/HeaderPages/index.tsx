import React, { useState, useEffect } from 'react';

import {
    Container,
    Title
} from './styles'

interface Props {
    title: string;
}



export default function HeaderPages({title} : Props){

    return (
        <Container>
           <Title>
               {title}
           </Title>
        </Container>
    )
}