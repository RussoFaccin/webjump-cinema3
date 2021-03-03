import React from "react";
import AppLogo from '../../assets/Logo-white.svg';
import './Header.css';
// Components
import CircleButton from '../element/CircleButton';

const icon = {
  search: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjg1NzIgMTcuMTQyOUMxNS4yNzU1IDE3LjE0MjkgMTguODU3MiAxMy41NjExIDE4Ljg1NzIgOS4xNDI4NkMxOC44NTcyIDQuNzI0NTggMTUuMjc1NSAxLjE0Mjg2IDEwLjg1NzIgMS4xNDI4NkM2LjQzODkgMS4xNDI4NiAyLjg1NzE4IDQuNzI0NTggMi44NTcxOCA5LjE0Mjg2QzIuODU3MTggMTMuNTYxMSA2LjQzODkgMTcuMTQyOSAxMC44NTcyIDE3LjE0MjlaIiBzdHJva2U9IiNGOUY5RjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMC44NTk1IDE5LjE0MjhMMTYuNTA5NSAxNC43OTI4IiBzdHJva2U9IiNGOUY5RjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
  profile: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDQuODc1QzkuNTE1NjIgNC44NzUgNy41IDYuODkwNjIgNy41IDkuMzc1QzcuNSAxMS44NTk0IDkuNTE1NjIgMTMuODc1IDEyIDEzLjg3NUMxNC40ODQ0IDEzLjg3NSAxNi41IDExLjg1OTQgMTYuNSA5LjM3NUMxNi41IDYuODkwNjIgMTQuNDg0NCA0Ljg3NSAxMiA0Ljg3NVpNMTIgMTEuNjI1QzEwLjc1NzggMTEuNjI1IDkuNzUgMTAuNjE3MiA5Ljc1IDkuMzc1QzkuNzUgOC4xMzI4MSAxMC43NTc4IDcuMTI1IDEyIDcuMTI1QzEzLjI0MjIgNy4xMjUgMTQuMjUgOC4xMzI4MSAxNC4yNSA5LjM3NUMxNC4yNSAxMC42MTcyIDEzLjI0MjIgMTEuNjI1IDEyIDExLjYyNVpNMTIgMC4zNzVDNS41NzgxMiAwLjM3NSAwLjM3NSA1LjU3ODEyIDAuMzc1IDEyQzAuMzc1IDE4LjQyMTkgNS41NzgxMiAyMy42MjUgMTIgMjMuNjI1QzE4LjQyMTkgMjMuNjI1IDIzLjYyNSAxOC40MjE5IDIzLjYyNSAxMkMyMy42MjUgNS41NzgxMiAxOC40MjE5IDAuMzc1IDEyIDAuMzc1Wk0xMiAyMS4zNzVDOS42NzAzMSAyMS4zNzUgNy41NDIxOSAyMC41MTcyIDUuOTAxNTYgMTkuMTA2M0M2LjYgMTguMDI4MSA3Ljc5NTMxIDE3LjI5NjkgOS4xNjQwNiAxNy4yNTQ3QzEwLjEzOTEgMTcuNTU0NyAxMS4wNjcyIDE3LjcwNDcgMTIgMTcuNzA0N0MxMi45MzI4IDE3LjcwNDcgMTMuODYwOSAxNy41NTk0IDE0LjgzNTkgMTcuMjU0N0MxNi4yMDQ3IDE3LjMwMTYgMTcuNCAxOC4wMjgxIDE4LjA5ODQgMTkuMTA2M0MxNi40NTc4IDIwLjUxNzIgMTQuMzI5NyAyMS4zNzUgMTIgMjEuMzc1Wk0xOS42MjY2IDE3LjQzMjhDMTguNDgyOCAxNS45NjA5IDE2LjcxNTYgMTUgMTQuNyAxNUMxNC4yMjE5IDE1IDEzLjQ4MTIgMTUuNDUgMTIgMTUuNDVDMTAuNTIzNCAxNS40NSA5Ljc3ODEyIDE1IDkuMyAxNUM3LjI4OTA2IDE1IDUuNTIxODggMTUuOTYwOSA0LjM3MzQ0IDE3LjQzMjhDMy4yNzY1NiAxNS45IDIuNjI1IDE0LjAyNSAyLjYyNSAxMkMyLjYyNSA2LjgyOTY5IDYuODI5NjkgMi42MjUgMTIgMi42MjVDMTcuMTcwMyAyLjYyNSAyMS4zNzUgNi44Mjk2OSAyMS4zNzUgMTJDMjEuMzc1IDE0LjAyNSAyMC43MjM0IDE1LjkgMTkuNjI2NiAxNy40MzI4WiIgZmlsbD0iI0Y5RjlGOSIvPgo8L3N2Zz4K"
}

const Header = () => {
  return (
    <header className="appHeader">
      <a href="/" className="appHeader__brand">
        <img className="appBrand__logo" src={AppLogo} alt="Cinejump!" />
        <h1 className="u-srOnly">Cinejump!</h1>
      </a>
      <div className="appHeader__action appHeader__action--navigation">
        <nav className="appHeader__navigation">
          <a className="navLink" href="/#">
            Filmes
          </a>
          <a className="navLink" href="/#">
            Series
          </a>
        </nav>
      </div>
      <div className="appHeader__action appHeader__action--subnav">
        <div className="appHeader__subnav">
          <CircleButton icon={icon.search} text='Buscar' />
          <CircleButton icon={icon.profile} text='Perfil' />
        </div>
      </div>
    </header>
  );
};

export default Header;