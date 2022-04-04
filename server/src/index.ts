import express, { Request } from 'express'
import neatCsv  from 'neat-csv'
import {promises as fs} from 'fs'
import { createHash } from 'crypto'
//import { mongoose, TransactionModel } from './db'
import categorySchema, { CategoryDocument } from './sanity/category'
import {formatISO} from 'date-fns'


const app= express()
//mongoose()

const file: string= '"Date","Description","Original Description","Amount","Transaction Type","Category","Account Name","Labels","Notes"\n"2/24/2021","Target","TARGET 00020529","148.80","debit","Home Supplies","1stBank Personal","",""'
const file2: string= 'Date,Description,Amount,Category,\n2/24/2021,Target,148.80,Home Supplies'


let hashmap= new Map()
let collisions: string[]= []

const isDuplicate = (a: string): boolean => {
    //console.log(`string: ${a}`)
    const hash = createHash('sha256')
    let d: string= hash.update(a).digest('hex')
    //console.log(`digest: ${d}`)
    if(hashmap.has(d)){
        console.log(`insert [${a}] collided with [${hashmap.get(d)}]`)
        collisions.push(a)
        return true
    } else {
        hashmap.set(d, a)
        return false
    }
}

app.get('/', async(req, res) => {
    try {
        const categories= await categorySchema.fetchAll()
        res.send({
            categories
        })
    }
    catch(error){
        res.status(500).send({
            error
        })
    }  
})

app.get('/category', async(req, res) => {
    try{ 
        const id= await categorySchema.create({
            name: 'Restaurants',
            color: '#14a4cd',
            parent: {
                id: "iW9E2VHPSn2pdpAHvqAVwU",
                name: "Food",
                color: ''
            }
        })

        res.send({
            categoryId: id,
            category: 'Income',
        })
    }
    catch(error){
        res.status(500).send({
            error
        })
    }
})

app.get('/category/:name', async(req, res) => {
    try{ 
        console.log(`searching for ${req.params.name}`)
        const cat= await categorySchema.fetchByName(req.params.name)
        
        console.log(`found category:`)
        console.log(cat)

        res.send({
            id: cat.id,
            name: cat.name,
            color: cat.color,
            parent: cat.parent,
        })
    }
    catch(error){
        res.status(500).send({
            error
        })
    }
})


app.get('/import', async (req, res)=>{
    let data: Buffer= await fs.readFile('/Users/luke/Projects/sage 2021/server/data/transactions_2021.csv')

    let rows: neatCsv.Row[]= await neatCsv(data)
    let inserted= 0;

    rows.forEach(async (r, i)=>{

        const txHastext= `${r.Date}.${r.Description}.${r.Amount}`
        
        if(isDuplicate(txHastext) === false ){

            /*
            const tx= new TransactionModel({
                date: r.Date,
                description: r.Description,
                amount: r.Amount,
                type: r['TransactionType'],
                originalDescription: r['Original Description'],
            })
        
            // await tx.save()
            */
          
            const amount= parseFloat(r.Amount)

            const date= formatISO(new Date(r.Date))

    
            const txDoc= {
                _type: 'transaction',
                description: r.Description,
                amount,
                date,
                category: r.Category, 
            }
/*
            client.create(txDoc).then((res) => {
                inserted++
            })
            */
        }
        
    })
    

    res.send({
        transaction: rows.length,
        inserted,
        hashmap: hashmap.size,
        collisions: collisions.length,
    })
})


app.listen(3030, ()=>{
    console.log('The server is listening at http://localhost:3030')
})