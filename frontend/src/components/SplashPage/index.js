import React, { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import FrontPageItemIndex from '../FrontPageItemIndex';
import ItemShowPage from '../ItemShowPage';
import * as itemsActions from '../../store/items';
import CartIndex from '../Cart';

const SplashPage = () => {

    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div className="homepage-wrapper">
            <Switch>
                <Route path="/cart">
                    <NavBar />
                    <CartIndex />
                </Route>
                <Route path="/items/:id">
                    <NavBar />
                    <ItemShowPage />
                </Route>
                <Route path="/items/index">
                    <NavBar />
                    <CartIndex />
                </Route>
                <Route path="/">
                    <NavBar />
                    <FrontPageItemIndex />
                </Route>
            </Switch>
        </div>
    )
}

export default SplashPage;