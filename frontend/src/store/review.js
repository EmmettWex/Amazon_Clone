import csrfFetch from './csrf';

const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        payload: review
    }
}

const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        payload: reviews
    }
}

const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        payload: reviewId
    }
}

export const getReview = reviewId => state => {
    if (state.reviews) {
        return state.reviews[reviewId];
    } else {
        return null;
    }
}

export const getReviews = state => {
    if (state.reviews) {
        return Object.values(state.reviews);
    } else {
        return [];
    }
}

export const fetchReview = reviewId => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data));
        return response;
    }
}

export const fetchReviews = itemId => async dispatch => {
    const response = await csrfFetch(`/api/items/${itemId}/reviews`);
    
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReviews(data.reviews));
        return response;
    }
}

export const addReview = (review, history) => async dispatch => {
    const response = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify(review)
    });
    
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data));
        history.push(`/items/${review.item_id}`);
        return response;
    }
}

export const deleteReview = reviewId => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeReview(reviewId));
        return response;
    }
}

export const updateReview = (review, history) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify(review)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data));
        history.push(`/items/${review.item_id}`);
        return response;
    }
}

const reviewReducer = ( state = {}, action ) => {
    let newState = { ...state };
    
    switch (action.type) {
        case RECEIVE_REVIEW:
            newState[action.payload.id] = action.payload;
            return newState;
        case RECEIVE_REVIEWS:
            newState = action.payload;
            return newState;
        case REMOVE_REVIEW:
            delete(newState[action.payload]);
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;