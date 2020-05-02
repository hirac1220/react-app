import React from 'react';
import { useState, useEffect } from "react";

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
            <p>this is {JSON.stringify(bookData)} book list component</p>
        </div>
    );
}
export default Booklist;