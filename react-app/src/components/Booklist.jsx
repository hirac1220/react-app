import React from 'react';
import { useState, useEffect } from "react";

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
            {/* <p>this is {JSON.stringify(bookData)} book list component</p> */}
            <ul>
                {
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) =>
                            <li key={index}>
                                {x.volumeInfo.title},{x.volumeInfo.authors}:
                                <p></p>
                                {x.volumeInfo.readingModes.image !== false
                                    ? <img src={x.volumeInfo.imageLinks.thumbnail} alt="" />
                                    : <span>No Image</span>
                                }
                            </li>
                        )
                }
            </ul>
        </div>
    );
}
export default Booklist;