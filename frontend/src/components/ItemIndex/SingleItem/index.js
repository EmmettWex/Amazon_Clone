import React from 'react';
import { useHistory } from 'react-router-dom';
import '../ItemIndex.css';

const SingleItem = ({item}) => {
    const history = useHistory();

    const toItemShowPage = e => {
        e.preventDefault();
        history.push(`/items/${item.id}`)
    }

    return (
        <div className="index-item-component-wrapper">
            <div className="index-item-image-wrapper" onClick={toItemShowPage}>
                <img src={item.photourl} className="index-item-image" />
            </div>
            <div className="index-item-info-wrapper">
                <span className="index-item-name" onClick={toItemShowPage}>{item.name}</span>
                <span className="index-item-description">{item.description}</span>
                <span className="index-item-price">
                    Price: <span className="index-item-price-amount">{item.price} GP</span>
                </span>
            </div>
        </div>
    )
}

export default SingleItem;