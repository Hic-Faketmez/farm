import React from 'react'
import Cards from "@/components/FeatureCards";
import {sheep, Farmstead} from "@/data/data"

async function sheeppage({ searchParams }: { searchParams: { farmsteadId: string } }) {

  const farmsteadId = await Promise.resolve(searchParams.farmsteadId);
  const data = sheep.filter((item) => item.farmsteadid === farmsteadId)
  const farmstead_name = Farmstead.find(farm => farm.id === farmsteadId)?.name || 'Unknown Farmstead';

  return (
    <>   
    <div> Sheep of {farmstead_name}</div>
    <Cards data = {data}/>
    </>
  )
}

export default sheeppage