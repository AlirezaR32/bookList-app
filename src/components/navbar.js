import { useContext, useState } from "react";
import React from 'react';
import { BookContext } from "../context/BookContext";

function Navbar() {
    const {books} = useContext(BookContext);
    return ( 
        <div>
            <h1>
                لیست کتاب های من 
            </h1>
            <p>شما اکنون {books.length} کتاب در کتابخانه دارید</p>
        </div>
     );
}

export default Navbar;