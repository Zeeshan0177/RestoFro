class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.isOpen = false;
        
        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    open() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.isOpen = false;
    }
}

// Initialize the cart modal
document.addEventListener('DOMContentLoaded', () => {
    const cartModal = new Modal('cartModal');
    
    // Cart icon click handler
    document.getElementById('cartIcon').addEventListener('click', () => {
        cartModal.open();
    });

    // Back to menu button handler
    document.getElementById('backToMenu').addEventListener('click', () => {
        cartModal.close();
    });
});

// Get modal elements
const cartModal = document.getElementById('cartModal');
const cartIcon = document.querySelector('.cart-icon');
const backToMenuBtn = document.getElementById('backToMenu');

// Function to open modal
function openModal() {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Function to close modal
function closeModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event Listeners
cartIcon.addEventListener('click', openModal);
backToMenuBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartModal.classList.contains('active')) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const requestBtn = document.querySelector('.request-dish-btn');
    const modal = document.getElementById('requestModal');
    const cancelBtn = document.getElementById('cancelRequest');

    // Open modal
    requestBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close modal
    cancelBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle form submission
    const form = modal.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Add any form submission logic here
    });
});