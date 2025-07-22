import React from 'react'
import Cards from "@/components/FarmsteadCards";
import {Farmstead} from "@/data/data"


function hara() {
  return (
    <>   
    <div> Haras </div>
    <Cards data={Farmstead} type="haras"/>
    </>
  )
}

export default hara