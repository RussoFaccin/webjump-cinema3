import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

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
    margin-right: 10px;
`;

export const HeaderNavigation = styled.nav<HeaderChildProps>`
    flex: 1;
    order: ${props => props.order};
    color: white;
`;

export const HeaderSubnav = styled.div<HeaderChildProps>`
flex: 1;
order: ${props => props.order};
`;

