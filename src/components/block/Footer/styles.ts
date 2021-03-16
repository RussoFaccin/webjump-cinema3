import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/Logo-white.svg';
import { Breakpoints } from 'enums/style';

export const FooterElement = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--mainColor);
    padding: 30px 0;
    margin-top: 15px;
    font-size: 1.4rem;

    @media screen and (min-width: ${Breakpoints.TABLET}) {
        flex-direction: row;
    }
`;

export const FooterLogo = styled(Logo)`
    width: 100%;
    height: auto;
`;

export const FooterHeading = styled.h1`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

export const FooterBrand = styled(Link)`
    display: block;
    margin-bottom: 25px;

    @media screen and (min-width: ${Breakpoints.TABLET}) {
        margin-bottom: 0;
        margin-right: 185px;
    }
`;

export const TxtSmall = styled.small`
    font-size: 1rem;
`;

export const FooterLink = styled(Link)`
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 4px 0;
`;

export const FooterNav = styled.div`
    display: block;
    color: #FFF;
`;