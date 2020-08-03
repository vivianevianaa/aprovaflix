import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://aprovaflix.vercel.app/">
        <img src="logo-footer.png" alt="Logo Aprovaflix" />
      </a>
      <p>
        Orgulhosamente criado pela Viviane Viana, durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
