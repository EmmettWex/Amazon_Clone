import React, { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import FrontPageItemIndex from '../FrontPageItemIndex';
import ItemShowPage from '../ItemShowPage';
import * as itemsActions from '../../store/items';
import CartIndex from '../Cart';

const SplashPage = () => {

    return (
        <div className="homepage-wrapper">
            <NavBar />
            <Switch>
                <Route path="/cart">
                    {/* <NavBar /> */}
                    <CartIndex />
                </Route>
                <Route path="/items/:id">
                    {/* <NavBar /> */}
                    <ItemShowPage />
                </Route>
                <Route path="/items/index">
                    
                </Route>
                <Route path="/">
                    <FrontPageItemIndex />
                </Route>
            </Switch>
        </div>
    )
}

export default SplashPage;