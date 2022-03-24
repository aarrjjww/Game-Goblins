import React from 'react';
import footerlogo from '../../assets/img/footer-logo.png';
function CommonFooterText() {
    return (
        <div>
            {' '}
            <div class="footer-logo">
                <img class="footer-logo" src={footerlogo} alt="" />
            </div>
            <h5 class="footer-description">
                High-quality materials are made just for you. Designed for modern Guys and Girls
            </h5>
            <h2 class="contact">Contact</h2>
            <h5 class="contactdetails">Gaming-prod@gamegoblins.com | Hotline: +1 131 138 138</h5>
        </div>
    );
}

export default CommonFooterText;
