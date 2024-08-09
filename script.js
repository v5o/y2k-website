document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const fileUpload = document.getElementById('file-upload');
    const uploadButton = document.getElementById('upload-button');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const progressBar = document.getElementById('progress-bar');

    let audio = new Audio();
    let currentTrack = null;

    // Play button functionality
    playButton.addEventListener('click', () => {
        if (currentTrack) {
            audio.play();
        }
    });

    // Pause button functionality
    pauseButton.addEventListener('click', () => {
        if (currentTrack) {
            audio.pause();
        }
    });

    // Load and play a track
    uploadButton.addEventListener('click', () => {
        const file = fileUpload.files[0];
        if (file) {
            audio.src = URL.createObjectURL(file);
            audio.load();
            audio.play();
            trackTitle.textContent = file.name;
            trackArtist.textContent = 'Unknown Artist'; // Placeholder
            currentTrack = file;
        }
    });

    // Update progress bar
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            progressBar.value = (audio.currentTime / audio.duration) * 100;
        }
    });

    // Handle progress bar interaction
    progressBar.addEventListener('input', () => {
        if (audio.duration) {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        }
    });
});
