    import React, { useEffect, useRef, useState } from 'react'
    import { FaFistRaised, FaFlushed, FaHandPeace, FaPeace, FaSadCry, FaSmile, FaSpider } from 'react-icons/fa'
import { FaHand } from 'react-icons/fa6'

    export const Games = () => {
        const [score, setScore] = useState(0)
        const [visible, setVisible] = useState(true)
        const [quack, setQuack] = useState(false)
        const[Osize, setOsize] = useState(30)
        const[Oleft, setOleft] = useState(0)
        const[Otop, setOtop] = useState(20)
        const[Ospeed, setOspeed] = useState(3)
        const [game, setGame] = useState('')
        const [status, setStatus] = useState('')
        const [roll, setRoll] = useState('')
        const [roll2, setRoll2] = useState('')
        const gameRef = useRef(null)
        const suit = (roll, e)=>{
            e.preventDefault()
            console.log(roll)
            const rand = Math.random()*3+1
            if (rand>1 && rand< 2){
                setRoll2('paper')
                if(roll == 'scissor'){
                    setTimeout(()=>{setStatus('win')},500)
                    setScore((prev)=>prev+1)}
                else if(roll == 'rock'){
                    setTimeout(()=>{setStatus('lose')},500)
                    setScore((prev)=>prev-1)}
                else{
                        setTimeout(()=>{setStatus('draw')},500)
                    }
                    
            }
            else if (rand>2 && rand< 3){
                setRoll2('rock')
                if(roll == 'paper'){
                    setTimeout(()=>{setStatus('win')},500)
                    setScore((prev)=>prev+1)}
                else if(roll == 'scissor'){
                    setTimeout(()=>{setStatus('lose')},500)
                    setScore((prev)=>prev-1)}
                else{
                        setTimeout(()=>{setStatus('draw')},500)
                    }
                    
            }
            else if (rand>3 && rand< 4){
                setRoll2('scissor')
                if(roll == 'rock'){
                    setTimeout(()=>{setStatus('win')},500)
                    setScore((prev)=>prev+1)}
                else if(roll == 'paper'){
                    setTimeout(()=>{setStatus('lose')},500)
                    setScore((prev)=>prev-1)}
                else{
                        setTimeout(()=>{setStatus('draw')},500)
                    }
                    
            }
            setRoll(roll)
        }
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
        const pilihgame = (e) => {
            e.preventDefault()
            setGame(gameRef.current.value)
            console.log(gameRef.current.value)
        }

        useEffect(()=>{
            if (roll !== ''){
                setTimeout(()=>{
                setRoll('')
                setRoll2('')
                setStatus('')
            },2000)
            }
            
        },[roll])
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
            <select ref={gameRef} defaultValue={1} onChange={pilihgame} name="game" id="game" className='p-2 rounded-lg'>
                <option value="1" disabled>Choose your game!</option>
                <option value="spider" >Shoot The Spider</option>
                <option value="janken">Janken</option>
                <option value="2" disabled>Smile : Coming soon</option>
            </select>
            <div className={`w-full h-full cursor-crosshair ${game=='spider'? '' : 'hidden'}`}>
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
                        <div className='w-full h-full p-3'>
                            <FaSpider className={`${score===20&&'animate-ping fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'}`} style={{
                        height: `${Osize}px`,
                        width: `${Osize}px`,
                    }} />
                        </div>
                    
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
                        {/*JANKEN                          !!!!!!!!!!!!!!!!!!!!!*/}
            <div className={`w-full h-full cursor-crosshair p-10 ${game=='janken'? '' : 'hidden'}`}>
                <div className=' text-center grid w-full h-full relative'>
                    <div className='flex gap-0 md:gap-2 absolute -right-10 md:right-0 top-0 items-center h-[10%] z-20'>
                        <button onClick={(e)=>{suit('paper',e)}} className='w-fit h-fit scale-50 md:scale-100'><FaHand size={40}/></button>
                        <button onClick={(e)=>{suit('scissor',e)}} className='w-fit h-fit scale-50 md:scale-100'><FaHandPeace size={40}/></button>
                        <button onClick={(e)=>{suit('rock',e)}} className='w-fit h-fit scale-50 md:scale-100'><FaFistRaised size={40}/></button>
                    </div>
                    <div className='w-full h-full flex flex-col border-b-2'>
                        <div className='w-full h-[20%] '>
                            <h1>YOU</h1>
                        </div>
                        <div className='w-full h-[80%]  border-t-2'>
                            <span className='block w-full h-full relative'>
                                <FaHand className={`duration-300 absolute top-0 left-0 w-full h-full scale-0  ${roll=='paper'?' scale-100':''}`}/>
                                <FaFistRaised className={`duration-300 absolute top-0 left-0 w-full h-full scale-0  ${roll=='rock'?' scale-100':''}`}/>
                                <FaHandPeace className={`duration-300 absolute top-0 left-0 w-full h-full scale-0  ${roll=='scissor'?' scale-100':''}`}/>
                            </span>
                        </div>
                    </div>  
                    <div className='w-full h-full flex flex-col'>
                        <div className='w-full h-[80%]  border-t-2'>
                            <span className='block w-full h-full relative'>
                                <FaHand className={`duration-300 absolute top-0 left-0 w-full h-full scale-0  ${roll2=='paper'?' scale-100':''}`}/>
                                <FaFistRaised className={`duration-300 absolute top-0 left-0 w-full h-full scale-0  ${roll2=='rock'?' scale-100':''}`}/>
                                <FaHandPeace className={`duration-300 absolute top-0 left-0 w-full h-full scale-0  ${roll2=='scissor'?' scale-100':''}`}/>
                            </span>
                        </div>
                        <div className='w-full h-[20%] '>
                            <h1>OPPONENT</h1>
                        </div>
                    </div>
                    <span className='flex items-center w-full h-full justify-center scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <FaSmile className={`w-3/3 h-3/3 opacity-50 text-yellow-500 duration-300 scale-0 ${status=='win'&&'scale-100'}`}/>
                    </span>
                    <span className='flex items-center w-full h-full justify-center scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <FaSadCry className={`w-3/3 h-3/3 opacity-50 text-blue-700 duration-300 scale-0 ${status=='lose'&&'scale-100'}`}/>
                    </span>
                    <span className='flex items-center w-full h-full justify-center scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <FaFlushed className={`w-3/3 h-3/3 opacity-50 text-green-400 duration-300 scale-0 ${status=='draw'&&'scale-100'}`}/>
                    </span>
                </div>
            </div>
        </div>
    )
    }
