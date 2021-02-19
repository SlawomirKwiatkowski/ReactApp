import React from "react";
import SectionOurPromise from "./SectionOurPromise";
import SectionOurServices from "./SectionOurServices";
import {Switch,Route } from "react-router-dom";


const SectionChange =()=>{
    
    return(
        <>
        <Switch>
        <Route path="/" exact component={SectionOurPromise}/>
        <Route path="/services"  component={SectionOurServices}/>
      </Switch>
      </>
    )
}

export default SectionChange