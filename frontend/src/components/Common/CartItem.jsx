import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';

const CartItem = ({ cart, quantity, cartId }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);

    const clickPlusCart = () => {
        dispatch(increaseCart(cartId));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(cartId));
    };

    useEffect(() => {
        console.log(cart.image);
        console.log(cart);
        console.log(carts);
    }, []);

    return (
        <>
            <section class="items">
                <div class="gaming-items">
                    <div class="psp-item">
                        <img src={'https://res.cloudinary.com/dxxt0fhlz/' + cart.image} class="psp-image" alt="" />
                    </div>
                    <div class="item-info">
                        <h3 class="item-name">{cart.name}</h3>
                        <h4 class="price">${cart.price}</h4>
                        <h5 class="description">{cart.descriptiona}</h5>
                        {/* <button class="cart-button">Add To Cart</button> */}
                        <button class="cart-buttonn">
                            <span class="minus" onClick={clickMinusCart}>
                                －
                            </span>
                            <span class="count">{quantity}</span>
                            <span class="plus" onClick={clickPlusCart}>
                                +
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CartItem;
