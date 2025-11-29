// Global products data
const products = [
  {
    id: 1,
    title: 'Apex Mechanical Keyboard',
    category: 'keyboards',
    price: 129,
    desc: 'Hot-swap switches, RGB, aluminum frame',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop',
    featured: true,
    rating: 5,
    reviews: 128
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
    reviews: 89
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
    reviews: 64
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
    reviews: 42
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
    reviews: 56
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
    reviews: 31
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
    reviews: 203
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
    reviews: 28
  }
];

// Utilities
const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));

// Initialize the application
function initApp() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize navigation
  initNavigation();
  
  // Initialize page-specific functionality
  initPage();
}

// Navigation functionality
function initNavigation() {
  // Mobile hamburger menu
  $('.hamburger')?.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.display = 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--card)';
      links.style.padding = '1rem';
    }
  });

  // Smooth scrolling for anchor links
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Page-specific initialization
function initPage() {
  const path = window.location.pathname;
  
  if (path.includes('products.html') || path === '/products.html') {
    initProductsPage();
  } else if (path.includes('product-detail.html') || path === '/product-detail.html') {
    initProductDetailPage();
  } else if (path.includes('login.html') || path === '/login.html') {
    initLoginPage();
  } else if (path.includes('complaints.html') || path === '/complaints.html') {
    initComplaintsPage();
  } else {
    initHomePage();
  }
}

// Home page functionality
function initHomePage() {
  // Shop now button
  $('#shop-now')?.addEventListener('click', () => {
    window.location.href = 'products.html';
  });
}

// Products page functionality
function initProductsPage() {
  renderProducts();
  
  // Event listeners for filters
  $('#category-select')?.addEventListener('change', handleFilterChange);
  $('#search')?.addEventListener('input', handleFilterChange);
  $('#sort-select')?.addEventListener('change', handleFilterChange);
  
  // Pagination
  $('#prev-page')?.addEventListener('click', goToPreviousPage);
  $('#next-page')?.addEventListener('click', goToNextPage);
}

// Product detail page functionality
function initProductDetailPage() {
  // Image thumbnail switching
  $$('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function() {
      const mainImg = $('#main-product-img');
      mainImg.src = this.src;
      
      $$('.thumbnail').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Tab switching
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      
      $$('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      $$('.tab-pane').forEach(pane => pane.classList.remove('active'));
      $(`#${tabName}`).classList.add('active');
    });
  });
}

// Login page functionality
function initLoginPage() {
  $('#login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button[type="submit"]');
    btn.classList.add('loading');
    btn.disabled = true;
    btn.textContent = 'Signing in...';
    
    setTimeout(() => {
      btn.textContent = 'Signed in ✓';
      btn.classList.remove('loading');
      
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Log In';
        alert('Logged in successfully! Redirecting to homepage...');
        window.location.href = 'index.html';
      }, 1000);
    }, 1500);
  });
}

// Complaints page functionality
function initComplaintsPage() {
  $('#complaint-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = $('#c-name').value.trim();
    const email = $('#c-email').value.trim();
    const type = $('#c-type').value;
    const message = $('#c-message').value.trim();
    
    if (!name || !email || !type || !message) {
      alert('Please fill all required fields.');
      return;
    }
    
    const btn = this.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Submitting...';
    
    setTimeout(() => {
      btn.textContent = 'Submitted ✓';
      
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Submit Complaint';
        this.reset();
        alert('Complaint submitted successfully! Our team will contact you within 24 hours.');
      }, 1000);
    }, 1200);
  });
}

// Products rendering and filtering
let currentPage = 1;
const productsPerPage = 8;

function renderProducts(filter = 'all', query = '', sort = 'featured') {
  const grid = $('#products-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  let filteredProducts = products.filter(p => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query.toLowerCase()) || 
      p.desc.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Sort products
  filteredProducts = sortProducts(filteredProducts, sort);
  
  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  
  if (paginatedProducts.length === 0) {
    grid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
    return;
  }
  
  paginatedProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-img" onclick="location.href='product-detail.html?id=${product.id}'">
      <div class="title">${product.title}</div>
      <div class="muted small">${product.desc}</div>
      <div class="product-meta">
        <span class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</span>
        <span class="reviews">(${product.reviews})</span>
      </div>
      <div class="price">$${product.price}</div>
      <div class="actions">
        <button class="btn" onclick="location.href='product-detail.html?id=${product.id}'">View Details</button>
        <button class="btn primary" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
  
  updatePaginationInfo(totalPages);
}

function sortProducts(products, sortType) {
  switch (sortType) {
    case 'price-low':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-high':
      return [...products].sort((a, b) => b.price - a.price);
    case 'name':
      return [...products].sort((a, b) => a.title.localeCompare(b.title));
    case 'featured':
    default:
      return [...products].sort((a, b) => b.featured - a.featured || b.rating - a.rating);
  }
}

function handleFilterChange() {
  currentPage = 1;
  const category = $('#category-select')?.value || 'all';
  const query = $('#search')?.value || '';
  const sort = $('#sort-select')?.value || 'featured';
  renderProducts(category, query, sort);
}

function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    handleFilterChange();
  }
}

function goToNextPage() {
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    handleFilterChange();
  }
}

function updatePaginationInfo(totalPages) {
  const pageInfo = $('.page-info');
  if (pageInfo) {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  }
  
  $('#prev-page').disabled = currentPage === 1;
  $('#next-page').disabled = currentPage === totalPages;
}

// Cart functionality
function addToCart(productId) {
  if (!isUserLoggedIn()) {
    alert('Please login to add items to your cart.');
    window.location.href = 'login.html';
    return;
  }
  
  const product = products.find(p => p.id === productId);
  if (product) {
    // In a real app, this would add to localStorage or send to backend
    console.log('Added to cart:', product.title);
    showNotification(`Added ${product.title} to cart!`);
  }
}

function buyNow(productId) {
  if (!isUserLoggedIn()) {
    alert('Please login to proceed with purchase.');
    window.location.href = 'login.html';
    return;
  }
  
  const product = products.find(p => p.id === productId);
  if (product) {
    // In a real app, this would redirect to checkout
    alert(`Proceeding to checkout with: ${product.title}`);
  }
}

function isUserLoggedIn() {
  // In a real app, this would check authentication status
  return false; // Always false for demo
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

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  .no-products {
    text-align: center;
    padding: 3rem;
    color: var(--muted);
    grid-column: 1 / -1;
  }
`;
document.head.appendChild(style);

// Initialize animations
function initAnimations() {
  const reveals = document.querySelectorAll('.card, .hero-inner, .section-title, .category-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    io.observe(el);
  });
  
  // Reduce motion for accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.floating-card, .login-orbit, .floating-icon').forEach(el => {
      el.style.animation = 'none';
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initApp();
  initAnimations();
});