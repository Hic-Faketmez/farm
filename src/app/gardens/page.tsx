import React from 'react';
import Cards from "@/components/FarmsteadCards";
import {Farmstead} from "@/data/data"


function GardensPage() {
  return (
    <>   
    <h1> GARDENS </h1>
    <Cards data={Farmstead} type="gardens"/>
    </>
  )
}

export default GardensPage