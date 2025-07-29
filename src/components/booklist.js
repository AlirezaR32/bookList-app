import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';


function Booklist() {
    const {books} = useContext(BookContext)
    books.length?(
        <div>
            <ul>
                {books.map(book => {
                    return(
                        <bookDetails key={books.id} book={book}/>
                    )
                })}
            </ul>
        </div>
    ):(
        <div>هیچ کتابی وجود نداره</div>
    )
}

export default Booklist;