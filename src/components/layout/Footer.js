import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Sobre VacuMap</h2>
        <p className="mt-5">"Ayudamos a la población con tecnologia simple y eficaz."</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contacto</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="">+34 626 190 322</a>
          </li>
          <li>
            <a href="">contacto@vacumap.com</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Redes Sociales</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
