const menuItems = [
    // Coffee
    { id: 1, category: 'coffee', name: 'Espresso', desc: 'Strong and bold single shot of coffee', price: 600, img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop' },
    { id: 2, category: 'coffee', name: 'Cappuccino', desc: 'Espresso with steamed milk and a thick layer of foam', price: 850, img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=200&fit=crop' },
    { id: 3, category: 'coffee', name: 'Café Latte', desc: 'Espresso with lots of steamed milk and a light layer of foam', price: 900, img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=200&fit=crop' },
    { id: 4, category: 'coffee', name: 'Americano', desc: 'Espresso diluted with hot water', price: 700, img: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=300&h=200&fit=crop' },
    { id: 5, category: 'coffee', name: 'Mocha', desc: 'Espresso with chocolate and steamed milk', price: 1100, img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=300&h=200&fit=crop' },
    { id: 6, category: 'coffee', name: 'Iced Coffee', desc: 'Chilled coffee served over ice with milk and syrup', price: 950, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop' },
    { id: 7, category: 'coffee', name: 'Cold Brew', desc: 'Slow-steeped cold coffee for a smooth finish', price: 1050, img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=200&fit=crop' },
    
    // Tea
    { id: 8, category: 'tea', name: 'Ceylon Tea', desc: 'Classic premium Sri Lankan black tea', price: 400, img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300&h=200&fit=crop' },
    { id: 9, category: 'tea', name: 'Milk Tea', desc: 'Strong Ceylon tea with sweetened condensed milk', price: 550, img: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=300&h=200&fit=crop' },
    { id: 10, category: 'tea', name: 'Iced Tea', desc: 'Refreshing cold tea with lemon and mint', price: 600, img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=300&h=200&fit=crop' },
    { id: 11, category: 'tea', name: 'Ginger Tea', desc: 'Warm and spicy ginger infused black tea', price: 450, img: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&h=200&fit=crop' },
    { id: 12, category: 'tea', name: 'Lemon Tea', desc: 'Black tea with a hint of fresh lemon', price: 450, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop' },
    
    // Cold Drinks
    { id: 13, category: 'cold-drinks', name: 'Fresh Fruit Juice', desc: 'Choice of Orange, Papaya, Mango or Mixed', price: 800, img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
    { id: 14, category: 'cold-drinks', name: 'Smoothies', desc: 'Banana, Strawberry or Mixed Berry blend', price: 1200, img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' },
    { id: 15, category: 'cold-drinks', name: 'Milkshakes', desc: 'Vanilla, Chocolate or Strawberry', price: 1100, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop' },
    { id: 16, category: 'cold-drinks', name: 'Iced Chocolate', desc: 'Rich chocolate drink served cold with ice cream', price: 1250, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop' },
    { id: 17, category: 'cold-drinks', name: 'Lemonade', desc: 'Classic refreshing lemonade with mint', price: 750, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300&h=200&fit=crop' },
    
    // Breakfast
    { id: 18, category: 'breakfast', name: 'Egg & Toast', desc: 'Two eggs cooked your way with buttered toast', price: 950, img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=200&fit=crop' },
    { id: 19, category: 'breakfast', name: 'Pancakes', desc: 'Fluffy stack served with honey and chocolate syrup', price: 1200, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop' },
    { id: 20, category: 'breakfast', name: 'French Toast', desc: 'Cinnamon spiced french toast with berries', price: 1300, img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=200&fit=crop' },
    { id: 21, category: 'breakfast', name: 'Breakfast Sandwich', desc: 'Egg, cheese, and bacon or chicken sausage', price: 1400, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop' },
    { id: 22, category: 'breakfast', name: 'Avocado Toast', desc: 'Smashed avocado on sourdough topped with seeds', price: 1600, img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=200&fit=crop' },
    
    // Mains
    { id: 23, category: 'mains', name: 'Chicken Burger', desc: 'Crispy chicken patty with lettuce, tomato and fries', price: 1800, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop' },
    { id: 24, category: 'mains', name: 'Beef Burger', desc: 'Juicy beef patty, cheddar cheese, caramelized onions', price: 2100, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop' },
    { id: 25, category: 'mains', name: 'Chicken Sandwich', desc: 'Grilled chicken, pesto, mozzarella on ciabatta', price: 1500, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop' },
    { id: 26, category: 'mains', name: 'Pasta', desc: 'Choice of creamy Carbonara or rich Bolognese', price: 1950, img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=200&fit=crop' },
    { id: 27, category: 'mains', name: 'Sri Lankan Rice & Curry', desc: 'Authentic local curry feast with seasonal vegetables and chicken/fish', price: 1650, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop' },
    { id: 28, category: 'mains', name: 'Rice Bowl', desc: 'Teriyaki chicken or tofu with steamed rice and veggies', price: 1700, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop' },
    { id: 35, category: 'mains', name: 'Chicken Fried Rice (Full)', desc: 'Delicious Sri Lankan style chicken fried rice', price: 1400, img: './images/full_rice.jpg' },
    { id: 36, category: 'mains', name: 'Chicken Fried Rice (Half)', desc: 'Delicious Sri Lankan style chicken fried rice (Half portion)', price: 900, img: './images/full_rice.jpg' },
    { id: 37, category: 'mains', name: 'Mix Fried Rice (Full)', desc: 'Fried rice with chicken, seafood, and egg', price: 1600, img: './images/full_rice.jpg' },
    { id: 38, category: 'mains', name: 'Mix Fried Rice (Half)', desc: 'Fried rice with chicken, seafood, and egg (Half portion)', price: 1000, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop' },
    { id: 39, category: 'mains', name: 'Chicken Kottu (Full)', desc: 'Classic Sri Lankan street food with roast chicken', price: 1300, img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=200&fit=crop' },
    { id: 40, category: 'mains', name: 'Chicken Kottu (Half)', desc: 'Classic Sri Lankan street food with roast chicken (Half portion)', price: 850, img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=200&fit=crop' },
    { id: 41, category: 'mains', name: 'Cheese Kottu (Full)', desc: 'Cheesy and creamy kottu with chicken', price: 1500, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop' },
    { id: 42, category: 'mains', name: 'Cheese Kottu (Half)', desc: 'Cheesy and creamy kottu with chicken (Half portion)', price: 1000, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop' },
    
    // Desserts
    { id: 29, category: 'desserts', name: 'Chocolate Cake', desc: 'Rich, moist and decadent chocolate fudge cake', price: 950, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop' },
    { id: 30, category: 'desserts', name: 'Cheesecake', desc: 'Classic New York style with berry compote', price: 1100, img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop' },
    { id: 31, category: 'desserts', name: 'Brownie', desc: 'Warm gooey brownie served with vanilla ice cream', price: 850, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop' },
    { id: 32, category: 'desserts', name: 'Waffle', desc: 'Crispy waffle with chocolate sauce and strawberries', price: 1350, img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop' },
    { id: 33, category: 'desserts', name: 'Fruit Bowl', desc: 'Fresh seasonal fruits with honey', price: 750, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&h=200&fit=crop' },
    { id: 34, category: 'desserts', name: 'Ice Cream', desc: 'Two scoops (Vanilla, Chocolate, or Strawberry)', price: 650, img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' },
];

let cart = [];

// Format currency
const formatLKR = (amount) => `LKR ${amount.toLocaleString()}`;

// DOM Elements
const menuContainer = document.getElementById('menu-container');
const filterBtns = document.querySelectorAll('.menu-filter-btn');
const cartBtn = document.getElementById('cart-btn');
const mobileCartBtn = document.getElementById('mobile-cart-btn');
const cartCount = document.getElementById('cart-count');
const mobileCartCount = document.getElementById('mobile-cart-count');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const checkoutForm = document.getElementById('checkout-form');
const checkoutBtn = document.getElementById('checkout-btn');
const orderTypeSelect = document.getElementById('order-type');
const orderAddressInput = document.getElementById('order-address');
const orderSuccess = document.getElementById('order-success');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

// Initialize Menu
function renderMenu(filter = 'all') {
    menuContainer.innerHTML = '';
    
    const filteredMenu = filter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filter);
        
    filteredMenu.forEach((item, index) => {
        const delay = index * 50;
        const card = document.createElement('div');
        card.className = `bg-white rounded-2xl overflow-hidden shadow-sm border border-beige/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in group`;
        card.style.animationDelay = `${delay}ms`;
        
        card.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onclick="addToCart(${item.id})" class="bg-terracotta text-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-serif text-xl font-bold text-coffee">${item.name}</h3>
                    <span class="font-bold text-terracotta">${formatLKR(item.price)}</span>
                </div>
                <p class="text-gray-500 text-sm mb-4 h-10">${item.desc}</p>
                <button onclick="addToCart(${item.id})" class="w-full py-2 border-2 border-coffee text-coffee font-medium rounded-full hover:bg-coffee hover:text-white transition-colors">
                    Add to Order
                </button>
            </div>
        `;
        menuContainer.appendChild(card);
    });
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        btn.classList.add('active');
        // Filter
        renderMenu(btn.dataset.filter);
    });
});

// Cart Logic
function toggleCart() {
    const isClosed = cartSidebar.classList.contains('translate-x-full');
    
    if (isClosed) {
        cartOverlay.classList.remove('hidden');
        setTimeout(() => cartOverlay.classList.remove('opacity-0'), 10);
        cartSidebar.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
        cartOverlay.classList.add('opacity-0');
        cartSidebar.classList.add('translate-x-full');
        setTimeout(() => cartOverlay.classList.add('hidden'), 300);
        document.body.style.overflow = '';
        
        // Reset checkout form if it was showing
        if (!checkoutForm.classList.contains('hidden') && cart.length > 0) {
            // Keep it ready for next time
        }
    }
}

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    const existingItem = cart.find(i => i.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCartUI();
    
    // Tiny animation on cart icon
    cartBtn.classList.add('scale-110', 'text-terracotta');
    setTimeout(() => cartBtn.classList.remove('scale-110', 'text-terracotta'), 200);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    // Update counts
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;
    mobileCartCount.innerText = totalItems;
    
    // Update HTML
    if (cart.length === 0) {
        emptyCartMsg.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        cartItemsContainer.appendChild(emptyCartMsg);
        checkoutForm.classList.add('hidden');
        checkoutBtn.disabled = true;
    } else {
        emptyCartMsg.style.display = 'none';
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const el = document.createElement('div');
            el.className = 'flex justify-between items-center bg-white p-3 rounded-lg border border-beige shadow-sm';
            el.innerHTML = `
                <div class="flex items-center gap-3">
                    <img src="${item.img}" class="w-12 h-12 rounded object-cover">
                    <div>
                        <h4 class="font-bold text-coffee text-sm">${item.name}</h4>
                        <span class="text-terracotta text-xs font-bold">${formatLKR(item.price)}</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex items-center bg-cream rounded-md border border-beige">
                        <button onclick="updateQuantity(${item.id}, -1)" class="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-terracotta">-</button>
                        <span class="w-6 text-center text-sm font-medium">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-terracotta">+</button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 transition-colors">
                        <i class="fa-solid fa-trash-can text-sm"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(el);
        });
        
        checkoutBtn.disabled = false;
    }
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.innerText = formatLKR(subtotal);
    
    // Calculate total (Add 10% tax/service charge, plus delivery if applicable)
    let total = subtotal;
    const isDelivery = orderTypeSelect.value === 'delivery';
    const deliveryFee = isDelivery && cart.length > 0 ? 300 : 0; // 300 LKR delivery fee
    total += deliveryFee;
    
    cartTotal.innerText = formatLKR(total);
}

// Checkout Logic
orderTypeSelect.addEventListener('change', (e) => {
    if (e.target.value === 'delivery') {
        orderAddressInput.classList.remove('hidden');
        orderAddressInput.required = true;
    } else {
        orderAddressInput.classList.add('hidden');
        orderAddressInput.required = false;
    }
    updateCartUI(); // Recalculate total
});

checkoutBtn.addEventListener('click', () => {
    if (checkoutForm.classList.contains('hidden')) {
        // Show form
        checkoutForm.classList.remove('hidden');
        checkoutBtn.innerText = 'Place Order';
    } else {
        // Submit form
        if (checkoutForm.checkValidity()) {
            // Fake submission
            checkoutBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
            checkoutBtn.disabled = true;
            
            setTimeout(() => {
                orderSuccess.classList.remove('hidden');
                checkoutBtn.classList.add('hidden');
                checkoutForm.classList.add('hidden');
                cart = []; // Empty cart
                updateCartUI();
                
                setTimeout(() => {
                    toggleCart();
                    // Reset
                    orderSuccess.classList.add('hidden');
                    checkoutBtn.classList.remove('hidden');
                    checkoutBtn.innerText = 'Proceed to Checkout';
                    checkoutForm.reset();
                }, 3000);
            }, 1500);
        } else {
            checkoutForm.reportValidity();
        }
    }
});

// Reservation Form
document.getElementById('reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerText;
    
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Reserving...';
    btn.disabled = true;
    
    // Fake API call
    setTimeout(() => {
        document.getElementById('reservation-form').classList.add('hidden');
        document.getElementById('reservation-success').classList.remove('hidden');
    }, 1500);
});

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.replace('bg-white/90', 'bg-white');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.replace('bg-white', 'bg-white/90');
    }
});

// Initialize
renderMenu();
