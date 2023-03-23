import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './ItemShowPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, fetchItem } from '../../store/items';
import { fetchReviews, getReviews } from '../../store/review';
import * as cartActions from '../../store/cart';
import ItemReviews from '../ItemReviews/index';
import emptyStar from '../../assets/images/empty_star.png';
import filledStar from '../../assets/images/filled_star.png';

const ItemShowPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const item = useSelector(getItem(id));
    const reviews = useSelector(getReviews);
    const [itemQuantity, setItemQuantity] = useState(1);
    const userId = useSelector(state => state.session?.user ? state.session.user.id : null);

    const addToCart = e => {
        e.preventDefault();
        if (userId) {
            dispatch(cartActions.addCartItem({ 'item_id': item.id, 'quantity': parseInt(itemQuantity), 'user_id': userId }))
        } else {
            history.push(`/login`)
        }
    }

    useEffect(() => {
        dispatch(fetchItem(id));
        dispatch(fetchReviews(id))
    }, [dispatch]);

    const ratingStars = (reviewRating) => {
        const stars = [];
        let totalFilledStars = reviewRating;

        for (let i = 0; i < 5; i++) {
            if (totalFilledStars > 0) {
                stars.push(filledStar);
                totalFilledStars--;
            } else {
                stars.push(emptyStar);
            }
        }
        return stars;
    }

    const averageRating = (reviewsArray) => {
        let totalStars = 0;

        for (let i = 0; i < reviewsArray.length; i++) {
            const stars = reviewsArray[i].rating;
            totalStars += stars;
        }

        return Math.round(totalStars / reviews.length * 10) / 10;
    }

    if (!item || !reviews) {
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
                    <div className="showpage-item-ratings">
                        {
                            ratingStars(averageRating(reviews)).map((star, i) => {
                                return <img src={star} key={i * 17} />
                            })
                        }
                    </div>
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
                    <button className="add-to-cart-button" onClick={addToCart}>{ userId ? 'Add to Cart' : 'Log in to add to cart'}</button>
                    {/* <button className="buy-now-button">Buy Now</button> */}
                </div>
            </div>
            <div id="full-section-divider">
                <div id="section-divider-line"></div>
            </div>
            <ItemReviews id={id} />
        </div>
    )
}

export default ItemShowPage;