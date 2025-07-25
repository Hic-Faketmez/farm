import React from 'react'
import {user} from "@/data/data"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BaseData {
  id: string,
  email: string,
  username: string,
  clerkId: string,
  bio?: string,
  image?: string,
  location?: string,
  website?: string,
  createdAt?: string,
  updatedAt?: string,
  [key: string]: any; // diğer alanlar için
}


function SettingsPage(){
    const currentUser = user[0];
  return (
    <>
    <div>SettingsPage</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card 
      className="h-full rounded-md bg-zinc-100 dark:bg-zinc-900 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
    >
      <CardHeader>
        <CardTitle className="sm:text-lg">{currentUser?.username || 'No username'}</CardTitle>
        <CardDescription className="line-clamp-3">
          {currentUser?.email || 'No email'}
        </CardDescription>
      </CardHeader>
    </Card>           
    </div>

        </>
  )
}

export default SettingsPage