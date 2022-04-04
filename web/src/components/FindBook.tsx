import { FC, useState } from 'react'

interface Book {
    title: string
    author: string
    pages: number
    publisher: string

}
const openBookAPIUrl= `https://openlibrary.org`
const isbnEndpoint= `/isbn/`

const searchByISBN = async (isbn: string): Promise<Book> => {
    const response= await fetch(`${openBookAPIUrl}${isbnEndpoint}${isbn}.json`)

    const {title, publisher, number_of_pages, authors}= await response.json()
    
    const author= await findAuthor(authors[0].key)
    
    const book: Book = {
        title,
        author,
        publisher,
        pages: number_of_pages,
    }
    return book
}

const findAuthor = async (author: string): Promise<string> => {
    const response = await fetch(`${openBookAPIUrl}${author}.json`)

    const data= await response.json()
    return data.name
}


const FindBook: FC = () => {
    const [isbn, setIsbn]= useState<string>('')
    const [loading, setLoading]= useState<boolean>(false)
    const [book, setBook]= useState<Book>(undefined)

    const onSearchBook = async () => {
        setLoading(true)
        const book= await searchByISBN(isbn)
        setBook(book)
        setLoading(false)
    }

    return (
        <div>
            {loading 
             ? <div>Loading...</div>
             : book 
               ? <>
                <div className="text-xl">Title: {book.title}</div>
                <div>Author: {book.author}</div>
                <div>Publisher: {book.publisher}</div>
                <div>{book.pages} pages</div>
               </>
                :
                <>
                    ISBN: <input type="text" value={isbn} onChange={e=>setIsbn(e.target.value)} className='px-2 py-1 rounded-md' />
                    <button onClick={onSearchBook} className='bg-yellow-500 text-white px-6 py-4'>Search for Book</button>
                </>
            }
        </div>
    )
}

export default FindBook