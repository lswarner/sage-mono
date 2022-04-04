import {FC} from 'react'

import { Transaction } from 'types'

const getCategoryColor = (category: string): string => {
    switch(category){
        case "Groceries":
        case "Restaurants":
        case "Coffee":
        case "Alcohol":
            return "bg-amber-400"

        case "Pets":
            return "bg-pink-400"

        case "Home Supplies":
            return "bg-red-500"

        case "Car":
            return "bg-blue-400"
            
        default:
            return "bg-coolGray-500"
    }
}


interface Props {
    month: string;
    transactions: Transaction[];
}

const Month: FC<Props> = (props) => {

    
    return(
        <div className="bg-pine text-white font-extralight px-4 py-4">
            <div className="font-extralight text-3xl text-white mb-4">
                {props.month}
            </div>
            <div className="bg-white text-juniper px-2 py-2">
                {props.transactions.map((tx)=>(
                    <div className="flex flex-row justify-between width-full py-1 border-cool-gray-200 border-0 border-bottom-2">
                        <div className="w-3/8 text-left">
                            {tx.name}
                        </div>
                        <div className="ml-1 mr-6 text-right font-bold w-1/8">
                            ${tx.amount.toFixed(2)}
                        </div>
                        <div className={`ml-1 w-3/10 text-xs text-white ${getCategoryColor(tx.category)} px-1 py-1 rounded-xl`}>
                            {tx.category}
                        </div>
                        <div className="ml-1 w-2/10 text-right hidden sm:inline">
                            {tx.date}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Month