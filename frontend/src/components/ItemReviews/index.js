import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, fetchReviews } from '../../store/review';
import './ItemReviews.css';
import pfp from '../../assets/images/osrzonpfp.jpg';
import emptyStar from '../../assets/images/empty_star.png';
import filledStar from '../../assets/images/filled_star.png';

const ItemReviews = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const reviews = useSelector(getReviews);
    
    useEffect(() => {
        dispatch(fetchReviews(id));
    }, [dispatch])

    const toCreateReviewForm = () => {
        history.push(`/items/${1}/createReview`)
    }

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

    if (!reviews[0]) {
        return <div></div>
    }

    return (
        <div className="item-reviews-section-wrapper">
            <div className="item-reviews-section-left">
                <h1 className="item-reviews-section-left-title">Customer reviews</h1>
                <div className="item-reviews-section-left-divider" />
                <h2 className="item-reviews-section-left-sub-title">Review this product</h2>
                <span className="share-your-thoughts">Share your thoughts with other customers</span>
                <button className="item-reviews-button" onClick={toCreateReviewForm}>Write a customer review</button>
                <div className="item-reviews-section-left-divider" />
            </div>
            <div className="item-reviews-section-right">
                <div className="item-reviews-section-right-content-wrapper">
                    <h2 className="item-reviews-section-left-sub-title">Reviews from Gielinor</h2>
                    {
                        reviews.map((review, i) => {
                            return <div key={i * 13} className="item-reviews-section-right-review">
                                <div className="item-reviews-section-right-display-name">
                                    <img className="item-reviews-section-right-pfp" src={pfp} />
                                    <span>{review.displayName}</span>
                                </div>
                                <div className="item-reviews-section-right-ratings">
                                    {
                                        ratingStars(review.rating).map((star, i) => {
                                            return <img src={star} key={i * 11} />
                                        })
                                    }
                                    <span>{review.headline}</span>
                                </div>
                                <span className="item-reviews-section-right-created">Reviewed in Gielinor on {review.createdOn}</span>
                                <span className="item-reviews-section-right-description">{review.description}</span>
                            </div>
                        })
                    }
                    {/* <div className="item-reviews-section-right-display-name">
                        <img className="item-reviews-section-right-pfp" src={pfp} />
                        <span>{review.displayName}</span>
                    </div>
                    <div className="item-reviews-section-right-ratings">
                        {
                            ratingStars(review.rating).map((star, i) => {
                                return <img src={star} key={i*11}/>
                            })
                        }
                        <span>{review.headline}</span>
                    </div>
                    <span className="item-reviews-section-right-created">Reviewed in Gielinor on {review.createdOn}</span>
                    <span className="item-reviews-section-right-description">{review.description}</span> */}

                </div>
            </div>
        </div>
    )
}

export default ItemReviews;