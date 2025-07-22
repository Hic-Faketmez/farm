import React from 'react'
import Cards from "@/components/FeatureCards";
import {horses} from "../haras/data"


function horse() {
  return (
    <>   
    <div> Horses </div>
    <Cards data = {horses}/>
    </>
  )
}

export default horse