import React from 'react'
import Cards from "@/components/FeatureCards";
import {greenhouse, Farmstead} from "@/data/data"

async function GreenhousePage({ searchParams }: { searchParams: { farmsteadId: string } }) {

  const farmsteadId = await Promise.resolve(searchParams.farmsteadId);
  const data = greenhouse.filter((item) => item.farmsteadid === farmsteadId)
  const farmstead_name = Farmstead.find(farm => farm.id === farmsteadId)?.name || 'Unknown Farmstead';


  return (
    <>   
    <div> Fields of {farmstead_name} </div>
    <Cards data = {data}/>
    </>
  )
}

export default GreenhousePage