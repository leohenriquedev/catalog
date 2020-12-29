import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HelloWorld from './pages/HelloWorld';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HelloWorld}></Route>
            </Switch>
        </BrowserRouter>
    );
}