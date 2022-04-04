import sanityClient from '@sanity/client' 
import {nanoid} from 'nanoid'

const projectId=  '8s292hgv'
const dataset= 'production'
const token= 'skc3eQmcKJrpxKMVbdhtwRqxFByICxT6Cc5YnwmS1IHdAejt883IIF4vbKHI6OhMeD3XD4gJ9gW0KypRmTO0snvYQiZ0SncxDMm1NocIgEa1lfe5VYuDz2nEPb5M1d6P1hMxTQhSWdp7xyStJ8AL6l9Y2QCnWRbHDNCcIqsC5M3M7vCiK7M1'

/*
interface ItemDocument extends Item{
    _key: string;
}
*/

const client = sanityClient({
    projectId,
    dataset,
    apiVersion: '2022-02-23', // use current UTC date - see "specifying API version"!
    token, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
})

/*
const fetchListByName = async (listName: string): Promise<any> =>{
    
    const query = '*[_type == "list" && name == $listName] {_id, items}'
    const params= {listName: listName}

    const lists= await client.fetch(query, params)
    if(lists.length !== 1){
        console.log('no list found')
        return []
    }

    const list=lists[0]
    console.log('before')
    console.log(list.items)

    const items= list.items.map((item: ItemDocument)=>({
        key: item._key,
        name: item.name,
        curAmount: item.curAmount,
        active: item.active,
    }))
    console.log('after')
    console.log(items)

    return {
        id: list._id,
        items,
    }
}


const storeItemInList = async (item: Item, listId: string): Promise<boolean> => {

    const list= await client.patch(listId)
        .setIfMissing({items: []})
        .append('items', [{_key: nanoid(), name: item.name, curAmount: item.curAmount, active: true}])
        .commit()

    if(!list){
        return false
    }

    return true
}

export  {
    fetchListByName,
    storeItemInList,
}

*/