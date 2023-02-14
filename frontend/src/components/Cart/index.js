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

    const totalPrice = () => {
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            const itemPrice = cart[i];
            // console.log(typeof itemPrice.price)
            total += itemPrice.price;
        }
        return total;
    }

    // console.log(cart);
    
    if (!cart) {
        return (
            <div></div>
        )
    }

    if (cart[0]) {
        return (
            <div className="cart-index-wrapper">
                <div className="cart-items-wrapper">
                    <span id="shopping-cart">Shopping Cart</span>
                    <span id="shopping-cart-price">Price</span>
                    <div className="shopping-cart-divider"></div>
                    {
                        cart.map((item) => {
                            return <CartItem item={item} />
                        })
                    }
                    <div className="shopping-cart-divider"></div>
                    <span className="cart-subtotal">
                        Subtotal ({cart.length} items):
                        <span> {totalPrice()} GP</span>
                    </span>
                </div>
                <div className="proceed-to-checkout">
                    <span className="cart-subtotal">
                        Subtotal ({cart.length} items):
                        <span> {totalPrice()} GP</span>
                    </span>
                    <button className="checkout-button">Checkout</button>
                </div>
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