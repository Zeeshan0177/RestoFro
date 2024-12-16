// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    const carousel = new Carousel(
        document.getElementById('itemsCarousel'),
        items
    );

    // Initialize modals
    const cartModal = new Modal('cartModal');
    const requestModal = new Modal('requestModal');

    // Cart icon click handler
    document.getElementById('cartIcon').addEventListener('click', () => {
        cartModal.open();
    });

    // Back to menu button handler
    document.getElementById('backToMenu').addEventListener('click', () => {
        cartModal.close();
    });

    // Request dish button handler
    document.getElementById('requestDishBtn').addEventListener('click', () => {
        requestModal.open();
    });

    // Cancel request button handler
    document.getElementById('cancelRequest').addEventListener('click', () => {
        requestModal.close();
    });

    // Request form submit handler
    document.getElementById('requestForm').addEventListener('submit', (e) => {
        e.preventDefault();
        requestModal.close();
    });

    // Initialize video player
    const videoPlayer = new VideoPlayer('promoVideo', 'playButton');

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            cartModal.close();
            requestModal.close();
        }
    });
});
