import { useState, useEffect } from 'react'



export default function Typewriter(props) {
    const phrases = props?.teks
  const [text, setText] = useState('')
  const [textCheck, setTextCheck] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
  const phrase = phrases[phraseIndex]

  const timeout = setTimeout(() => {
    if(phraseIndex<phrases.length){
        if (textCheck.length < phrase.length) {
      setText((prev)=>prev+phrase.substring(textCheck.length, textCheck.length + 1))
      setTextCheck(phrase.substring(0, textCheck.length + 1))
    } else {
      setTimeout(() => {
        setTextCheck('')
        setPhraseIndex((prev) => (prev + 1))
        phraseIndex+1 !== phrases.length && setText((prev)=>prev+'\n'+'\t')
      }, 1000)
    }
  }
    }
    , 50)

  return () => clearTimeout(timeout)
}, [text, phraseIndex, textCheck])

  return (
    <span className='whitespace-pre-wrap'>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}