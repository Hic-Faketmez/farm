import React from 'react'
import Cards from "@/components/FarmsteadCards";
import {Farmstead} from "@/data/data"


function Poultry() {
  return (
    <>   
    <div> Poultries </div>
    <Cards data={Farmstead} type="poultry"/>
    </>
  )
}

export default Poultry