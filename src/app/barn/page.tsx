import React from 'react';
import Cards from "@/components/FarmsteadCards";
import {Farmstead} from "@/data/data"


function barn() {
  return (
    <>   
    <h1> BARNS </h1>
    <Cards data={Farmstead} type="barn"/>
    </>
  )
}

export default barn