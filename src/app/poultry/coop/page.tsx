import React from 'react'
import Cards from "@/components/FeatureCards";
import {coop, Farmstead} from "@/data/data"

async function Cooppage({ searchParams }: { searchParams: { farmsteadId: string } }) {

  const farmsteadId = await Promise.resolve(searchParams.farmsteadId);
  const data = coop.filter((item) => item.farmsteadid === farmsteadId)
  const farmstead_name = Farmstead.find(farm => farm.id === farmsteadId)?.name || 'Unknown Farmstead';

  return (
    <>   
    <div> Coops of {farmstead_name}</div>
    <Cards data = {data}/>
    </>
  )
}

export default Cooppage