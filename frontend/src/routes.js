import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Catalog from './pages/Catalog';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Catalog}></Route>
            </Switch>
        </BrowserRouter>
    );
}