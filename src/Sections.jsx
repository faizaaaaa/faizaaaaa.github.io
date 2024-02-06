import React from 'react';
import Song from './Song';
import Top from './Top';


function Sections() {
    let name = " Faiza Nasiha"
    return (
        <div>
            <div id="section1" className="section">
                <Song audioFile="public/sounds/hills.wav" />
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
                <Song audioFile="public/sounds/itse.wav" />
                <Top></Top>
                {/* Additional content for Section 2 */}
            </div>
            <div id="section3" className="section">
                <Song audioFile="public/sounds/hills.wav" />
                {/* Additional content for Section 3 */}
            </div>
            <div id="section4" className="section">
                <Song audioFile="public/sounds/hills.wav" />
                {/* Additional content for Section 4 */}
            </div>
            <div id="section5" className="section">
                <Song audioFile="public/sounds/hills.wav" />
                {/* Additional content for Section 4 */}
            </div>
            {/* Other sections or content */}
        </div>
    );
}

export default Sections;
