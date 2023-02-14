import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as cartActions from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import './cart.css';
import CartItem from './CartItem/index';

const CartIndex = () => {
    const dispatch = useDispatch();
    const cart = useSelector(cartActions.getCartItems);

    useEffect(() => {
        dispatch(cartActions.fetchCartItems())
    }, [dispatch]);

    console.log(cart);
    
    if (!cart) {
        return (
            <div></div>
        )
    }

    if (cart[0]) {
        return (
            <div className="cart-index-wrapper">
                {
                    cart.map((item) => {
                        <CartItem item={item} />
                    })
                }
            </div>
        )
    } else {
        return (
            <div className="cart-index-wrapper">
                <div className="cart-is-empty">
                    <span id="empty-cart">
                        Your shopping cart is empty.
                    </span>
                    <span>
                        Please click here to
                        <Link id="continue-shopping" to="/"> continue shopping.
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
}

export default CartIndex;