import { Schema, model } from "mongoose";

interface Transaction {
    id: string;
    date: string;
    description: string;
    originalDescription: string;
    amount: number;
    type: string;
    //category: Category;
    //labels: string[];
    //notes: string;
}

const schema= new Schema<Transaction>({
    date: { type: String, required: true },
    description: { type: String, required: true },
    originalDescription: { type: String, required: false },
    amount: { type: Number, required: true },
    type: {type: String, require: true},
})
const TransactionModel= model<Transaction>('Transaction', schema);

export {
    Transaction,
    TransactionModel
}
