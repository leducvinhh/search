import React, {useState, useEffect} from 'react'

export default function Content() {
    const [countdown, setCountdown] = useState(180)
    useEffect(() => {
      let interval = setInterval(() => {
        setCountdown(prev => prev - 1)
        console.log('countdown....');
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }, [])
  return (
    <div>
        {countdown}
    </div>
  )
}
