import React from 'react';
import {FontAwesomeIcon} from"@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok, faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  
  return (

    <footer>

      <img src="./images/DH.png" alt='DH-logo' />
     
      <div>

        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faWhatsappSquare} />
        <FontAwesomeIcon icon={faTiktok} />
        <FontAwesomeIcon icon={faInstagram} />
       
      </div>
     
        
    
    </footer>
  );
}

export default Footer;