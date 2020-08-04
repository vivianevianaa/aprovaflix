import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/LogoFooter.png';


function Footer() {
  return (
    <FooterBase>
      <a href="https://aprovaflix.vercel.app/">
        <img src={LogoFooter} alt="Logo Aprovaflix" />
      </a>
      <p>
        Orgulhosamente recriado pela Viviane Viana, durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
