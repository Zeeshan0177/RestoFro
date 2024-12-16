const items = [
    {
        name: 'Home made pizza',
        price: '₹190',
        image: 'images/homepizza9.png',
        rating: '4.7',
        time: '50-79 min',
        discount: '50%',
        quantity: 1
    },
    {
        name: 'Tandoori Chicken',
        price: '₹184',
        image: 'images/tandoorichicken.png',
        rating: '4.3',
        time: '15-29 min',
        discount: '20%'
    },
    {
        name: 'Chilli Chicken',
        price: '₹116',
        image: 'images/chillichicken.png',
        rating: '4.1',
        time: '30-40 min',
        discount: '50%'
    }
];

class Carousel {
    constructor(container, items) {
        this.container = container;
        this.items = items;
        this.currentIndex = 0;
        this.initializeCarousel();
    }

    initializeCarousel() {
        // Clear existing content
        this.container.innerHTML = '';
        
        // Create and append each item
        this.items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'carousel-item';
            itemElement.innerHTML = `
    ${item.discount ? `<div class="discount-tag">${item.discount}</div>` : ''}
    <img src="${item.image}" alt="${item.name}">
    <div class="item-info">
        <div class="title-price">
            <h3>${item.name}</h3>
            <span class="price">${item.price}</span>
        </div>
        <div class="rating-controls">
            <div class="rating-time">
                <span class="star">★</span>
                <span>${item.rating}</span>
                <span class="time">(${item.time})</span>
            </div>
            ${item.quantity !== undefined ? `
                <div class="quantity-controls">
                    <button class="minus" data-index="${index}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="plus" data-index="${index}">+</button>
                </div>
            ` : `
                <button class="add" data-index="${index}">+</button>
            `}
        </div>
    </div>
`;
            this.container.appendChild(itemElement);
        });
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(
        document.getElementById('itemsCarousel'),
        items
    );
});