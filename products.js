// Products data - extended with more products
const allProducts = [
  {
    id: 1,
    title: 'Apex Mechanical Keyboard',
    category: 'keyboards',
    price: 129,
    desc: 'Hot-swap switches, RGB, aluminum frame',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop',
    featured: true,
    rating: 5,
    reviews: 128,
    inStock: true
  },
  {
    id: 2,
    title: 'Viper Pro Gaming Mouse',
    category: 'mice',
    price: 69,
    desc: 'Ergonomic, 16k sensor, wireless',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=400&fit=crop',
    featured: true,
    rating: 4,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    title: 'StudioX Headset',
    category: 'headsets',
    price: 99,
    desc: 'Closed-back, high fidelity audio',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=600&h=400&fit=crop',
    featured: true,
    rating: 5,
    reviews: 64,
    inStock: true
  },
  {
    id: 4,
    title: 'USB-C Hub 7-in-1',
    category: 'hubs',
    price: 49,
    desc: 'Fast charging and multiple ports',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 42,
    inStock: true
  },
  {
    id: 5,
    title: 'Compact Wireless Keyboard',
    category: 'keyboards',
    price: 79,
    desc: 'Low profile, bluetooth, mechanical',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 56,
    inStock: true
  },
  {
    id: 6,
    title: 'Gaming Mouse Pad XL',
    category: 'accessories',
    price: 29,
    desc: 'Extra large, non-slip base, RGB edge lighting',
    image: 'https://images.unsplash.com/photo-1600003263720-95b45a4035d5?w=600&h=400&fit=crop',
    featured: false,
    rating: 5,
    reviews: 31,
    inStock: true
  },
  {
    id: 7,
    title: 'Wireless Earbuds Pro',
    category: 'audio',
    price: 149,
    desc: 'Active noise cancellation, 30hr battery',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=400&fit=crop',
    featured: false,
    rating: 5,
    reviews: 203,
    inStock: true
  },
  {
    id: 8,
    title: 'Monitor Stand Riser',
    category: 'accessories',
    price: 45,
    desc: 'Adjustable height, cable management',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 28,
    inStock: true
  },
  {
    id: 9,
    title: 'Mechanical Numpad',
    category: 'keyboards',
    price: 39,
    desc: 'Separate numeric keypad, mechanical switches',
    image: 'https://images.unsplash.com/photo-1558040456-7b36d8d1c58c?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 17,
    inStock: true
  },
  {
    id: 10,
    title: 'Ergonomic Vertical Mouse',
    category: 'mice',
    price: 59,
    desc: 'Vertical design reduces wrist strain',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 73,
    inStock: true
  },
  {
    id: 11,
    title: 'Gaming Headset Pro',
    category: 'headsets',
    price: 129,
    desc: '7.1 surround sound, noise-canceling mic',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=600&h=400&fit=crop',
    featured: false,
    rating: 5,
    reviews: 94,
    inStock: true
  },
  {
    id: 12,
    title: 'Thunderbolt 4 Dock',
    category: 'hubs',
    price: 199,
    desc: 'Dual 4K display support, 90W charging',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop',
    featured: false,
    rating: 5,
    reviews: 38,
    inStock: true
  },
  {
    id: 13,
    title: 'Webcam 4K Pro',
    category: 'accessories',
    price: 89,
    desc: '4K resolution, auto light correction',
    image: 'https://images.unsplash.com/photo-1558089687-b23f9c011d86?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 126,
    inStock: true
  },
  {
    id: 14,
    title: 'Desktop Speakers',
    category: 'audio',
    price: 79,
    desc: 'Stereo sound, wooden enclosures',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 67,
    inStock: true
  },
  {
    id: 15,
    title: 'Laptop Stand Aluminum',
    category: 'accessories',
    price: 55,
    desc: 'Adjustable height, portable design',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 42,
    inStock: true
  },
  {
    id: 16,
    title: 'RGB Mouse Bungee',
    category: 'accessories',
    price: 25,
    desc: 'Keeps mouse cable elevated, RGB lighting',
    image: 'https://images.unsplash.com/photo-1600003263720-95b45a4035d5?w=600&h=400&fit=crop',
    featured: false,
    rating: 4,
    reviews: 19,
    inStock: true
  }
];

// Products page specific functionality
let currentPage = 1;
const productsPerPage = 8;

function initProductsPage() {
  console.log('Initializing products page...');
  
  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Check for category filter in URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  if (category && document.getElementById('category-select')) {
    document.getElementById('category-select').value = category;
  }
  
  // Initialize event listeners
  initEventListeners();
  
  // Render initial products
  renderProducts();
}

