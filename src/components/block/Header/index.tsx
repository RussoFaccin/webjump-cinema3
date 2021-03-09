import {
    HeaderElement,
    HeaderNavigation,
    NavLink,
    HeaderSubnav,
    AppBrand,
    AppTitle
} from './styles';
import {ReactComponent as Logo} from 'assets/Logo-white.svg';

const Header = () => {
    return (
        <HeaderElement>
            <HeaderNavigation order={1}>
                <NavLink to="/filmes">Filmes</NavLink>
                <NavLink to="/series">Series</NavLink>
            </HeaderNavigation>
            <AppBrand href="/" order={2}>
                <Logo />
                <AppTitle>Cinejump!</AppTitle>
            </AppBrand>
            <HeaderSubnav order={3} />
        </HeaderElement>
    );
}

export default Header;