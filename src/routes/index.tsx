import { 
    HashRouter as Router,
    Route, 
    Switch 
} from "react-router-dom"
import React, { FC, lazy } from "react";
import RootPage from "../pages/root"

const AppRoutes:FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" exact={true} component={RootPage}/>
            </Switch>
        </Router>
    );
};

export default AppRoutes;