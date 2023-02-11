import React, { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import ItemIndex from '../ItemIndex';
import ItemShowPage from '../ItemShowPage';
import * as itemsActions from '../../store/items';

const SplashPage = () => {
    return (
        <div className="homepage-wrapper">
            <Switch>
                <Route path="/items/:id">
                    <NavBar />
                    <ItemShowPage />
                </Route>
                <Route path="/">
                    <NavBar />
                    <ItemIndex />
                </Route>
            </Switch>
        </div>
    )
}

export default SplashPage;