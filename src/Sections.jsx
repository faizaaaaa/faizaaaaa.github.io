import React from 'react';
import Song from './Song';
import Top from './Top';


function Sections() {
    
    return (
        <div>
            <div id="section1" className="section">
                <Song audioFile="public/sounds/hills.wav" />
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
