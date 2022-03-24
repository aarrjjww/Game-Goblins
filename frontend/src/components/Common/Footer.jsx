import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const dispatch = useDispatch();
    const shipping = () => {
        dispatch(push('/Shipping'));
    };
    const CART = () => {
        dispatch(push('/cart'));
    };
    useEffect(() => {
        if (pageUrl.includes('cart')) {
            setShowCheckoutButton(false);
        }
    }, []);

    return (
        <footer>
            <section class="footer">
                <div class="footer-sub">
                    {key !== null && (
                        <div class="footer-items">
                            <h3 class="subtotal">Subtotal: ${price}</h3>

                            {/* {showCheckoutButton ? (
                                <a href="/cart">
                                    <button className="checkout" onClick={CART}>
                                        Check your Cart
                                    </button>
                                </a>
                            ) : (
                                <a href="/cart">
                                    <button class="checkoutt" onClick={shipping}>
                                        Checkout
                                    </button>
                                </a>
                            )} */}
                            {showCheckoutButton ? (
                                <a href="/cart">
                                    <button className="checkout">Check your Cart</button>
                                </a>
                            ) : (
                                <a href="/Shipping">
                                    <button class="checkoutt">Checkout</button>
                                </a>
                            )}
                        </div>
                    )}

                    {/* <button class="checkout">Checkout</button> */}
                </div>
            </section>
        </footer>
    );
}
