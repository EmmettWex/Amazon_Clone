import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchItem } from '../../store/items';
import * as reviewActions from '../../store/review';
import { useDispatch, useSelector } from 'react-redux';
import './UpdateReviewForm.css';
import { getItem } from '../../store/items';
import emptyStar from '../../assets/images/empty_star.png';
import filledStar from '../../assets/images/filled_star.png';
import exclamation from '../../assets/images/exclamation.png'

const UpdateReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const { itemId, reviewId } = useParams();
    const item = useSelector(getItem(itemId));
    const review = useSelector(reviewActions.getReview(reviewId));
    const [errors, setErrors] = useState([]);
    const [nameChange, setNameChange] = useState(true);
    const [userName, setUserName] = useState(review.displayName);
    const [rating, setRating] = useState(review.rating);
    const [headline, setHeadline] = useState(review.headline);
    const [description, setDescription] = useState(review.description);

    useEffect(() => {
        if (!item) {
            dispatch(fetchItem(itemId));
        }
        if (!review) {
            dispatch(reviewActions.fetchReview(reviewId))
        }
    }, [dispatch]);

    const invokeSetNameChange = e => {
        if (nameChange) {
            setNameChange(false);
        } else {
            setNameChange(true);
        }
    }

    const submitItemReviewUpdate = e => {
        e.preventDefault();

        const review = {
            id: reviewId,
            item_id: item.id,
            author_id: user.id,
            description: description,
            headline: headline,
            rating: rating,
            display_name: userName
        }
        setErrors([])
        return dispatch(reviewActions.updateReview(review, history))
            .catch(async (response) => {
                let data;
                try {
                    data = await response.clone().json();
                } catch {
                    data = await response.text();
                }

                if (data?.errors) {
                    setErrors(data.errors);
                } else if (data) {
                    setErrors([data]);
                } else {
                    setErrors([response.statusText]);
                }
            });
    }

    let starError;
    let headlineError;
    let descriptionError;

    if (errors[0]) {
        starError = errors[0].includes("Rating must be greater than or equal to 1") ? "Please select a star rating" : null;
        headlineError = errors[0].includes("Headline can't be blank") ? "Please enter your headline" : null;
        descriptionError = errors[0].includes("Description can't be blank") ? "Please add a written review" : null;
    }

    const starErrorChecker = () => {
        if (starError) {
            return (
                <p className="update-review-errors">
                    <img className="exclamation" src={exclamation} />
                    {starError}
                </p>
            )
        }
    }

    const headlineErrorChecker = () => {
        if (headlineError) {
            return (
                <p className="update-review-errors">
                    <img className="exclamation" src={exclamation} />
                    {headlineError}
                </p>
            )
        }
    }

    const descriptionErrorChecker = () => {
        if (descriptionError) {
            return (
                <p className="update-review-errors">
                    <img className="exclamation" src={exclamation} />
                    {descriptionError}
                </p>
            )
        }
    }

    const ratingStars = () => {
        let totalFilledStars = rating;
        const stars = [];

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

    const reviewNameChange = () => {
        if (nameChange) {
            return (
                <div className="review-update-name-content-wrapper">
                    <span className="review-update-userName">{userName}</span>
                    <span className="review-update-form-change-name" onClick={invokeSetNameChange}>Edit</span>
                </div>
            )
        } else {
            return (
                <div className="review-update-name-content-wrapper">
                    <input className="review-update-name-change-input"
                        type="text"
                        value={userName}
                        onChange={e => {
                            setUserName(e.target.value)
                        }
                        }>
                    </input>
                    <button className="review-update-form-save-button"
                        onClick={e => {
                            invokeSetNameChange();
                        }}
                    >Save</button>
                    <button className="review-update-form-cancel-button"
                        onClick={e => {
                            setUserName(user.name);
                            invokeSetNameChange();
                        }}
                    >Cancel</button>
                </div>
            )
        }
    }

    if (!item || !review) {
        return <div></div>
    }

    return (
        <div className="review-update-form-wrapper">
            <div className="review-update-form-name-change-wrapper">
                {reviewNameChange()}
            </div>
            <div className="review-update-form-main-wrapper">
                <div className="review-update-form-main-content-wrapper">
                    <div className="review-update-title-wrapper">
                        <h1 className="review-update-title">Update Review</h1>
                        <div className="review-update-title-item-subsection">
                            <img className="review-update-form-title-image" src={item.photourl} />
                            <span className="review-update-form-title-item-name">{item.name}</span>
                        </div>
                    </div>
                    <div className="review-update-form-content-divider"></div>
                    <div className="review-update-title-wrapper">
                        <div className="review-update-ratings-top-wrapper">
                            <h2 className="review-update-sub-title">Overall rating</h2>
                            <span className="review-update-clear-ratings" onClick={e => { setRating(0) }}>Clear</span>
                        </div>
                        <div className="review-update-star-ratings">
                            {
                                ratingStars().map((star, i) => {
                                    return (
                                        <img
                                            className="review-update-rating-stars"
                                            src={star}
                                            onClick={e => { setRating(i + 1) }}
                                            key={i}
                                        />
                                    )
                                })
                            }
                        </div>
                        {starErrorChecker()}
                    </div>
                    <div className="review-update-form-content-divider"></div>
                    <div className="review-update-title-wrapper">
                        <h2 className="review-update-sub-title">Update your headline</h2>
                        <input
                            className="review-update-headline-textbox"
                            type="text"
                            placeholder="What's most important to know?"
                            value={headline}
                            onChange={e => { setHeadline(e.target.value) }}
                        />
                        {headlineErrorChecker()}
                    </div>
                    <div className="review-update-form-content-divider"></div>
                    <div className="review-update-title-wrapper">
                        <h2 className="review-update-sub-title">Update your written review</h2>
                        <textarea
                            className="review-update-description"
                            placeholder="What did you like or dislike? What did you use this product for?"
                            value={description}
                            onChange={e => { setDescription(e.target.value) }}
                        />
                        {descriptionErrorChecker()}
                    </div>
                    <div className="review-update-form-content-divider"></div>
                    <div className="review-update-title-wrapper">
                        <button className="review-update-submit-button" onClick={e => {
                            e.preventDefault();
                            submitItemReviewUpdate(e)
                        }}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateReviewForm;