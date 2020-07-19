import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from '../pages/Landing';
import Customer from '../pages/Customer';
import Products from '../pages/Products';
import ConsentType from '../pages/ConsentType';
import FAQ from '../pages/FAQ';

const Routes = () => {
        return (
            <Switch>
                <Route path="/landing" component={Landing} />
                <Route exact path="/customer" component={Customer} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/consent" component={ConsentType} />
                <Route exact path="/faq" component={FAQ} />
                <Redirect to="/landing" />
            </Switch>
        );
}

export default Routes;
