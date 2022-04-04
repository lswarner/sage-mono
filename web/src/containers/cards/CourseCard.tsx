import {FC} from 'react'
import { Human } from '../../api'
import { btnPrimary } from '../../styles'

interface Props {
    color: string
    name: string 
    category: string 
    instructors: Human[]
    description: string
}

const CourseCard:FC<Props> = (props) => {
    const instructorText= props.instructors.reduce((text: string, i: Human)=>{
        return !text 
                ? i.name 
                : `${text}, ${i.name}`
      
    }, "")

    return (
        <div className='border-2 border-black w-1/4 bg-white rounded-lg mx-3 hover:shadow-3xl'>
            <div className={`bg-${props.color} w-full h-32 text-center text-9xl rounded-t-md`}>X</div>
            <div className='px-3 py-3'>
                <div className='text-3xl'>{props.name}</div>
                <div className="flex flex-row">
                <div className={`rounded-full w-7 h-7 bg-${props.color}`}></div>
                <div className={`text-md text-${props.color} pl-2 text-lg`}>{props.category}</div>
                </div>
            
                <div className='text-md text-warm-gray-500'>{instructorText}</div>
                <div className='text-sm text-warm-gray-700 my-3'>{props.description}</div>
                <div className={`${btnPrimary} mt-8`}>Dive in</div>
            </div>
            
        </div>
    )
}

export default CourseCard