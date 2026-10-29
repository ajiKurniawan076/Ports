import React from 'react'

export const Games = () => {
  return (
    <div className='w-full h-full p-4 flex flex-col items-center justify-start'>
        <p className='text-2xl font-bold'>            
            GAMES
        </p>
        <select name="game" id="game" className='p-2 rounded-lg'>
            <option value="" disabled>Choose your game!</option>
            <option value="bird">Shooting Bird</option>
            <option value="bird">Janken</option>
            <option value="bird">Smile</option>
        </select>
        <div className='w-full h-full'></div>
    </div>
  )
}
