import { FC, useState } from 'react'
import Timer from './Timer'

type Steps = 'reflex' | 'timer' | 'reflects';

const ReflexReflects: FC = () => {
    const [reflex, setReflex] = useState<string>("")
    const [reflects, setReflects]= useState<string>("")
    const [step, setStep]= useState<Steps>('reflex')

    const save= () => {
        setStep('timer')
    }

    const handleTimerComplete = () => {
        setStep('reflects')
        console.log('timer complete')
    }

    return (
        <div className='p-2'>
            { step === 'timer'
             ?  <Timer 
                    minutes={0} 
                    seconds={72} 
                    onTimerComplete={handleTimerComplete} 
                    containerStyle='border-2 border-teal-900 text-center py-6 px-10'
                    innerStyle='text-8xl text-teal-900'
                />

             :  <>
                    <div className='text-2xl text-teal-900'>Reflex</div>
                    <textarea 
                        className='border-teal-900 border-2 bg-warm-gray-100 text-gray-900 p-2 w-full' 
                        rows={6} 
                        value={reflex} 
                        onChange={e=>(setReflex(e.target.value))} 
                    />
                    <button onClick={save} className='bg-teal-800 text-white px-2 py-1 rounded-mg'>
                        Save Reflex
                    </button>
                    
                </>
            }
            
        </div>
    )
}

export default ReflexReflects