import { FC } from 'react'

interface Props {
    name: string
    count: number 
    duration: number
}

const PathwayCard: FC<Props> = (props) => (
    <div className='flex flex-row border-4 w-full border-forest bg-white mx-3 my-3 hover:shadow-3xl'>
        <div className={`bg-warm-gray-300 h-full text-center text-8xl`}>X</div>
        <div className='px-3 py-3'>
            <div className='text-3xl text-black'>{props.name}</div>
            <div className="flex flex-row">
               <div className={`text-md text-warm-gray-500`}>{props.count} courses | {props.duration} hours</div>
            </div>
         </div>
        
    </div>
)

export default PathwayCard