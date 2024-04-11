import React from 'react'

const Message = () => {
  return (
    <div className='flex flex-col border border-black rounded-2xl m-3  p-2 leading-tight text-sm'>
        <h2 className='font-medium'>Alvin varghese</h2>
        <p>This contract provides a foundation for a crowdfunding platform with campaign creation, contribution, refunding, milestone.</p>
        <p className='pr-2 text-xs text-end text-slate-600'>11:11 am</p>
    </div>
  )
}

export default Message;