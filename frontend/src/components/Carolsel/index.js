import React from 'react';


export default function Carolsel(props) {

    return(
        <div>

            <h1>{props.title}</h1>
            {
                console.log(props.products)
            }
        </div>
        
        
    );
}