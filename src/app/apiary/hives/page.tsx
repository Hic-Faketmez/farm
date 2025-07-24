import React from 'react'
import Cards from "@/components/FeatureCards";
import {hive, Farmstead} from "@/data/data"

async function Hivepage({ searchParams }: { searchParams: { farmsteadId: string } }) {

  const farmsteadId = await Promise.resolve(searchParams.farmsteadId);
  const data = hive.filter((item) => item.farmsteadid === farmsteadId)
  const farmstead_name = Farmstead.find(farm => farm.id === farmsteadId)?.name || 'Unknown Farmstead';

  return (
    <>   
    <div> Hives of {farmstead_name}</div>
    <Cards data = {data}/>
    </>
  )
}

export default Hivepage