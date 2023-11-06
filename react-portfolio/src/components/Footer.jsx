import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div>
                <h5>Designed by Mike Serafin 2023</h5>
                <h5>Email: mikeserafin98@gmail.com</h5>
                <a href='www.linkedin.com/in/michael-serafin-02aa63278'>
                    <FontAwesomeIcon icon={faLinkedin} className='svg-inline--fa' />
                </a>
                <a href='https://github.com/mserafin20'>
                    <FontAwesomeIcon icon={faGithub} className='svg-inline--fa' />
                </a>
                <a href='https://www.instagram.com/mserafin20/'>
                    <FontAwesomeIcon icon={faInstagram} className='svg-inline--fa' />
                </a>
            </div>
        </footer>
    )
}