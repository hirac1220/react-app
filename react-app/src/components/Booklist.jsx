import React from 'react';

const Booklist = props => {
    const result = props.getData?.(props.language);
    return (
        <div>
            <p>this is {result} book list component</p>
        </div>
    );
}
export default Booklist;