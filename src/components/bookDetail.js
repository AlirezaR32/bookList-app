import React from 'react';

function BookDetail({book}) {
    return ( 
        <li>
            <div>{book.title}</div>
            <div>{book.author}</div>
        </li>
    );
}

export default BookDetail;