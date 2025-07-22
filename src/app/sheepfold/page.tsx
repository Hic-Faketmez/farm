import React from 'react';
import Cards from "@/components/FarmsteadCards";
import {Farmstead} from "@/data/data"


function sheepfold() {
  return (
    <>   
    <h1> SHEEPFOLD </h1>
    <Cards data={Farmstead} type="sheepfold"/>
    </>
  )
}

export default sheepfold