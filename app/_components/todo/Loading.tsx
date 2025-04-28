import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Skeleton } from '@/components/ui/skeleton'
const Loading = () => {
  return (
    <Card className='w-full my-10 border-slate-300'>
    <CardHeader>
        <CardTitle><Skeleton className='h-5 w-20 bg-gray-100'/></CardTitle>
        <CardDescription><Skeleton className='h-3 w-56 bg-gray-100'/></CardDescription>
    </CardHeader>
    <CardContent>
        <ul role='list' className='divide-y divide-slate-300'>
          {[...Array(5)].map((_, idx) => (
            <div className='flex justify-between' key={idx}>
                <li  className='py-4'>
              <Skeleton className='h-4 w-48 bg-gray-100'/>
            </li>
            <div className='flex space-x-2'>
                <button><Skeleton className='h-8  w-16 bg-gray-100'/></button>
                <button><Skeleton className='h-8  w-16 bg-gray-100'/></button>
              </div>
            </div>
          ))}
        </ul>
    </CardContent>
    </Card>

  )
}

export default Loading