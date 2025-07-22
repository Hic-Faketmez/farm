import React from 'react'
import Cards from "@/components/FeatureCards";
import {cows, Farmstead} from "@/data/data"

async function cowspage({ searchParams }: { searchParams: { farmsteadId: string } }) {

  const farmsteadId = await Promise.resolve(searchParams.farmsteadId);
  const data = cows.filter((cow) => cow.farmsteadid === farmsteadId)
  const farmstead_name = Farmstead.find(farm => farm.id === farmsteadId)?.name || 'Unknown Farmstead';


  return (
    <>   
    <div> Cows of {farmstead_name} Barn</div>
    <Cards data = {data}/>
    </>
  )
}

export default cowspage