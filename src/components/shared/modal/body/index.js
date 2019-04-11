import React from 'react';
import { BodyBox } from './styles';


const ModalBody = props => {
    return (
        <BodyBox>
            {props.children}
        </BodyBox>
    )
}

export default ModalBody;
