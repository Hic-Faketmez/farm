"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as React from "react";
import { useRouter } from "next/navigation";

// Her türlü veriyi kabul edebilen ama zorunlu alanları belirten interface
interface BaseData {
  id: string;
  type:string;
  name: string;
  description: string;
  [key: string]: any; // diğer alanlar için
}

interface CardsProps<T extends BaseData> {
  data: T[];
  type: string;
}


export default function Cards<T extends BaseData>({ data, type }: CardsProps<T>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) =>
        item.type === type ? <FarmsteadCard key={item.id} data={item} /> : null
      )}
    </div>
  );
}

interface FarmsteadCardProps<T extends BaseData> {
  data: T;
}

function FarmsteadCard<T extends BaseData>({ data }: FarmsteadCardProps<T>) {
  const router = useRouter();

  const handleClick = () => {
    switch (data.type) {
      case 'haras':
        router.push(`/horses?farmsteadId=${data.id}`);
        break;
      case 'barn':
        router.push(`/cows?farmsteadId=${data.id}`);
        break;
      case 'sheepfold':
        router.push(`/sheep?farmsteadId=${data.id}`);
        break;
      default:
        break;
    }
  };

  return (
    <Card 
      className="h-full rounded-md bg-zinc-100 dark:bg-zinc-900 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="sm:text-lg">{data.name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {data.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}