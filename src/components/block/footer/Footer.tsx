import React from 'react';
import Logo from '../../../assets/Logo-white.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="appFooter">
        <a href="/" className="footerBrand">
            <img className="appBrand__logo" src={Logo} alt="Cinejump!"/>
            <h1 className="u-srOnly">Cinejump!</h1>
        </a>
        <div className="footerNav">
            <small className="footer__copyrights">Desenvolvido por Lucas Gabriel</small>
            <a className="footerNav__link" href="/">Proposta do projeto</a>
            <a className="footerNav__link" href="/">Protótipo no Figma</a>
            <a className="footerNav__link" href="/">Apresentação ao comitê</a>
            <a className="footerNav__link" href="/">Documentação</a>
        </div>
    </footer>)
};

export default Footer;