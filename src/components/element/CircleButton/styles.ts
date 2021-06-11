import styled from "styled-components";

export const BaseButton = styled.button`
    background-color: transparent;
    border: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &:focus {
        outline: 0;
    }

    .srOnly {
        position: absolute;
        overflow: hidden;
        width: 0;
        height: 0;
    }
`;