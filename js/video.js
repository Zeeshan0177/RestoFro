document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('promoVideo');
    const playButton = document.getElementById('playButton');

    // Prevent video from looping
    video.loop = false;

    // Function to handle play/pause
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playButton.style.opacity = '0';
        } else {
            video.pause();
            playButton.style.opacity = '1';
        }
    }

    // Play button click handler
    playButton.addEventListener('click', function(e) {
        e.stopPropagation();  // Prevent click from reaching video
        togglePlayPause();
    });

    // Video click handler
    video.addEventListener('click', function() {
        togglePlayPause();
    });

    // When video ends
    video.addEventListener('ended', function() {
        playButton.style.opacity = '1';
        // Reset video to start
        video.currentTime = 0;
    });
});