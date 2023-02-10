import csrfFetch from './csrf';

const RECEIVE_ITEM = 'items/RECEIVE_ITEM';
const RECEIVE_ITEMS = 'items/RECEIVE_ITEMS';

const receiveItem = item => {
    return {
        type: RECEIVE_ITEM,
        payload: item
    }
}

const receiveItems = items => {
    return {
        type: RECEIVE_ITEMS,
        payload: items
    }
}

export const fetchItem = itemId => async dispatch => {
    const response = await csrfFetch(`/api/items/${itemId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItem(data.item))
        return response;
    }
}

export const fetchItems = () => async dispatch => {
    const response = await csrfFetch(`/api/items`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItems(data.items));
        return response;
    }
}

const itemsReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case RECEIVE_ITEM:
            newState[action.payload.id] = action.payload; 
            return newState;
        case RECEIVE_ITEMS:
            newState = action.payload;
            return { newState };
        default:
            return state;
    }
}

export default itemsReducer;