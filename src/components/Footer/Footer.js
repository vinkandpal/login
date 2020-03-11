import React from 'react';

import Link from '../UI/Link/Link';
import classes from './Footer.scss';

const Footer = ( props ) => {
    return (
        <footer className={classes.Footer} className='footerNote text-center'>
            <p className="footerNote__text">
                Your account for everything Autodesk
            </p>
            <Link value='Learn more' underline={true} classes='footerNote__link' />
      </footer>
    );
};

export default Footer;