import React from 'react';
import { HeaderBox, CloseButton } from './styles';

// import { Container } from './styles';

const ModalHeader = props => {
    const { onClose, title} = props;
    return (
       <HeaderBox>
         <p>{title}</p>
         <CloseButton onClick={onClose}>&times;</CloseButton>
       </HeaderBox>
    )
}

export default ModalHeader;
