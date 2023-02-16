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

    // useEffect(() => {
    //     dispatch(cartActions.fetchCartItem(item.cartId))
    // }, [dispatch])

    const toItemShow = e => {
        e.preventDefault();
        history.push(`/items/${item.id}`);
    }

    const handleQuantityChange = e => {
        e.preventDefault();
        setCartItemQuantity(parseInt(e.target.value));
        const cartDup = {};
        cartDup['id'] = item.cartId;
        cartDup['item_id'] = item.id;
        cartDup['user_id'] = item.userId;
        cartDup["quantity"] = parseInt(e.target.value);
        dispatch(cartActions.updateCartItem(cartDup));
    }

    const handleDelete = e => {
        e.preventDefault();
        dispatch(cartActions.deleteCartItem(item.cartId));
        handleCount();
    }
    
    return (
        <div className="cart-item-wrapper">
            <div className="image-placeholder" onClick={toItemShow}>
                <img src={item.photourl} />
            </div>
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
                {item.price} GP
            </span>
        </div>
    )
}

export default CartItem;