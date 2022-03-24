import React, { useEffect, useState } from 'react';
import CartLogo from '../../assets/img/cart-logo.png';
import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import logo from '../../assets/img/game-logo.png';
import { push } from 'connected-react-router';
// import ImgSuperSports from '../../assets/img/SuperSports.png';
import cartbutton from '../../assets/img/cart-logo.png';
export default function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };
    const signIn = () => {
        dispatch(push('/signin'));
    };
    const cartbutton = () => {
        dispatch(push('/cart'));
    };
    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);

    return (
        <header>
            <div class="navgation">
                <div class="logo">
                    <img src={logo} alt="" />
                </div>
                <div class="navelements">
                    {/* <!-- <img class="cart" src="img/searchbar.png" /> --> */}

                    {/* <img class="cart" src="" /> */}
                    {/* <h4 class="sigin">SignIn</h4> */}
                    {/* <!-- <img class="cart" src="img/signinimg.png" /> --> */}
                    {checkUser && <img class="cart" onClick={cartbutton} src={CartLogo} />}
                    {checkUser ? (
                        <h4 class="sigin" onClick={signOutButton}>
                            LogOut
                        </h4>
                    ) : (
                        <h4 class="sigin" onClick={signIn}>
                            SignIn
                        </h4>
                    )}
                </div>
            </div>
        </header>
    );
}
