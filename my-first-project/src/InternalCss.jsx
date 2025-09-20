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
  <h1 classname="int" style={int}>LET'S LEARN REACT(*_*)</h1>
  <p style={{backgroundcolor: "red"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sunt accusantium sequi nam ipsum placeat tempore est eaque, in id enim, corporis corrupti cupiditate et dicta earum numquam esse tempora asperiores impedit? Iure animi, cum sit alias dignissimos vitae consequatur consequuntur molestias possimus accusantium culpa odit, laborum ullam modi cupiditate.</p>
</div>

    );
};

export default InternalCss;