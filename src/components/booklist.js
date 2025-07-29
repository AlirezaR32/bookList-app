import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetail from './bookDetail';


function Booklist() {
    const {books} = useContext(BookContext)
    return books.length?(
        <div className='Booklist'>
            <ul>
                {books.map(book => {
                    return(
                        <BookDetail key={book.id} book={book}/>
                    )
                })}
            </ul>
        </div>
    ):(
        <div>هیچ کتابی وجود نداره</div>
    )
}

export default Booklist;