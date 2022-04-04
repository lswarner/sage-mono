import {FC} from 'react'
import ReflexReflects from '../components/ReflexReflects'
import FindBook from '../components/FindBook'
import MortgageCalculator from '../components/MortgageCalculator'

const Lecture: FC = () => {
    return (
        <div className='bg-warm-gray-300 flex flex-col h-screen'>
            <div className='w-3/5 bg-white m-auto my-0 h-screen'>
                <FindBook />
                <ReflexReflects />
                <MortgageCalculator />
            </div>
            
        </div>
    )
}

export default Lecture