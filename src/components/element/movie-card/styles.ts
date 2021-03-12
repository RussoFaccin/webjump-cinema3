import styled from 'styled-components';
import { BsHeartFill } from "react-icons/bs";

const SrOnly = `
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
`;

export const Container = styled.article`
    flex: none;
    width: 105px;
    height: 157px;
    border-radius: 10px;
    overflow: hidden;
    background-color: gray;
    :not(:last-of-type) {
        margin-right: 10px;
    }
`;

export const Heading = styled.h3`
    ${SrOnly}
`;

export const CardPoster = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .15s ease-in;
    
    :hover {
        transform: scale(1.1)
    }
`;

export const HeartIcon = styled(BsHeartFill)`
cursor: pointer;
    position: absolute;
    width: 15px;
    height: 15px;
    top: 10px;
    right: 10px;
`;