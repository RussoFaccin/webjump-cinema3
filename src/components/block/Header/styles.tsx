import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Breakpoints } from 'enums/style';
import { ReactComponent as Logo } from 'assets/Logo-white.svg';

interface HeaderChildProps {
    order: number
}

export const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    padding: 22px 0;
`;

export const AppBrand = styled.a<HeaderChildProps>`
    order: ${props => props.order};
    width: 35vw;
    max-width: 150px;
`;

export const AppLogo = styled(Logo)`
    width: 100%;
    height: auto;
`;

export const AppTitle = styled.h1`
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

export const NavLink = styled(RouterLink)`
    color: inherit;
    text-decoration: none;
    font-size: 1.5rem;
    margin-right: 15px;
`;

export const HeaderNavigation = styled.nav<HeaderChildProps>`
    flex: 1;
    order: ${props => props.order};
    color: white;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${Breakpoints.TABLET}) {
        flex-direction: row;
    }
`;

export const HeaderSubnav = styled.div<HeaderChildProps>`
flex: 1;
order: ${props => props.order};
display: flex;
justify-content: flex-end;
`;
