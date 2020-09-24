import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-3xl font-semibold text-blue-500">
        <div className="w-70 mr-3">
          <LogoIcon />
        </div>
        VacuMap
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Cómo funciona
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Servicio
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          estadisticas
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Opiniones
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Descárgala ya!</Button>
      </div>
    </div>
  </header>
);

export default Header;
