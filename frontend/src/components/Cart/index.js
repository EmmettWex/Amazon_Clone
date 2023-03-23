import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as cartActions from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './cart.css';
import CartItem from './CartItem/index';

const CartIndex = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state?.session?.user);
    const cart = useSelector(cartActions.getCartItems);

    // will be able to re-render the parent component using this.
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        if (sessionUser) {
            dispatch(cartActions.fetchCartItems(sessionUser.id));
        }
    }, [dispatch, count]);

    const handleCheckout = e => {
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            dispatch(cartActions.deleteCartItem(item.cartId));
        }
        history.push("/");
    }

    const totalPrice = () => {
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            total += (product.price * product.quantity);
        }
        return total;
    }
    
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
                            return <CartItem item={item} handleCount={handleCount} count={count} />
                        })
                    }
                    <div className="shopping-cart-divider"></div>
                    <span className="cart-subtotal">
                        Subtotal ({cart.length} items):
                        <span> {totalPrice()} GP</span>
                    </span>
                </div>
                <div className="proceed-to-checkout">
                    <span id="checkout-cart-subtotal" className="cart-subtotal">
                        Subtotal ({cart.length} items):
                        <span> {totalPrice()} GP</span>
                    </span>
                    <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
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