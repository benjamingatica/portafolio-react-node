import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <footer className="mastfoot mt-auto bg-success">
        <div className="inner">
            <p>
              <a href="https://www.linkedin.com/in/benjamin-gatica-tapia/" target="__blank">Contáctame en <LinkedInIcon /></a>
            </p>
        </div>
    </footer>
  );
};

export default Footer;
