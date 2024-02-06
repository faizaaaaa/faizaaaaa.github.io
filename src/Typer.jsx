import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Typer() {
    const [text] = useTypewriter({
        words: [' Developer.', ' Designer.', ' Coder.', ' Photographer.'],
        loop: {},
    });

    return (
        <div>
        
        <h1 style={{margin: '50px'}} className="typer-container">  
            
            <span style={{fontWeight: 'bold', color: 'white'}}>
                { text }
            </span>

            <Cursor/>
        </h1>
        </div>
    )


};



export default Typer;