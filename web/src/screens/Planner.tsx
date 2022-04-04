import { useState, FC } from 'react'
import AddBudgetItem from '../components/AddBudgetItem'
import { BudgetItem } from 'types'


interface Props {

}

const Planner: FC<Props> = (props) => {
    const [items, setItems]= useState<BudgetItem[]>([])
    const [totalAmount, setTotalAmount]= useState<number>(0)
    
    const addItem = (item: BudgetItem) => {
        console.log(`add item ${item.name}: $${item.amount}`)
        setItems(items.concat(item))
        setTotalAmount(totalAmount+item.amount)
    }


    return (
        <div className='flex flex-col bg-warm-gray-400'>
            <AddBudgetItem onAddItem={addItem} />
            <div>
                {items.map((item, i)=>(
                    <div key={i}>
                        {item.name} ${item.amount}
                    </div>
                ))}
                <div>
                    Total: ${totalAmount}
                </div>
            </div>
        </div>
        
    )
}

export default Planner