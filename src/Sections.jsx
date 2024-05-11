import React from 'react';
import About from './About';
import Card from './Card';
import Song from './Song';
import Work from './Work';




function Sections() {
    let name = " Faiza Nasiha"
    return (
        <div>
            <div id="section1" className="section">
                <Song audioFile="/sounds/hills.wav" />
                <h2 style={{margin: '50px'}} className="home-container">
                <span style={{fontWeight: 'bold', color: 'white'}}>
                Welcome to my site 🤍
                 </span>
                </h2>
                <h2 style={{margin: '50px'}} className="name-container">
                 I'm 
                <span style={{fontWeight: 'bold', color: 'white', fontSize: '60px'}}>
                 {name}
                 </span>
                 , an aspiring ...
                </h2>
                {/* Additional content for Section 1 */}
            </div>

            <div id="section2" className="section">
                <Song audioFile="/sounds/itse.wav" />
                <About />
                
                
                
                {/* Additional content for Section 2 */}
            </div>
            <div id="section3" className="section">
            <Song audioFile="/sounds/lits.wav" />
            <Card />
            <Work></Work>
                {/* Additional content for Section 3 */}
            </div>
            <div id="section4" className="section">
                <Song audioFile="/sounds/hills.wav" />
                {/* Additional content for Section 4 */}
            </div>
            <div id="section5" className="section">
                <Song audioFile="/sounds/hills.wav" />
                {/* Additional content for Section 4 */}
            </div>
            <div id="section6" className="section">
                <Song audioFile="/sounds/hills.wav" />
                {/* Additional content for Section 4 */}
            </div>
            {/* Other sections or content */}
        </div>
    );
}

export default Sections;