function initEventListeners() {
  const categorySelect = document.getElementById('category-select');
  const searchInput = document.getElementById('search');
  const sortSelect = document.getElementById('sort-select');
  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');

  if (categorySelect) {
    categorySelect.addEventListener('change', handleFilterChange);
  }
  
  if (searchInput) {
    searchInput.addEventListener('input', handleFilterChange);
  }
  
  if (sortSelect) {
    sortSelect.addEventListener('change', handleFilterChange);
  }
  
  if (prevButton) {
    prevButton.addEventListener('click', goToPreviousPage);
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', goToNextPage);
  }
}

function handleFilterChange() {
  currentPage = 1;
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const resultsCount = document.getElementById('results-count');
  
  if (!grid) {
    console.error('Products grid not found!');
    return;
  }

  // Show loading state
  grid.innerHTML = '<div class="loading-products">Loading products...</div>';
  
  // Get filter values
  const category = document.getElementById('category-select')?.value || 'all';
  const query = document.getElementById('search')?.value || '';
  const sort = document.getElementById('sort-select')?.value || 'featured';
  
  // Filter products
  let filteredProducts = allProducts.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = !query || 
      product.title.toLowerCase().includes(query.toLowerCase()) || 
      product.desc.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Sort products
  filteredProducts = sortProducts(filteredProducts, sort);
  
  // Update results count
  if (resultsCount) {
    resultsCount.textContent = `Showing ${filteredProducts.length} products`;
  }
  
  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  
  // Clear grid and show products or no results message
  grid.innerHTML = '';
  
  if (paginatedProducts.length === 0) {
    grid.innerHTML = `
      <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--muted);">
        <h3>No products found</h3>
        <p>Try adjusting your filters or search terms</p>
        <button class="btn primary" onclick="clearFilters()">Clear Filters</button>
      </div>
    `;
  } else {
    paginatedProducts.forEach(product => {
      const card = createProductCard(product);
      grid.appendChild(card);
    });
  }
  
  updatePaginationInfo(totalPages);
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="product-img" 
         onclick="viewProductDetails(${product.id})" 
         style="cursor: pointer;">
    <div class="title">${product.title}</div>
    <div class="muted small">${product.desc}</div>
    <div class="product-meta">
      <span class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</span>
      <span class="reviews small">(${product.reviews})</span>
    </div>
    <div class="price">$${product.price}</div>
    <div class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
      ${product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
    </div>
    <div class="actions">
      <button class="btn" onclick="viewProductDetails(${product.id})">View Details</button>
      <button class="btn primary" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  `;
  return card;
}

function sortProducts(products, sortType) {
  switch (sortType) {
    case 'price-low':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-high':
      return [...products].sort((a, b) => b.price - a.price);
    case 'name':
      return [...products].sort((a, b) => a.title.localeCompare(b.title));
    case 'rating':
      return [...products].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    case 'featured':
    default:
      return [...products].sort((a, b) => b.featured - a.featured || b.rating - a.rating);
  }
}

function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goToNextPage() {
  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updatePaginationInfo(totalPages) {
  const pageInfo = document.getElementById('page-info');
  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');

  if (pageInfo) {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  }
  
  if (prevButton) {
    prevButton.disabled = currentPage === 1;
  }
  
  if (nextButton) {
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
  }
}

function clearFilters() {
  const categorySelect = document.getElementById('category-select');
  const searchInput = document.getElementById('search');
  const sortSelect = document.getElementById('sort-select');

  if (categorySelect) categorySelect.value = 'all';
  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'featured';
  
  currentPage = 1;
  renderProducts();
}

function viewProductDetails(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

function addToCart(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  if (!product.inStock) {
    alert('This product is currently out of stock.');
    return;
  }

  // Check if user is logged in (simulated)
  const isLoggedIn = false; // This would check actual login status
  
  if (!isLoggedIn) {
    alert('Please login to add items to your cart.');
    window.location.href = 'login.html';
    return;
  }

  // Add to cart logic here
  console.log('Added to cart:', product.title);
  showNotification(`Added ${product.title} to cart!`);
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--accent);
    color: var(--bg);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
    font-weight: 600;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Add CSS for additional styles
const additionalStyles = `
  .loading-products {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem;
    color: var(--muted);
    font-size: 1.1rem;
  }
  
  .results-info {
    margin-bottom: 1.5rem;
    color: var(--muted);
    font-size: 0.9rem;
  }
  
  .stock-status {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }
  
  .stock-status.in-stock {
    color: var(--accent);
  }
  
  .stock-status.out-of-stock {
    color: #ff6b6b;
  }
  
  .product-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }
  
  .rating {
    color: #ffd700;
  }
  
  .reviews {
    color: var(--muted);
  }
  
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize products page when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductsPage);
} else {
  initProductsPage();
}

// Make functions available globally
window.initProductsPage = initProductsPage;
window.renderProducts = renderProducts;
window.clearFilters = clearFilters;
window.viewProductDetails = viewProductDetails;
window.addToCart = addToCart;
window.goToPreviousPage = goToPreviousPage;
window.goToNextPage = goToNextPage;