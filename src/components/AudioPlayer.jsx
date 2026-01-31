import { useAudio } from '../context/AudioContext';

const AudioPlayer = () => {
    const { isPlaying, toggleAudio } = useAudio();

    return (
        <button
            id="audio-btn"
            className="audio-btn"
            aria-label={isPlaying ? "Mute Audio" : "Unmute Audio"}
            onClick={toggleAudio}
        >
            {isPlaying ? '🔊' : '🔇'}
        </button>
    );
};

export default AudioPlayer;
