import { SanityDocument } from '@sanity/client';
import client from '.'

export interface CategoryDocument {
    id?: string;
    name: string;
    color: string;
    parent?: CategoryDocument;
}

const create = async (cat: CategoryDocument): Promise<string | Error> =>  {
    console.log(cat)
    let doc: SanityDocument
    try{
        doc= await client.create({
            _type: 'category',
            name: cat.name,
            color: cat.color || '#FF0D86',
            parent: {
                "_ref": cat.parent?.id,
                "_type": "reference"
            }
        })

        return doc._id
    }
    catch(error){
        return Error(`Error creating new Category named '${cat.name}'`)

    }

    
}

const fetchAll = async (): Promise<SanityDocument[]> => {
    const query= '*[_type == "category"]{name, color, parent}'
    try {
        const docs: SanityDocument[]= await client.fetch(query)
        return docs
    }
    catch (error){
        throw Error(`Error fetching all Category documents: ${error}`)
    }
}

const fetchByName = async (name: string): Promise<CategoryDocument> => {
    //const query = '*[_type == "bike" && seats >= $minSeats] {name, seats}'
    const query= '*[_type == "category" && name == $name]{_id, name, color, parent->{_id, name, color, parent}}'
    const params = {name}


    try {
        const doc = await client.fetch(query, params)
        const category= doc.length === 1 ? doc[0] : []
        console.log(category)
        return {
            id: category._id,
            name: category.name,
            color: category.color,
            parent: category.parent, 
        }
    }
    catch(error) {
        throw Error(`Error querying categories for name ${name}`)
    }

   
}

export default {
    create,
    fetchAll,
    fetchByName,
}