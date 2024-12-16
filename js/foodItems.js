const foodItems = [
    {
        name: 'Home made pizza',
        price: '₹190',
        image: 'images/homepizza1.png',
        rating: '4.7',
        time: '50-79 min',
        discount: '50%'
    },
    {
        name: 'Home made pizza',
        price: '₹100',
        image: 'images/homepizza2.png',
        rating: '3.3',
        time: '50-79 min'
    },
    {
        name: 'Home made pizza',
        price: '₹150',
        image: 'images/homepizza3.png',
        rating: '4.1',
        time: '50-79 min',
        discount: '20%'
    },
    {
        name: 'Home made pizza',
        price: '₹180',
        image: 'images/homepizza4.png',
        rating: '3.4',
        time: '50-79 min'
    },
    {
        name: 'Home made pizza',
        price: '₹450',
        image: 'images/homepizza5.png',
        rating: '4.6',
        time: '50-79 min',
        discount: '50%'
    },
    {
        name: 'Home made pizza',
        price: '₹230',
        image: 'images/homepizza6.png',
        rating: '3.9',
        time: '50-79 min'
    },
    {
        name: 'Home made pizza',
        price: '₹350',
        image: 'images/homepizza7.png',
        rating: '4.9',
        time: '50-79 min',
        discount: '50%'
    },
    {
        name: 'Home made pizza',
        price: '₹290',
        image: 'images/homepizza8.png',
        rating: '4.1',
        time: '50-79 min'
    },
    {
        name: 'Home made pizza',
        price: '₹530',
        image: 'images/homepizza9.png',
        rating: '4.4',
        time: '50-79 min',
        discount: '50%'
    },
    {
        name: 'Home made pizza',
        price: '₹200',
        image: 'images/homepizza10.png',
        rating: '4.2',
        time: '50-79 min'
    },
    {
        name: 'Home made pizza',
        price: '₹140',
        image: 'images/homepizza11.png',
        rating: '4.7',
        time: '50-79 min'
    },
    {
        name: 'Home made pizza',
        price: '₹110',
        image: 'images/homepizza12.png',
        rating: '3.9',
        time: '50-79 min',
        discount: '20%'
    }
];

// Function to render food items
function renderFoodItems() {
    const foodGrid = document.querySelector('.food-grid');
    foodGrid.innerHTML = foodItems.map(item => `
        <div class="food-item">
            ${item.discount ? `<div class="discount-tag">${item.discount}</div>` : ''}
            <img src="${item.image}" alt="${item.name}">
            <div class="food-item-info">
                <div class="title-price-row">
                    <h3 class="food-item-title">${item.name}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <div class="rating-add">
                    <div class="rating-time">
                        <span class="kitchen-star">★</span>
                        <span class="rating-number">${item.rating}</span>
                        <span class="delivery-time">${item.time}</span>
                    </div>
                    <button class="add-button">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', renderFoodItems);