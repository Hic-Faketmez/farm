import React from 'react';
import Cards from "@/components/FarmsteadCards";
import {Farmstead} from "@/data/data"


function GreenhousesPage() {
  return (
    <>   
    <h1> GREENHOUSES </h1>
    <Cards data={Farmstead} type="greenhouses"/>
    </>
  )
}

export default GreenhousesPage