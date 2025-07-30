import react, { createContext, useEffect, useState } from "react";
import {v4 as uuid } from 'uuid';

export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, setBooks] = useState(
        // [{ title:'سووشون', author:'سیمین دانشور', id:1},
        // { title:'خوب های بد بدهای خوب', author:'سومان چیمانی', id:2}]
        () => {
            const data = localStorage.getItem('books');
            return data ? JSON.parse(data) : []
        }
    )
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id ))
    }
    const addBook = (title ,author) => {
        setBooks([...books,{title,author, id:uuid()}])
    }
     useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    return (
        <BookContext.Provider value={{books, addBook , removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
export default BookContextProvider;