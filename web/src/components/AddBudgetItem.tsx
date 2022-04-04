import { useState, FC } from 'react'
import {BudgetItem} from 'types'

interface AddBudgetItemProps {
    onAddItem: (newItem: BudgetItem) => void;
}

const AddBudgetItem: FC <AddBudgetItemProps> = (props) => {
    const [name, setName]= useState<string>("")
    const [amount, setAmount]= useState<number | null >(null)

    const beforeOnAdd = () => {
        console.log(`amount: ${amount}`)
        props.onAddItem({
            name,
            amount: amount || 0.00,
            type: 'debit'
        })

        setName("")
        setAmount(null)
    }

    return (
        <div>
            <input type="text" className="px-2 py-1 mr-3" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Description"/>
            <input type="text" className="px-2 py-1" onChange={(e)=>setAmount(parseFloat(e.target.value))} value={amount || ''} placeholder="Amount"/>
            <button className="bg-teal-700 text-white px-4 py-2 text-sm" onClick={beforeOnAdd}>+</button>
        </div> 
    )
}

export default AddBudgetItem