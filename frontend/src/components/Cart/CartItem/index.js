import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as cartActions from '../../../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import './CartItem.css';

const CartItem = ({item}) => {

    return (
        <div className="cart-item-wrapper">
            <div className="image-placeholder"></div>
            <div className="cart-item-info-wrapper">
                test
            </div>
            <div></div>
        </div>
    )
}

export default CartItem;