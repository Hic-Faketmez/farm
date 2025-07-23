import React from 'react'
import Cards from "@/components/FarmsteadCards";
import {Farmstead} from "@/data/data"


function Apiary() {
  return (
    <>   
    <div> Apiaries </div>
    <Cards data={Farmstead} type="apiary"/>
    </>
  )
}

export default Apiary