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

export const getItem = itemId => state => {
    if (state.items) {
        return state.items[itemId];
    } else {
        return null;
    }
}

export const getItems = state => {
    if (state.items) {
        return state.items;
    } else {
        return []
    }
}

// this is the unmodified version
// export const getItems = state => {
//     if (state.items) {
//         return Object.values(state.items);
//     } else {
//         return []
//     }
// }

export const fetchItem = itemId => async dispatch => {
    const response = await csrfFetch(`/api/items/${itemId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItem(data.item))
        return response;
    }
}

// also need a fetch items by category

// export const fetchItems = () => async dispatch => {
//     const response = await csrfFetch(`/api/items`);

//     if (response.ok) {
//         const data = await response.json();
//         dispatch(receiveItems(data.items));
//         return response;
//     }
// }

export const fetchItems = (searchTerm, itemType) => async dispatch => {
    const response = await csrfFetch(`/api/items`);

    if (response.ok) {
        const data = await response.json();

        const allItems = Object.values(data.items);

        if (itemType && !searchTerm) {
            // if only type exists, search only by the type

            const filteredItems = allItems.filter(item => item.type === itemType);
            dispatch(receiveItems(filteredItems));

        } else if (itemType && searchTerm) {
            // search by type first, then search by search terms
            // this only happens if someone uses the drop down menu
            // in their search

            const filteredByType = allItems.filter(item => item.type === itemType);
            const fullyFiltered = filteredByType.filter(item => item.name.includes(searchTerm));

            dispatch(receiveItems(fullyFiltered));

        } else if (!itemType && searchTerm) {
            // search by search terms first, then also search by type

            const filteredItems = allItems.filter(item =>
                item.type.includes(searchTerm) || item.name.includes(searchTerm)
            );

            dispatch(receiveItems(filteredItems));

        } else if (!itemType && !searchTerm) {
            dispatch(receiveItems(allItems))
        }

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
            return newState;
        default:
            return state;
    }
}

export default itemsReducer;