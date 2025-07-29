import React, { useState } from 'react';

function BookForm() {
    const {title, setTitle} = useState('');
    const {author, setAuthor} = useState('');
    const onsubmit = (e) => {
        e.preventDefault();
        setAuthor('');
        setTitle('');
    }
    return ( 
        <div>
            <form>
                <input type='text' value={title} required onChange={(e) => setTitle(e.target.value)}></input>
                <input type='text' value={author} onChange={(e) =>setAuthor(e.target.value)}></input>
                <input type='submit' value={'ثبت کتاب'}></input>
            </form>
        </div>
     );
}

export default BookForm;