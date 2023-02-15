import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as cartActions from '../../../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CartItem.css';

const CartItem = ({item, handleCount}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItem = useSelector(cartActions.getCartItem(item.cartId));
    const [cartItemQuantity, setCartItemQuantity] = useState(item.quantity);
    console.log(cartItem);

    const toItemShow = e => {
        e.preventDefault();
        history.push(`/items/${item.id}`);
    }

    const handleQuantityChange = e => {
        e.preventDefault();
        setCartItemQuantity(e.target.value);
        const cartDup = {};
        cartDup["quantity"] = parseInt(cartItemQuantity);
        dispatch(cartActions.updateCartItem(cartDup));
        handleCount();
    }

    const handleDelete = e => {
        e.preventDefault();
        handleCount();
        dispatch(cartActions.deleteCartItem(item.cartId));
    }

    return (
        <div className="cart-item-wrapper">
            <div className="image-placeholder" onClick={toItemShow}></div>
            <div className="cart-item-info-wrapper">
                <p className="cart-item-name" onClick={toItemShow}>
                    {item.name}
                </p>
                <p className="cart-item-creator">by JAGEX</p>
                <p className="cart-item-in-stock">In Stock</p>
                <div className="cart-item-quantity">
                    <select
                        className="cart-item-quantity-selector"
                        value={cartItemQuantity}
                        onChange={handleQuantityChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <div className="cart-item-quantity-divider"></div>
                    <span className="cart-item-delete-button" onClick={handleDelete}>
                        Delete
                    </span>
                </div>
            </div>
            <span className="cart-item-price">
                {cartItem.price} GP
            </span>
        </div>
    )
}

export default CartItem;