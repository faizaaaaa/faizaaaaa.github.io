import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Typer() {
    const [text] = useTypewriter({
        words: [' Developer.', ' Designer.', ' Coder.', ' Photographer.', ' Creative.', ' Builder.'],
        loop: {},
    });

    return (
        <h1 style={{margin: '50px'}} className="typer-container"> 
            I'm a 
            <span style={{fontWeight: 'bold', color: 'white'}}>
                { text }
            </span>

            <Cursor/>
        </h1>
    )


};



export default Typer;