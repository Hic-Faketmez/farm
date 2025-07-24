import React from 'react';
import Cards from "@/components/FarmsteadCards";
import {Farmstead} from "@/data/data"


function FieldsPage() {
  return (
    <>   
    <h1> FIELDS </h1>
    <Cards data={Farmstead} type="fields"/>
    </>
  )
}

export default FieldsPage