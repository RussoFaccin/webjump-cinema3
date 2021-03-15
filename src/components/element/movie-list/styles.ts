import styled from 'styled-components';
import { Breakpoints } from 'enums/style';

export const Container = styled.section`
    margin-top: 20px;
    overflow: hidden;
`;

export const Heading = styled.h3`
    font-size: 18px;
    font-weight: 400;
    color: var(--mainColor);

    @media screen and (min-width: ${Breakpoints.TABLET}) {
        font-weight: 300;
        font-size: 22px;
        margin-bottom: 10px;
    }
`;

export const ListContainer = styled.div`
    display: inline-flex;
`;