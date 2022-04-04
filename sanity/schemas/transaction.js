import {format} from 'date-fns'

export default {
    name: 'transaction',
    title: 'Transaction',
    type: 'document',
    fields : [
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'The description of the transaction'
        },
        {
            name: 'amount',
            title: 'Amount',
            type: 'number',
            description: 'The dollar amount of the transaction'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            description: 'The date and time the transaction occurred',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
            description: 'The category this transaction belongs to'
        }
    ],
    preview: {
        select: {
            description: 'description',
            amount: 'amount',
            date: 'date',
        },
        prepare(selection){
            const {amount, description, date}= selection
            
            return {
                title: `$${amount} at ${description}`,
                subtitle: format(new Date(date), 'MMM dd, yyyy'),
            }
        }
    }
}