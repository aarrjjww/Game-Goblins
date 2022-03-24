import React, { useState } from 'react';
// import ImgCover from '../../assets/img/back.png';
// import ImageCartLogo from '../../assets/img/Dribbble-Light-Preview.png';
// import ImgMainBg from '../../assets/img/Mask Group 4.png';
// import ImgRect from '../../assets/img/Rectangle 162.png';
// import ImgCont from '../../assets/img/EXPERIENCE THETRUE POWERBY SUPER SPORTS.png';
import background from '../../assets/img/background.png';
import adawong from '../../assets/img/asasa.png';

const MainImage = () => {
    const [checkUser, setCheckUser] = useState(false);
    return (
        <>
            <section class="main">
                <img src={background} alt="" class="background" />
                <div>
                    <img class="ada" src={adawong} alt="" />
                </div>
                <h1 class="intro-text">
                    Welcome To <br />
                    The World Of Gaming
                </h1>
            </section>
        </>
    );
};

export default MainImage;
