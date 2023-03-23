import csrfFetch from "./csrf";

const RECEIVE_CART_ITEMS = 'carts/RECEIVE_CART_ITEMS';
const RECEIVE_CART_ITEM = 'carts/RECEIVE_CART_ITEM';
const REMOVE_CART_ITEM = 'carts/REMOVE_CART_ITEM';
const CLEAR_CART_ITEMS = 'carts/CLEAR_CART_ITEMS';

const receiveCartItem = cartItem => {
    return {
        type: RECEIVE_CART_ITEM,
        payload: cartItem
    }
}

const receiveCartItems = cartItems => {
    return {
        type: RECEIVE_CART_ITEMS,
        payload: cartItems
    }
}

const removeCartItem = cartItemId => {
    return {
        type: REMOVE_CART_ITEM,
        payload: cartItemId
    }
}

export const clearCartItems = () => {
    return {
        type: CLEAR_CART_ITEMS
    }
}

export const getCartItem = cartItemId => state => {
    if (state.cart) {
        return state.cart[cartItemId];
    } else {
        return null;
    }
}

export const getCartItems = state => {
    if (state.cart) {
        return Object.values(state.cart);
    } else {
        return [];
    }
}

export const addCartItem = cartItem => async dispatch => {
    const response = await csrfFetch(`/api/carts`, {
        method: 'POST',
        body: JSON.stringify(cartItem)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveCartItem(data));
        return response;
    }
}

export const fetchCartItem = cartItemId => async dispatch => {
    const response = await csrfFetch(`/api/carts/${cartItemId}`)
    
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveCartItem(data));
        return response;
    }
}

export const fetchCartItems = userId => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/carts`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveCartItems(data.cart));
        return response;
    }
}

export const deleteCartItem = cartItemId => async dispatch => {
    const response = await csrfFetch(`/api/carts/${cartItemId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeCartItem(cartItemId));
        return response;
    }
}

export const updateCartItem = cartItem => async dispatch => {
    const { user_id, item_id, quantity } = cartItem;

    const response = await csrfFetch(`/api/carts/${cartItem.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            user_id,
            item_id,
            quantity
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveCartItem(data));
    }
}

const cartItemReducer = ( state = {}, action ) => {
    let newState = { ...state };

    switch (action.type) {
        case RECEIVE_CART_ITEM:
            newState[action.payload.id] = action.payload; 
            return newState;
        case RECEIVE_CART_ITEMS:
            newState = action.payload
            return newState;
        case REMOVE_CART_ITEM:
            delete(newState[action.payload]);
            return newState;
        case CLEAR_CART_ITEMS:
            return {};
        default:
            return state;
    }
}

export default cartItemReducer;