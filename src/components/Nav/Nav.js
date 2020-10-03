import React, { useEffect, useState } from 'react';
import 'components/Nav/Nav.scss';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListner('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav--black'}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="avatar"
      />
    </div>
  );
};

export default Nav;
