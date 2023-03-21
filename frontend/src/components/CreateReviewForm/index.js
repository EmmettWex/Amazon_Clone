import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchItem } from '../../store/items';
import * as reviewActions from '../../store/review';
import { useDispatch, useSelector } from 'react-redux';
import './CreateReviewForm.css';
import { getItem } from '../../store/items';
import emptyStar from '../../assets/images/empty_star.png';
import filledStar from '../../assets/images/filled_star.png';
import exclamation from '../../assets/images/exclamation.png'

const CreateReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const { id } = useParams();
    const item = useSelector(getItem(id));
    const [errors, setErrors] = useState([]);
    const [nameChange, setNameChange] = useState(true);

    const [userName, setUserName] = useState(user?.name ? user.name : '');
    const [rating, setRating] = useState(0);
    const [headline, setHeadline] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!item) {
            dispatch(fetchItem(id));
        }
    }, [dispatch])

    const invokeSetNameChange = e => {
        if (nameChange) {
            setNameChange(false);
        } else {
            setNameChange(true);
        }
    }

    const submitItemReview = e => {
        e.preventDefault();

        const review = {
            item_id: item.id,
            author_id: user.id,
            description: description,
            headline: headline,
            rating: rating,
            display_name: userName
        }
        setErrors([])
        return dispatch(reviewActions.addReview(review, history))
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
                <p className="create-review-errors">
                    <img className="exclamation" src={exclamation} />
                    {starError}
                </p>
            )
        }
    }

    const headlineErrorChecker = () => {
        if (headlineError) {
            return (
                <p className="create-review-errors">
                    <img className="exclamation" src={exclamation} />
                    {headlineError}
                </p>
            )
        }
    }

    const descriptionErrorChecker = () => {
        if (descriptionError) {
            return (
                <p className="create-review-errors">
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
                <div className="review-create-name-content-wrapper">
                    <span className="review-create-userName">{userName}</span>
                    <span className="review-create-form-change-name" onClick={invokeSetNameChange}>Edit</span>
                </div>
            )
        } else {
            return (
                <div className="review-create-name-content-wrapper">
                    <input className="review-create-name-change-input"
                        type="text"
                        value={userName}
                        onChange={e => {
                            setUserName(e.target.value)}
                        }>
                    </input>
                    <button className="review-create-form-save-button"
                        onClick={e => {
                            invokeSetNameChange();
                        }}
                    >Save</button>
                    <button className="review-create-form-cancel-button"
                        onClick={e => {
                            setUserName(user.name);
                            invokeSetNameChange();
                        }}
                    >Cancel</button>
                </div>
            )
        }
    }

    if (!item) {
        return <div></div>
    }

    return (
        <div className="review-create-form-wrapper">
            <div className="review-create-form-name-change-wrapper">
                {reviewNameChange()}
            </div>
            <div className="review-create-form-main-wrapper">
                <div className="review-create-form-main-content-wrapper">
                    <div className="review-create-title-wrapper">
                        <h1 className="review-create-title">Create Review</h1>
                        <div className="review-create-title-item-subsection">
                            <img className="review-create-form-title-image" src={item.photourl}/>
                            <span className="review-create-form-title-item-name">{item.name}</span>
                        </div>
                    </div>
                    <div className="review-create-form-content-divider"></div>
                    <div className="review-create-title-wrapper">
                        <div className="review-create-ratings-top-wrapper">
                            <h2 className="review-create-sub-title">Overall rating</h2>
                            <span className="review-create-clear-ratings" onClick={e => {setRating(0)}}>Clear</span>
                        </div>
                        <div className="review-create-star-ratings">
                            {
                                ratingStars().map((star, i) => {
                                    return (
                                        <img
                                            className="review-create-rating-stars"
                                            src={star}
                                            onClick={e => {setRating(i+1)}}
                                            key={star + `${i}`}
                                        />
                                    )
                                })
                            }
                        </div>
                        {starErrorChecker()}
                    </div>
                    <div className="review-create-form-content-divider"></div>
                    <div className="review-create-title-wrapper">
                        <h2 className="review-create-sub-title">Add a headline</h2>
                        <input
                            className="review-create-headline-textbox"
                            type="text"
                            placeholder="What's most important to know?"
                            value={headline}
                            onChange={e => {setHeadline(e.target.value)}}
                        />
                        {headlineErrorChecker()}
                    </div>
                    <div className="review-create-form-content-divider"></div>
                    <div className="review-create-title-wrapper">
                        <h2 className="review-create-sub-title">Add a written review</h2>
                        <textarea
                            className="review-create-description"
                            placeholder="What did you like or dislike? What did you use this product for?"
                            value={description}
                            onChange={e => {setDescription(e.target.value)}}
                        />
                        {descriptionErrorChecker()}
                    </div>
                    <div className="review-create-form-content-divider"></div>
                    <div className="review-create-title-wrapper">
                        <button className="review-create-submit-button" onClick={e => {
                            e.preventDefault();
                            submitItemReview(e)}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateReviewForm;