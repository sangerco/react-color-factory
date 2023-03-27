import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Colors from "./Colors";
import ColorPage from "./ColorPage";



const Routes = ({ colors }) => {
    return (
        <Switch>
            <Route exact path='/colors'><Colors colors={ colors }/></Route>
            <Route exact path='/colors/:color'><ColorPage /></Route>
            <Redirect to='/colors' />
        </Switch>
    )
}

export default Routes;