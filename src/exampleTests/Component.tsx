
import React, { useState } from 'react';


export const Component: React.FC = () => {

    const [text, setText] = useState('Unclicked');
    const handleClick = () => {
        // eslint-disable-next-line no-shadow
        setText(  'Clicked');
        setTimeout(() => setText('Changed!'), 900);
    };
    return (
        <div className="container" data-testid='not-empty'>
            <p>This is a component</p>
            <button data-testid='button' onClick={handleClick} >{text}</button>
        </div>
    );
};

