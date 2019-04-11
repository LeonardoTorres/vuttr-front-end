import React from 'react';
import { Container } from './styles';
// import { Container } from './styles';

const ContentConfirm = props => {
    const { children }  = props;
    return (
       <Container>
            {children}
       </Container>
    )
}

export default ContentConfirm
