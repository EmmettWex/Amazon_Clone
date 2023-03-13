import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemShowPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, fetchItem } from '../../store/items';
import * as cartActions from '../../store/cart';

const ItemShowPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const item = useSelector(getItem(id));
    const [itemQuantity, setItemQuantity] = useState(1);
    const userId = useSelector(state => state.session?.user ? state.session.user.id : null);

    const addToCart = e => {
        e.preventDefault();
        dispatch(cartActions.addCartItem({ 'item_id': item.id, 'quantity': parseInt(itemQuantity), 'user_id': userId }))
    }

    useEffect(() => {
        dispatch(fetchItem(id));
    }, [dispatch]);

    if (!item) {
        return (
            <div></div>
        )
    }

    return (
        <div className="showpage-wrapper">
            <div className="item-information-wrapper">
                <div className="showpage-image-wrapper">
                    <img className="showpage-image" src={item.photourl}></img>
                </div>
                <div className="item-information">
                    <span className="showpage-item-name">{item.name}</span>
                    <div className="showpage-item-ratings">Ratings here?</div>
                    <div className="showpage-section-divider"></div>
                    <span className="showpage-item-price">{item.price} GP</span>
                    <div className="showpage-item-type">
                        <span className="item-type-left">Item type</span>
                        <span className="item-type-right">{item.itemType}</span>
                    </div>
                    <div className="showpage-section-divider"></div>
                    <span id="about-this-item">About this item</span>
                    <span className="showpage-item-description">
                        {item.description}
                    </span>
                </div>
                <div className="transaction-wrapper">
                    <span className="showpage-item-price">{item.price} GP</span>
                    <span id="in-stock-message">In Stock.</span>
                    <div className="item-quantity-wrapper">
                        <select
                            value={itemQuantity}
                            className="item-quantity-selector"
                            onChange={(e) => {setItemQuantity(e.target.value)}}    
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <span id="qty-label">Qty:</span>
                    </div>
                    <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
                    {/* <button className="buy-now-button">Buy Now</button> */}
                </div>
            </div>
            <div id="full-section-divider">
                <div id="section-divider-line"></div>
            </div>
            {/* <div className="ratings-wrapper">Ratings will go here</div> */}
            <div className="item-review-wrapper">
                {/* reviews will go here */}
            </div>
        </div>
    )
}

export default ItemShowPage;