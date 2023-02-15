import React from 'react';
import '../FrontPageItemIndex.css';
import { useHistory } from 'react-router-dom';

const FrontPageItem = ({item}) => {
    const history = useHistory();

    const toItemShowPage = e => {
        history.push(`/items/${item.id}`);
    }

    if (!item) {
        return (
            <div></div>
        )
    }

    return (
        <div className="front-page-item-wrapper">
            <div onClick={toItemShowPage} id="link-to-item-show" className="front-page-img-placeholder">
                <img className="front-page-image" src={item.photourl}></img>
            </div>
            <span onClick={toItemShowPage} id="link-to-item-show" className="front-page-item-name">{item.name}</span>
        </div>
    )

}

export default FrontPageItem;