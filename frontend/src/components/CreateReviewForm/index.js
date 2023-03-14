import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as reviewActions from '../../store/review';
import { useDispatch, useSelector } from 'react-redux';
import './CreateReviewForm.css';

const CreateReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [userName, setUserName] = useState(user.name)


    return (
        <div className="review-create-form-wrapper">
            <div className="review-create-form-name-change-wrapper">
                <div className="review-create-name-content-wrapper">
                    <span className="review-create-userName">{userName}</span>
                    <span className="review-create-form-change-name">Edit</span>
                </div>
            </div>
            <div className="review-create-form-main-wrapper">
            </div>
        </div>
    )

}

export default CreateReviewForm;