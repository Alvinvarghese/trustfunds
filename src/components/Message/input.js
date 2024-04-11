import React from 'react'
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
const Text = () => {
  return (
 
        <div className='w-5/6 p-2 h-full gap-3'>
            <div className='flex flex-row justify-between mb-3'>
            <div>
            <h2 className='font-medium'>Abraham</h2>
            <p className='text-sm'>Campaign creator</p>
            </div>
            <div className='text-sm text-end'>
                <p>Oct 22,2023</p>
                <p>9:00 am</p>
            </div>
            </div>
            <Textarea  type="text" 
                    placeholder="Enter your message here."
                    className="border border-black rounded-xl h-full bg-white placeholder text-start"/>
                    <div className='flex flex-col items-end'>
            <Button className="outline-button mt-6 flex flex-row gap-3 rounded-xl px-10 py-6 text-lg">Send</Button>
        </div>
        </div>
   
  )
}

export default Text;