    import React, { useEffect, useState } from 'react'
    import { FaSpider } from 'react-icons/fa'

    export const Games = () => {
        const [score, setScore] = useState(0)
        const [visible, setVisible] = useState(true)
        const [quack, setQuack] = useState(false)
        const[Osize, setOsize] = useState(30)
        const[Oleft, setOleft] = useState(0)
        const[Otop, setOtop] = useState(20)
        const[Ospeed, setOspeed] = useState(3)
        const shoot = (e) => {
            e.preventDefault()
            if(score<19){
                setVisible(false)
            setScore(score+1)
                    const randomSize = Math.random()*70+25
                    const randomSpeed = Math.random()*3+3
                    const randomTop = Math.random()*50 + 20

                    setOsize(randomSize)
                    setOtop(randomTop)
                    setOspeed(randomSpeed)
                    setVisible(true)
        setTimeout(()=>{
            setVisible(true)
        }, 1500)
        }
        if (score===19){
            setScore(score+1)
            console.log("THE END")
            setOspeed(999)
            setOsize(300)
        }
            
            
        }
    return (
        <div className='w-full h-full p-4 flex flex-col items-center justify-start '>
            <div className='fixed top-0 right-0 p-2 flex'>
                <p>Your Score : </p>
                <p>{score}</p>
            </div>
            <div className='fixed top-0 left-0 p-2 flex'>
                <a href='/'>Back To My Page</a>
            </div>
            <p className='text-2xl font-bold'>            
                GAMES
            </p>
            <select name="game" id="game" className='p-2 rounded-lg'>
                <option value="" disabled>Choose your game!</option>
                <option value="bird">Shooting Spider</option>
                <option value="bird" disabled>Janken : Coming soon</option>
                <option value="bird" disabled>Smile : Coming soon</option>
            </select>
            <div className='w-full h-full cursor-crosshair'>
                <button
                    className={`bird p-2 absolute  ${
                        visible ? 'opacity-100' : 'opacity-0'
                    } cursor-crosshair`}
                    style={{
                        top: `${Otop}%`,
                        left: 0,
                    }}
                    onClick={shoot}
                    >
                    <FaSpider className={`${score===20&&'animate-ping fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'}`} style={{
                        height: `${Osize}px`,
                        width: `${Osize}px`,
                    }} />
                </button>
                <style>{`
                    .bird {
                    animation: fly ${Ospeed}s linear infinite alternate;
                    }

                    @keyframes fly {
                    from { left: 0; }
                    to { left: calc(100% - 4rem); }
                    }
                `}</style>
            </div>
        </div>
    )
    }
