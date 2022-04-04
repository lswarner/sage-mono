/// <reference types="vite/client" />

declare module 'types' {
    export interface Transaction {
        name: string;
        amount: number;
        category: string;
        date: string;
    }

    export interface BudgetItem {
        name: string;
        amount: number;
        type: "income" | "debit";
    }
}