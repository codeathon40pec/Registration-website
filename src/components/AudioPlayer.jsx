import { useAudio } from '../context/AudioContext';

const AudioPlayer = () => {
    const audioContext = useAudio();

    // Fail safe if context is missing
    if (!audioContext) return null;

    const { isPlaying, toggleAudio } = audioContext;

    return (
        <button
            id="audio-btn"
            className="audio-btn hidden"
            aria-label={isPlaying ? "Mute Audio" : "Unmute Audio"}
            onClick={toggleAudio}
        >
            {isPlaying ? '🔊' : '🔇'}
        </button>
    );
};

export default AudioPlayer;
