import React from 'react';

const InternalCss = () => {
    // <style>
    //     .int
    // </style>
    const int ={
        backgroundColor:'yellow',
        color:"red",
        margin:"10px",
        padding:"10px",

    }
    return (
        <div>
            <h1 className='int' style={int}>LET'S LEARN REACT(*_*)</h1>
        </div>
    );
};

export default InternalCss;