import { FC, useState, useEffect } from 'react'


interface Props {
    minutes?: number
    seconds?: number
    onTimerComplete: () => void
    containerStyle?: string
    innerStyle?: string
}

function initiateCountdown(minutes: number, seconds: number): number {
    return ((minutes * 60) + seconds) * 1000
}
function displayCountdown(countdown: number): string{
    let s= countdown / 1000
    let m=0
    let mz= '', sz= ''

    if(s>60){
        m= Math.floor(s/60) 
        s= s%60
    }

    mz= `${m}:`
    sz= `${s}`.padStart(2,'0')
    return mz.concat(sz)
}

const Timer:FC<Props> = ({
    minutes= 0, 
    seconds=0, 
    onTimerComplete, 
    containerStyle='',
    innerStyle='',
}) => {
    const [countdown, setCountdown]= useState<number>(initiateCountdown(minutes, seconds))
    const [intervalHandle, setIntervalHandle]= useState<any>()
    
    useEffect(()=>{
        const tID= setInterval(()=>{
            setCountdown(countdown=>{
                return countdown-1000
            })
        }, 1000)

        setIntervalHandle(tID)
    }, [])

    useEffect(()=>{
        if(countdown === 0){
            clearInterval(intervalHandle)
            onTimerComplete()
        }
    }, [countdown])


    return (
        <div className={containerStyle}>
            <div className={innerStyle}>{displayCountdown(countdown)}</div>
        </div>
    )
}

export default Timer