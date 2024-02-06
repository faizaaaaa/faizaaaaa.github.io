import React, { useState, useRef } from 'react';

function Song({ audioFile }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="song-container">
            <button onClick={togglePlayPause} className="button-pretty">
                {isPlaying ? '▢' : '▷ '}
            </button>
            <audio ref={audioRef} src={audioFile} preload="auto" loop />
        </div>
    );
}

export default Song;
