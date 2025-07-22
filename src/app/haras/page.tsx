import React from 'react'
import Cards from "@/components/FarmsteadCards";
import {haras} from "./data"


function horse() {
  return (
    <>   
    <div> Haras </div>
    <Cards data = {haras}/>
    </>
  )
}

export default horse