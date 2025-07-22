"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as React from "react";

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
}

export default function Cards<T extends BaseData>({ data }: CardsProps<T>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <FarmsteadCard key={item.id} data={item} />
      ))}
    </div>
  );
}

interface FarmsteadCardProps<T extends BaseData> {
  data: T;
}

function FarmsteadCard<T extends BaseData>({ data }: FarmsteadCardProps<T>) {
  return (
    <Card className="h-full rounded-md bg-zinc-100 dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className="sm:text-lg">{data.name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {data.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}