import { useState, useEffect } from 'react'

interface UseRandomProps {
    min?: number
    max: number
    delay: number
}

const useRandom  = ({min=0, max, delay}: UseRandomProps): number => {
    const [r, setR]= useState<number>(0)
    const [i, setI]= useState(0); 

    useEffect(()=>{
        setTimeout(()=>{
            const rr= Math.random()
            setI(Math.floor((rr * max)))
            console.log(i)
            setR(rr)
        }, delay)
    }, [r])

    return i
}

export default useRandom

