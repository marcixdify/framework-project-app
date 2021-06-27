import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
width: 150px;
height: 20px;
margin: 0 10px 0 10px;
border: 1px solid #d2d2d2;
border-radius: 5px;
}
`;
const InputWrapper = styled.div`
display: flex;
align-items: center;

`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType?: 'search';
    align?: 'left';
    onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
}


const TaskFilter: React.FC<InputProps> = (props) => {
    return (
        <InputWrapper>
            <StyledInput {...props} />
            {props.inputType === 'search' && <img src="/media/icons/search.png" />}
        </InputWrapper>
    )
}
export default TaskFilter;