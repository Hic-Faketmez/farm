import React from 'react'
import Cards from "@/components/FeatureCards"
import { horses, Farmstead } from "@/data/data"

interface PageProps {
  searchParams: {
    farmsteadId?: string
  }
}

export default async function HorsePage({ searchParams }: PageProps) {
  // Handle case where farmsteadId is undefined
  if (!searchParams.farmsteadId) {
    return <div>No farmstead selected</div>
  }

  // Filter horses based on farmsteadId
  const data = horses.filter(horse => horse.farmsteadid === searchParams.farmsteadId)
  const farmstead = Farmstead.find(farm => farm.id === searchParams.farmsteadId)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        Horses of {farmstead?.name || 'Unknown'} Hara
      </h1>
      <Cards data={data} />
    </div>
  )
}


// import React from 'react'
// import Cards from "@/components/FeatureCards";
// import {horses, Farmstead} from "@/data/data"

// async function HorsePage ({ searchParams }: { searchParams: { farmsteadId?: string } }) {

//   const farmsteadId = await Promise.resolve(searchParams.farmsteadId);
//   const data = horses.filter((horse) => horse.farmsteadid === farmsteadId)
//   const name = Farmstead.find(farm => farm.id === farmsteadId)?.name || 'Unknown Farmstead';

//   return (
//     <>   
//     <div> Horses of {name} Hara </div>
//     <Cards data = {data}/>
//     </>
//   )
// }

// export default HorsePage