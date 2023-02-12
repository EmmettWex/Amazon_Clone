import React, { useState, useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import './ItemShowPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, fetchItem } from '../../store/items';

const ItemShowPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const item = useSelector(getItem(id));

    useEffect(() => {
        dispatch(fetchItem(id));
    }, [dispatch, id]);

    if (!item) {
        return (
            <div></div>
        )
    }

    console.log(item);

    return (
        <div className="showpage-wrapper">
            <div className="item-information-wrapper">
                <div className="showpage-image-wrapper">
                    Image goes here
                    <img className="showpage-image"></img>
                </div>
                <div className="item-information">
                    {item.name}
                    <span>Ratings here?</span>
                </div>
                <div className="transaction-wrapper">
                    <span className="showpage-item-price">{item.price} GP</span>
                    <select className="item-quantity-selector">
                        {/* iterate through nums here */}
                    </select>
                    <button className="add-to-cart-button">Add to Cart</button>
                    <button className="buy-now-button">Buy Now</button>
                </div>
            </div>
            <div className="item-review-wrapper">
                {/* reviews will go here */}
            </div>

        </div>
    )
}

export default ItemShowPage;