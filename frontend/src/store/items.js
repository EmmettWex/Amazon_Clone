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
        return [];
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

export const fetchItems = (searchTerm, type) => async dispatch => {
    const response = await csrfFetch(`/api/items/?item_type=${type}&search_terms=${searchTerm}`);

    if (response.ok) {
        const data = await response.json();

        const allItems = Object.values(data.items);
        dispatch(receiveItems(allItems));
        return response;
    }

        // if (type && !searchTerm) {
        //     // if only type exists, search only by the type

        //     const filteredItems = allItems.filter(item => item.itemType === type);
        //     dispatch(receiveItems(filteredItems));

        // } else if (type && searchTerm) {
        //     // search by type first, then search by search terms
        //     // this only happens if someone uses the drop down menu
        //     // in their search

        //     const filteredByType = allItems.filter(item => item.itemType === type);
        //     const fullyFiltered = filteredByType.filter(item => item.name.toLowerCase().includes(searchTerm));

        //     dispatch(receiveItems(fullyFiltered));

        // } else if (!type && searchTerm) {
        //     // search by search terms first, then also search by type

        //     const filteredItems = allItems.filter(item =>
        //         item.itemType.includes(searchTerm) || item.name.toLowerCase().includes(searchTerm)
        //     );

        //     dispatch(receiveItems(filteredItems));

        // } else if (!type && !searchTerm) {
        //     dispatch(receiveItems(allItems))
        // }
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