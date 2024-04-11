"use client";
import Text from '@/components/Message/input';
import Message from '@/components/Message/message'
import React from 'react'

const Page = () => {
  return (
    <div className='flex h-screen flex-col gap-6 m-6'>
        <h1 className='font-semibold text-center text-3xl'>Welcome To TrustFunds Community Forum!</h1>
        <div className='flex flex-row'>
        <div className='w-1/2'>
            <Message/>
            <Message/>
            <Message/>
        </div>
        <div className='w-1/2 h-full flex flex-col items-center '>
        <Text/>
        </div>
        </div>
    </div>
  )
}

export default Page