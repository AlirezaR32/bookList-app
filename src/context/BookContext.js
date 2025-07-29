import react, { createContext, useState } from "react";

export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { Title: 'سووشون', Author: 'سیمین دانشور', id: 1},
        { Title: 'خوب های بد بدهای خوب', Author: 'سومان چیمانی', id: 2},
        { Title: 'سووشون', Author: 'سیمین دانشور', id : 3}
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
export default BookContextProvider;