import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title , author)
        setAuthor('');
        setTitle('');
    }
    const {addBook , removeBook}= useContext(BookContext);
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='نام کتاب' value={title} required onChange={(e)=>setTitle(e.target.value)}></input>
                <input type='text' placeholder='نام نویسنده' value={author} required onChange={(e) =>setAuthor(e.target.value)}></input>
                <input type='submit' value={'ثبت کتاب'}></input>
            </form>
        </div>
     );
}

export default BookForm;