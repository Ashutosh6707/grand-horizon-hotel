/**
 * GRAND HORIZON – LUXURY STAY & RESORT
 * Master Application Script (Vanilla JS, Event-Driven, Clean MVC Pattern)
 * Designed for College Practical Demonstration & Viva Presentation
 */

'use strict';

/* ==========================================================================
   1. DATA REPOSITORIES (MOCK DATABASE & DEMO CONTENT)
   ========================================================================== */

/**
 * Curated Rooms & Suites Data
 */
const ROOMS_DATA = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Heritage Room',
    category: 'deluxe',
    badge: 'Popular Choice',
    price: 6500,
    size: '450 sq.ft',
    capacity: 2,
    bedType: 'King Size or Twin Beds',
    view: 'Tropical Garden & Pool View',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    description: 'An elegantly appointed retreat featuring handcrafted teakwood accents, plush Italian bedding, and a private sunlit balcony overlooking tranquil palms.',
    amenities: [
      { name: 'Complimentary High-Speed Wi-Fi', icon: 'fa-wifi' },
      { name: '4K Smart Television', icon: 'fa-tv' },
      { name: 'Marble Rain Shower & Tub', icon: 'fa-bath' },
      { name: 'Nespresso Coffee Machine', icon: 'fa-mug-hot' },
      { name: 'Bespoke Bath Amenities', icon: 'fa-pump-soap' },
      { name: 'In-Room Electronic Safe', icon: 'fa-vault' }
    ]
  },
  {
    id: 'executive-suite',
    name: 'Executive Club Suite',
    category: 'executive',
    badge: 'Business & Leisure',
    price: 12000,
    size: '720 sq.ft',
    capacity: 3,
    bedType: 'Master California King',
    view: 'Panoramic Bay & Skyline View',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
    description: 'Spacious open-concept suite complete with an executive marble work desk, separate living salon, and exclusive complimentary access to the Horizon Club Lounge.',
    amenities: [
      { name: 'Horizon Club Lounge Access', icon: 'fa-martini-glass-citrus' },
      { name: 'Complimentary High-Speed Wi-Fi', icon: 'fa-wifi' },
      { name: 'Executive Workstation', icon: 'fa-laptop' },
      { name: 'Deep Soaking Jacuzzi Bath', icon: 'fa-hot-tub-person' },
      { name: '24/7 Butler Call Button', icon: 'fa-bell-concierge' },
      { name: 'Chauffeured Airport Transfer', icon: 'fa-car' }
    ]
  },
  {
    id: 'ocean-view-suite',
    name: 'Oceanfront Azure Suite',
    category: 'suite',
    badge: 'Best Coastal View',
    price: 18500,
    size: '950 sq.ft',
    capacity: 3,
    bedType: 'Imperial King Bed',
    view: '180° Direct Oceanfront',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    description: 'Perched along the azure coastline with panoramic floor-to-ceiling glass doors opening onto an expansive private sundeck with sun-loungers and sunset views.',
    amenities: [
      { name: 'Private Ocean Sunset Sundeck', icon: 'fa-umbrella-beach' },
      { name: 'Ocean-Facing Freestanding Tub', icon: 'fa-bath' },
      { name: 'Bose Surround Audio System', icon: 'fa-volume-high' },
      { name: 'Evening Turndown with Truffles', icon: 'fa-cookie-bite' },
      { name: 'Complimentary Mini-Bar', icon: 'fa-wine-bottle' },
      { name: 'VIP Priority Spa Reservations', icon: 'fa-spa' }
    ]
  },
  {
    id: 'presidential-suite',
    name: 'The Grand Horizon Presidential Suite',
    category: 'suite',
    badge: 'Ultra Luxury Signature',
    price: 35000,
    size: '1,800 sq.ft',
    capacity: 4,
    bedType: 'Dual King Master Suites',
    view: '360° Arabian Coastline & Gardens',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle of architectural splendor. Features two private master bedrooms, a private rooftop plunge pool, dedicated butler, private dining salon, and royal lounge.',
    amenities: [
      { name: 'Private Heated Plunge Pool', icon: 'fa-water-ladder' },
      { name: 'Dedicated 24/7 Personal Butler', icon: 'fa-bell-concierge' },
      { name: 'Private In-Suite Chef Dining', icon: 'fa-utensils' },
      { name: 'Rolls Royce / BMW Airport Escort', icon: 'fa-car-side' },
      { name: 'Complimentary Vintage Champagne', icon: 'fa-champagne-glasses' },
      { name: 'Walk-In Wardrobe & Dressing Salon', icon: 'fa-shirt' }
    ]
  }
];

/**
 * Curated Special Offers & Packages
 */
const OFFERS_DATA = [
  {
    id: 'weekend-getaway',
    title: 'Weekend Coastal Getaway',
    discount: '15% Off Stay',
    promoCode: 'WEEKEND15',
    discountPercent: 15,
    tag: 'Limited Time',
    description: 'Escape the city rush. Includes two nights in a Deluxe or Suite room, daily buffet breakfast, and late checkout.',
    perks: ['15% Off Best Available Rate', 'Daily Gourmet Breakfast Buffet', 'Guaranteed 3:00 PM Late Checkout']
  },
  {
    id: 'romantic-escape',
    title: 'Couples Romantic Sanctuary',
    discount: '20% Off + Spa Ritual',
    promoCode: 'ROMANCE20',
    discountPercent: 20,
    tag: 'Honeymoon & Couples',
    description: 'Create timeless memories with a candlelit seaside dinner, signature 60-minute couples massage, and celebratory champagne.',
    perks: ['20% Off Suite Bookings', '60-Minute Couples Aromatherapy', 'Three-Course Beachside Dinner']
  },
  {
    id: 'family-holiday',
    title: 'Family Seaside Vacation',
    discount: '25% Off Second Room',
    promoCode: 'FAMILY25',
    discountPercent: 25,
    tag: 'Family Special',
    description: 'Kids under 12 stay and dine complimentary. Includes complimentary access to the waterpark and guided kids beach adventures.',
    perks: ['25% Off Connected Family Rooms', 'Kids Under 12 Eat Complimentary', 'Water Sports & Activity Passes']
  },
  {
    id: 'business-stay',
    title: 'Executive Corporate Privilege',
    discount: '10% Off + Lounge Access',
    promoCode: 'BIZ10',
    discountPercent: 10,
    tag: 'Business Travel',
    description: 'Designed for corporate dignitaries. High-speed business broadband, 2 hours boardroom usage, and express dry cleaning.',
    perks: ['10% Off Executive Suites', 'Horizon Club Executive Access', 'Complimentary Garment Pressing']
  }
];

/**
 * Gallery Items Repository
 */
const GALLERY_DATA = [
  {
    id: 1,
    title: 'Infinity Horizon Pool at Twilight',
    category: 'pool',
    categoryLabel: 'Pool & Spa',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Our signature heated horizon infinity pool seamlessly blending with the twilight ocean.'
  },
  {
    id: 2,
    title: 'Azure Oceanfront Suite Living Room',
    category: 'rooms',
    categoryLabel: 'Rooms & Suites',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    caption: 'Spacious coastal suites bathed in golden natural sunlight.'
  },
  {
    id: 3,
    title: 'The Saffron & Gold Gourmet Terrace',
    category: 'dining',
    categoryLabel: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    caption: 'Michelin-starred open-terrace culinary dining under the stars.'
  },
  {
    id: 4,
    title: 'Grand Horizon Resort Architecture',
    category: 'exterior',
    categoryLabel: 'Resort Exterior',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    caption: 'Colonial aristocratic architecture nestled in tropical palm groves.'
  },
  {
    id: 5,
    title: 'Ayurvedic Royal Spa Sanctuary',
    category: 'pool',
    categoryLabel: 'Pool & Spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    caption: 'Holistic rejuvenation with Himalayan hot stone and herbal oil therapies.'
  },
  {
    id: 6,
    title: 'Presidential Suite Master Chamber',
    category: 'rooms',
    categoryLabel: 'Rooms & Suites',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80',
    caption: 'Opulent king master bedroom featuring custom artisan brass and teak craft.'
  },
  {
    id: 7,
    title: 'Artisan Cocktails at The Starlight Lounge',
    category: 'dining',
    categoryLabel: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    caption: 'Handcrafted mixology and vintage single malts accompanied by live jazz.'
  },
  {
    id: 8,
    title: 'Private Sunset Beachfront Cabanas',
    category: 'exterior',
    categoryLabel: 'Resort Exterior',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Secluded private beach cabanas with personalized beverage butler service.'
  }
];

/**
 * Guest Testimonials Data
 */
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sophia Reynolds',
    origin: 'London, United Kingdom',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Grand Horizon redefined luxury for our family. Waking up to the soothing ocean waves in the Azure Suite and experiencing the world-class tasting menu was genuinely unforgettable.'
  },
  {
    id: 2,
    name: 'Dr. Vikram Malhotra',
    origin: 'Mumbai, India',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'From the prompt airport chauffeur greeting to the discreet 24/7 butler service, every single touchpoint reflects aristocracy and warm hospitality. The spa treatments are absolute bliss.'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    origin: 'Geneva, Switzerland',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote: 'An architectural masterpiece! The balance between serene nature and high-end elegance is sublime. The heated infinity pool overlooking the coastline is easily one of the best in Asia.'
  },
  {
    id: 4,
    name: 'Marcus Vance',
    origin: 'Sydney, Australia',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Hosted our corporate executive retreat in the Presidential Suite and boardrooms. Seamless Wi-Fi, magnificent views, and Michelin-standard dining made it an extraordinary success.'
  }
];

/* ==========================================================================
   2. APPLICATION STATE
   ========================================================================== */
const AppState = {
  theme: localStorage.getItem('gh_theme') || 'dark',
  bookings: JSON.parse(localStorage.getItem('gh_bookings') || '[]'),
  newsletterList: JSON.parse(localStorage.getItem('gh_newsletter') || '[]'),
  activeRoomFilter: 'all',
  activeRoomSort: 'featured',
  activeGalleryFilter: 'all',
  activeLightboxIndex: 0,
  activeTestimonialIndex: 0,
  testimonialInterval: null,
  pendingCancelRef: null,
  activePromoDiscount: 0,
  activePromoCode: ''
};

/* ==========================================================================
   3. UTILITY FUNCTIONS
   ========================================================================== */

/**
 * Format currency amount into Indian Rupees (INR - ₹)
 */
function formatCurrency(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

/**
 * Format date object or string into YYYY-MM-DD
 */
function formatDateToInput(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Display a floating non-intrusive Toast Notification
 */
function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconClass = 'fa-circle-info';
  if (type === 'success') iconClass = 'fa-circle-check';
  if (type === 'danger') iconClass = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <div class="toast-icon"><i class="fa-solid ${iconClass}"></i></div>
    <div class="toast-msg">${message}</div>
    <button type="button" class="toast-close" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);

  const closeToast = () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  };

  toast.querySelector('.toast-close').addEventListener('click', closeToast);
  setTimeout(closeToast, duration);
}

/* ==========================================================================
   4. THEME CONTROLLER (DARK / LIGHT MODE)
   ========================================================================== */
function initThemeController() {
  const htmlEl = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  // Apply saved or default theme
  htmlEl.setAttribute('data-theme', AppState.theme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      AppState.theme = newTheme;
      localStorage.setItem('gh_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark Navy Luxury' : 'Light Cream'} theme`, 'info', 2500);
    });
  }
}

/* ==========================================================================
   5. NAVIGATION & STICKY HEADER CONTROLLER
   ========================================================================== */
function initNavigationController() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  // Sticky transparent-to-solid transition on scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll to top button visibility
    if (scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Scroll to top action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile drawer controls
  const openDrawer = () => {
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Close mobile drawer on link click & smooth scroll
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Active section indicator using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // Quick book nav buttons trigger modal
  const navBookBtn = document.getElementById('nav-book-btn');
  const heroBookBtn = document.getElementById('hero-book-btn');
  const mobileBookBtn = document.getElementById('mobile-book-now-btn');

  [navBookBtn, heroBookBtn, mobileBookBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        closeDrawer();
        openBookingModal();
      });
    }
  });

  // Logo smooth scroll to top
  const brandLogo = document.getElementById('brand-logo');
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   6. ROOMS & SUITES ENGINE (FILTERING, SORTING, DETAILS MODAL)
   ========================================================================== */
function initRoomsEngine() {
  const roomsGrid = document.getElementById('rooms-grid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const sortSelect = document.getElementById('room-sort-select');

  // Render rooms based on filter & sort
  function renderRooms() {
    let filtered = [...ROOMS_DATA];

    // Filter
    if (AppState.activeRoomFilter !== 'all') {
      filtered = filtered.filter(room => room.category === AppState.activeRoomFilter);
    }

    // Sort
    if (AppState.activeRoomSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (AppState.activeRoomSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (AppState.activeRoomSort === 'capacity') {
      filtered.sort((a, b) => b.capacity - a.capacity);
    }

    roomsGrid.innerHTML = '';

    filtered.forEach(room => {
      const card = document.createElement('div');
      card.className = 'room-card';
      card.setAttribute('data-id', room.id);

      // Top 3 preview amenities
      const topAmenitiesHtml = room.amenities.slice(0, 3).map(a => `
        <span class="room-amenity-chip"><i class="fa-solid ${a.icon}"></i> ${a.name}</span>
      `).join('');

      card.innerHTML = `
        <div class="room-img-wrap">
          <img src="${room.image}" alt="${room.name}" class="room-img" loading="lazy" onerror="this.src='assets/images/placeholder.svg'">
          <span class="room-badge-top">${room.badge}</span>
          <div class="room-price-tag">
            <span class="room-price-amount">${formatCurrency(room.price)}</span>
            <span class="room-price-period">per night + taxes</span>
          </div>
        </div>

        <div class="room-card-body">
          <div class="room-meta-specs">
            <span><i class="fa-solid fa-expand text-gold"></i> ${room.size}</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-users text-gold"></i> Up to ${room.capacity} Guests</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-bed text-gold"></i> ${room.bedType.split(' ')[0]} Bed</span>
          </div>

          <h3 class="room-title">${room.name}</h3>
          <p class="room-desc">${room.description}</p>

          <div class="room-amenities-tags">
            ${topAmenitiesHtml}
          </div>

          <div class="room-actions">
            <button type="button" class="btn btn-outline view-room-details-btn" data-room-id="${room.id}">
              <i class="fa-solid fa-eye"></i> View Details
            </button>
            <button type="button" class="btn btn-gold book-room-now-btn" data-room-id="${room.id}">
              <i class="fa-solid fa-calendar-check"></i> Book Room
            </button>
          </div>
        </div>
      `;

      roomsGrid.appendChild(card);
    });

    // Attach click listeners to room card buttons
    attachRoomCardEvents();
  }

  function attachRoomCardEvents() {
    document.querySelectorAll('.view-room-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const roomId = e.currentTarget.getAttribute('data-room-id');
        openRoomDetailsModal(roomId);
      });
    });

    document.querySelectorAll('.book-room-now-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const roomId = e.currentTarget.getAttribute('data-room-id');
        openBookingModal({ roomId });
      });
    });
  }

  // Filter tabs click
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AppState.activeRoomFilter = tab.getAttribute('data-filter');
      renderRooms();
    });
  });

  // Sort select change
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.activeRoomSort = e.target.value;
      renderRooms();
    });
  }

  // Initial render
  renderRooms();
}

/**
 * Open Room Details Modal with comprehensive specs and perks
 */
function openRoomDetailsModal(roomId) {
  const room = ROOMS_DATA.find(r => r.id === roomId);
  if (!room) return;

  const modal = document.getElementById('room-details-modal');
  const container = document.getElementById('room-modal-content');

  const amenitiesListHtml = room.amenities.map(a => `
    <li><i class="fa-solid ${a.icon}"></i> ${a.name}</li>
  `).join('');

  container.innerHTML = `
    <div class="room-modal-gallery">
      <img src="${room.image}" alt="${room.name}" class="room-modal-img" onerror="this.src='assets/images/placeholder.svg'">
    </div>

    <div class="room-modal-grid">
      <div class="room-modal-left">
        <span class="badge badge-success mb-1">${room.badge}</span>
        <h2 class="modal-title" id="modal-room-title">${room.name}</h2>
        <p class="text-gold font-serif mt-1"><i class="fa-solid fa-compass"></i> ${room.view}</p>

        <div class="room-modal-specs-list">
          <div class="room-modal-spec-item">
            <strong>Room Size</strong>
            <span>${room.size}</span>
          </div>
          <div class="room-modal-spec-item">
            <strong>Bed Arrangement</strong>
            <span>${room.bedType}</span>
          </div>
          <div class="room-modal-spec-item">
            <strong>Maximum Capacity</strong>
            <span>${room.capacity} Adults</span>
          </div>
        </div>

        <p class="room-desc">${room.description}</p>

        <h4 class="form-section-title mt-2"><i class="fa-solid fa-sparkles"></i> Complimentary In-Suite Privileges</h4>
        <ul class="room-modal-amenities-full">
          ${amenitiesListHtml}
        </ul>
      </div>

      <div class="room-modal-right">
        <div class="room-modal-pricing-box">
          <div>
            <span class="text-muted" style="font-size:0.85rem;">Tariff from</span>
            <div style="font-family: var(--font-serif); font-size: 2.2rem; font-weight:700; color:var(--color-gold);">
              ${formatCurrency(room.price)}
            </div>
            <span class="text-muted" style="font-size:0.8rem;">per room per night + 18% GST</span>

            <div style="margin: 1.5rem 0; font-size:0.85rem; color:var(--color-text-muted);">
              <p><i class="fa-solid fa-shield-halved text-gold"></i> Free cancellation up to 24h prior to arrival.</p>
              <p><i class="fa-solid fa-utensils text-gold"></i> Includes full gourmet breakfast buffet.</p>
              <p><i class="fa-solid fa-clock text-gold"></i> Check-in 2:00 PM &bull; Check-out 12:00 PM</p>
            </div>
          </div>

          <button type="button" class="btn btn-gold w-100 modal-book-cta" id="modal-book-cta" data-room-id="${room.id}">
            <i class="fa-solid fa-key"></i> Book This Room
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach book action inside details modal
  document.getElementById('modal-book-cta').addEventListener('click', () => {
    closeModal(modal);
    openBookingModal({ roomId: room.id });
  });

  openModal(modal);
}

/* ==========================================================================
   7. SPECIAL OFFERS SECTION
   ========================================================================== */
function initOffersSection() {
  const offersGrid = document.getElementById('offers-grid');
  if (!offersGrid) return;

  offersGrid.innerHTML = '';

  OFFERS_DATA.forEach(offer => {
    const card = document.createElement('div');
    card.className = 'offer-card';

    const perksHtml = offer.perks.map(p => `
      <li><i class="fa-solid fa-circle-check"></i> ${p}</li>
    `).join('');

    card.innerHTML = `
      <div>
        <span class="offer-tag">${offer.tag}</span>
        <h3 class="offer-title">${offer.title}</h3>
        <div class="offer-discount">${offer.discount}</div>
        <p class="offer-desc">${offer.description}</p>
        <ul class="offer-perks-list">
          ${perksHtml}
        </ul>
      </div>

      <div>
        <div class="offer-code-bar">
          <span>Promo Code:</span>
          <code>${offer.promoCode}</code>
        </div>
        <button type="button" class="btn btn-outline-gold w-100 claim-offer-btn" data-promo="${offer.promoCode}">
          <i class="fa-solid fa-ticket"></i> Claim This Package
        </button>
      </div>
    `;

    offersGrid.appendChild(card);
  });

  // Claim offer triggers booking form with promo pre-filled
  document.querySelectorAll('.claim-offer-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const promo = e.currentTarget.getAttribute('data-promo');
      openBookingModal({ promoCode: promo });
    });
  });
}

/* ==========================================================================
   8. QUICK SEARCH AVAILABILITY BAR
   ========================================================================== */
function initQuickSearch() {
  const form = document.getElementById('hero-search-form');
  const checkinInput = document.getElementById('quick-checkin');
  const checkoutInput = document.getElementById('quick-checkout');
  const guestsSelect = document.getElementById('quick-guests');
  const roomsSelect = document.getElementById('quick-rooms');

  // Set minimum dates
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (checkinInput && checkoutInput) {
    checkinInput.min = formatDateToInput(today);
    checkinInput.value = formatDateToInput(today);

    checkoutInput.min = formatDateToInput(tomorrow);
    checkoutInput.value = formatDateToInput(tomorrow);

    // When check-in changes, adjust check-out min
    checkinInput.addEventListener('change', () => {
      const selectedCheckin = new Date(checkinInput.value);
      const nextDay = new Date(selectedCheckin);
      nextDay.setDate(selectedCheckin.getDate() + 1);
      checkoutInput.min = formatDateToInput(nextDay);

      if (new Date(checkoutInput.value) <= selectedCheckin) {
        checkoutInput.value = formatDateToInput(nextDay);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const checkin = checkinInput.value;
      const checkout = checkoutInput.value;
      const guests = guestsSelect.value;
      const rooms = roomsSelect.value;

      if (!checkin || !checkout) {
        showToast('Please select valid check-in and check-out dates', 'danger');
        return;
      }

      openBookingModal({
        checkin,
        checkout,
        adults: guests,
        roomsCount: rooms
      });

      showToast('Dates transferred to booking reservation form', 'success');
    });
  }
}

/* ==========================================================================
   9. INTERACTIVE BOOKING ENGINE (CALCULATIONS, VALIDATION, STORAGE)
   ========================================================================== */
function initBookingEngine() {
  const bookingModal = document.getElementById('booking-modal');
  const form = document.getElementById('booking-form');
  const roomSelect = document.getElementById('book-room');
  const checkinInput = document.getElementById('book-checkin');
  const checkoutInput = document.getElementById('book-checkout');
  const adultsSelect = document.getElementById('book-adults');
  const roomsSelect = document.getElementById('book-rooms-count');
  const promoInput = document.getElementById('book-promo');
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const promoFeedback = document.getElementById('promo-feedback');

  // Populate room select dropdown
  if (roomSelect) {
    roomSelect.innerHTML = ROOMS_DATA.map(r => `
      <option value="${r.id}" data-price="${r.price}">${r.name} — ${formatCurrency(r.price)}/night</option>
    `).join('');
  }

  // Set default dates
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (checkinInput && checkoutInput) {
    checkinInput.min = formatDateToInput(today);
    checkoutInput.min = formatDateToInput(tomorrow);

    checkinInput.addEventListener('change', () => {
      const cin = new Date(checkinInput.value);
      const minCout = new Date(cin);
      minCout.setDate(cin.getDate() + 1);
      checkoutInput.min = formatDateToInput(minCout);

      if (new Date(checkoutInput.value) <= cin) {
        checkoutInput.value = formatDateToInput(minCout);
      }
      calculateBookingSummary();
    });

    checkoutInput.addEventListener('change', calculateBookingSummary);
  }

  // Re-calculate price on inputs change
  [roomSelect, adultsSelect, roomsSelect].forEach(el => {
    if (el) el.addEventListener('change', calculateBookingSummary);
  });

  // Promo code validation logic
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', handleApplyPromoCode);
  }

  // Live calculation function
  function calculateBookingSummary() {
    const selectedRoomId = roomSelect.value;
    const room = ROOMS_DATA.find(r => r.id === selectedRoomId) || ROOMS_DATA[0];

    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);

    // Calculate nights
    let nights = 1;
    if (checkin && checkout && checkout > checkin) {
      const diffTime = Math.abs(checkout - checkin);
      nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    if (isNaN(nights) || nights < 1) nights = 1;

    const roomsCount = parseInt(roomsSelect.value, 10) || 1;
    const adultsCount = adultsSelect.value;

    // Financial breakdown
    const baseTariff = room.price * nights * roomsCount;
    const discountAmount = Math.round(baseTariff * (AppState.activePromoDiscount / 100));
    const discountedTariff = baseTariff - discountAmount;
    const taxAmount = Math.round(discountedTariff * 0.18); // 18% GST
    const estimatedTotal = discountedTariff + taxAmount;

    // Update summary UI
    document.getElementById('summary-room-name').textContent = room.name;
    document.getElementById('summary-room-rate').textContent = `${formatCurrency(room.price)} / night`;
    document.getElementById('summary-room-img').src = room.image;
    document.getElementById('summary-nights-text').textContent = `${nights} ${nights === 1 ? 'Night' : 'Nights'}`;
    document.getElementById('summary-rooms-text').textContent = `${roomsCount} ${roomsCount === 1 ? 'Room' : 'Rooms'}`;
    document.getElementById('summary-guests-text').textContent = `${adultsCount} Adults`;
    document.getElementById('summary-base-tariff').textContent = formatCurrency(baseTariff);

    const discountRow = document.getElementById('summary-discount-row');
    if (AppState.activePromoDiscount > 0) {
      discountRow.style.display = 'flex';
      document.getElementById('summary-discount-label').textContent = `${AppState.activePromoDiscount}%`;
      document.getElementById('summary-discount-val').textContent = `-${formatCurrency(discountAmount)}`;
    } else {
      discountRow.style.display = 'none';
    }

    document.getElementById('summary-tax-val').textContent = formatCurrency(taxAmount);
    document.getElementById('summary-total-val').textContent = formatCurrency(estimatedTotal);

    return {
      room,
      nights,
      roomsCount,
      adultsCount,
      baseTariff,
      discountAmount,
      taxAmount,
      estimatedTotal
    };
  }

  function handleApplyPromoCode() {
    const code = promoInput.value.trim().toUpperCase();
    if (!code) {
      promoFeedback.textContent = 'Please enter a code (e.g. HORIZON10, WEEKEND15)';
      promoFeedback.style.color = 'var(--color-warning)';
      return;
    }

    const matchedOffer = OFFERS_DATA.find(o => o.promoCode.toUpperCase() === code);

    if (matchedOffer) {
      AppState.activePromoDiscount = matchedOffer.discountPercent;
      AppState.activePromoCode = code;
      promoFeedback.textContent = `Applied! ${matchedOffer.title} (${matchedOffer.discountPercent}% off)`;
      promoFeedback.style.color = 'var(--color-success)';
      showToast(`Promo "${code}" applied: ${matchedOffer.discountPercent}% off`, 'success');
    } else if (code === 'HORIZON10') {
      AppState.activePromoDiscount = 10;
      AppState.activePromoCode = 'HORIZON10';
      promoFeedback.textContent = 'Applied! 10% Welcome Luxury Privilege discount.';
      promoFeedback.style.color = 'var(--color-success)';
      showToast('Welcome code applied: 10% discount', 'success');
    } else {
      AppState.activePromoDiscount = 0;
      AppState.activePromoCode = '';
      promoFeedback.textContent = 'Invalid promotion code. Try WEEKEND15 or HORIZON10.';
      promoFeedback.style.color = 'var(--color-danger)';
    }

    calculateBookingSummary();
  }

  // Booking Form Submission & Validation
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const guestName = document.getElementById('book-name').value.trim();
      const phone = document.getElementById('book-phone').value.trim();
      const email = document.getElementById('book-email').value.trim();
      const checkin = checkinInput.value;
      const checkout = checkoutInput.value;
      const specialRequests = document.getElementById('book-requests').value.trim();

      // Field error elements
      const nameErr = document.getElementById('book-name-error');
      const phoneErr = document.getElementById('book-phone-error');
      const emailErr = document.getElementById('book-email-error');
      const cinErr = document.getElementById('book-checkin-error');
      const coutErr = document.getElementById('book-checkout-error');

      // Reset errors
      [nameErr, phoneErr, emailErr, cinErr, coutErr].forEach(el => el.classList.remove('visible'));

      // Validate Name
      if (guestName.length < 2) {
        nameErr.classList.add('visible');
        isValid = false;
      }

      // Validate Phone (At least 10 digits)
      const phoneRegex = /^[0-9+\s-]{10,15}$/;
      if (!phoneRegex.test(phone)) {
        phoneErr.classList.add('visible');
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailErr.classList.add('visible');
        isValid = false;
      }

      // Validate Dates
      const cinDate = new Date(checkin);
      const coutDate = new Date(checkout);
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);

      if (!checkin || cinDate < todayDate) {
        cinErr.classList.add('visible');
        isValid = false;
      }

      if (!checkout || coutDate <= cinDate) {
        coutErr.classList.add('visible');
        isValid = false;
      }

      if (!isValid) {
        showToast('Please correct highlighted validation errors in the form.', 'danger');
        return;
      }

      // Calculation summary data
      const summary = calculateBookingSummary();

      // Unique Demo Reference Number (e.g. GH-2026-8491)
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      const referenceId = `GH-${new Date().getFullYear()}-${randomDigits}`;

      const newBooking = {
        refCode: referenceId,
        createdAt: new Date().toISOString(),
        guestName,
        phone,
        email,
        roomId: summary.room.id,
        roomName: summary.room.name,
        roomImage: summary.room.image,
        checkin,
        checkout,
        nights: summary.nights,
        adults: summary.adultsCount,
        children: document.getElementById('book-children').value,
        roomsCount: summary.roomsCount,
        specialRequests: specialRequests || 'None',
        promoCode: AppState.activePromoCode || 'None',
        totalPaid: summary.estimatedTotal,
        status: 'Confirmed (Demo)'
      };

      // Save to AppState and LocalStorage
      AppState.bookings.unshift(newBooking);
      localStorage.setItem('gh_bookings', JSON.stringify(AppState.bookings));

      // Update badge
      updateBookingsBadge();

      // Close booking modal
      closeModal(bookingModal);

      // Trigger Confirmation Modal
      showConfirmationModal(newBooking);

      // Reset form
      form.reset();
      AppState.activePromoDiscount = 0;
      AppState.activePromoCode = '';
      if (promoFeedback) promoFeedback.textContent = '';

      showToast(`Reservation ${referenceId} confirmed successfully!`, 'success');
    });
  }

  // Attach global open helper
  window.openBookingModal = (initialData = {}) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (initialData.roomId) {
      roomSelect.value = initialData.roomId;
    }
    if (initialData.checkin) {
      checkinInput.value = initialData.checkin;
    } else if (!checkinInput.value) {
      checkinInput.value = formatDateToInput(today);
    }

    if (initialData.checkout) {
      checkoutInput.value = initialData.checkout;
    } else if (!checkoutInput.value) {
      checkoutInput.value = formatDateToInput(tomorrow);
    }

    if (initialData.adults) {
      adultsSelect.value = initialData.adults;
    }
    if (initialData.roomsCount) {
      roomsSelect.value = initialData.roomsCount;
    }

    if (initialData.promoCode) {
      promoInput.value = initialData.promoCode;
      handleApplyPromoCode();
    }

    calculateBookingSummary();
    openModal(bookingModal);
  };
}

/**
 * Display the Booking Confirmation & Voucher Modal
 */
function showConfirmationModal(booking) {
  const modal = document.getElementById('confirmation-modal');

  document.getElementById('voucher-ref-code').textContent = booking.refCode;
  document.getElementById('voucher-guest-name').textContent = booking.guestName;
  document.getElementById('voucher-room-name').textContent = booking.roomName;
  document.getElementById('voucher-checkin').textContent = booking.checkin;
  document.getElementById('voucher-checkout').textContent = booking.checkout;
  document.getElementById('voucher-occupancy').textContent = `${booking.adults} Adults, ${booking.roomsCount} Room (${booking.nights} Nights)`;
  document.getElementById('voucher-total-paid').textContent = formatCurrency(booking.totalPaid);

  openModal(modal);

  // Print voucher button
  const printBtn = document.getElementById('print-voucher-btn');
  if (printBtn) {
    printBtn.onclick = () => window.print();
  }

  // View in My Bookings button
  const viewBookingsBtn = document.getElementById('view-in-my-bookings-btn');
  if (viewBookingsBtn) {
    viewBookingsBtn.onclick = () => {
      closeModal(modal);
      openMyBookingsModal();
    };
  }
}

/* ==========================================================================
   10. MY BOOKINGS MANAGER (LOCALSTORAGE PERSISTENCE & CANCELLATION)
   ========================================================================== */
function initMyBookingsManager() {
  const openBtn = document.getElementById('open-my-bookings');
  const mobileOpenBtn = document.getElementById('mobile-my-bookings-btn');
  const modal = document.getElementById('my-bookings-modal');
  const listContainer = document.getElementById('saved-bookings-list');
  const clearAllBtn = document.getElementById('clear-all-bookings-btn');

  // Cancel Confirmation Dialog Elements
  const cancelDialog = document.getElementById('cancel-dialog-modal');
  const confirmCancelBtn = document.getElementById('confirm-cancel-btn');
  const abortCancelBtn = document.getElementById('abort-cancel-btn');
  const cancelRefText = document.getElementById('cancel-ref-text');

  function renderSavedBookings() {
    listContainer.innerHTML = '';

    if (AppState.bookings.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-bookings-box">
          <i class="fa-solid fa-hotel"></i>
          <h4>No Saved Reservations Yet</h4>
          <p>You have not made any demo bookings in this browser session. Browse our accommodations and experience the demo booking flow.</p>
          <a href="#rooms" class="btn btn-gold" id="empty-state-browse-btn">
            <i class="fa-solid fa-bed"></i> Browse Suites
          </a>
        </div>
      `;

      const browseBtn = document.getElementById('empty-state-browse-btn');
      if (browseBtn) {
        browseBtn.addEventListener('click', () => {
          closeModal(modal);
        });
      }
      return;
    }

    AppState.bookings.forEach(b => {
      const card = document.createElement('div');
      card.className = 'booking-item-card';

      card.innerHTML = `
        <div class="booking-item-meta">
          <span class="booking-item-ref"><i class="fa-solid fa-receipt"></i> ${b.refCode}</span>
          <h4 class="booking-item-room">${b.roomName}</h4>
          <span class="booking-item-dates">
            <i class="fa-regular fa-calendar"></i> ${b.checkin} to ${b.checkout} &bull; ${b.nights} ${b.nights === 1 ? 'Night' : 'Nights'}
          </span>
          <span class="text-muted" style="font-size:0.8rem;">
            Guest: <strong>${b.guestName}</strong> &bull; ${b.adults} Adults
          </span>
        </div>

        <div class="booking-item-status-col">
          <span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> ${b.status}</span>
          <div class="booking-item-price">${formatCurrency(b.totalPaid)}</div>
          <div class="booking-item-actions">
            <button type="button" class="btn btn-outline print-single-voucher-btn" data-ref="${b.refCode}" style="padding:0.4rem 0.85rem; font-size:0.75rem;">
              <i class="fa-solid fa-print"></i> Voucher
            </button>
            <button type="button" class="btn-text-danger cancel-single-booking-btn" data-ref="${b.refCode}">
              <i class="fa-regular fa-trash-can"></i> Cancel
            </button>
          </div>
        </div>
      `;

      listContainer.appendChild(card);
    });

    // Attach actions for each booking
    document.querySelectorAll('.cancel-single-booking-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const ref = e.currentTarget.getAttribute('data-ref');
        promptCancelBooking(ref);
      });
    });

    document.querySelectorAll('.print-single-voucher-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const ref = e.currentTarget.getAttribute('data-ref');
        const found = AppState.bookings.find(item => item.refCode === ref);
        if (found) {
          closeModal(modal);
          showConfirmationModal(found);
        }
      });
    });
  }

  function promptCancelBooking(refCode) {
    AppState.pendingCancelRef = refCode;
    cancelRefText.textContent = refCode;
    openModal(cancelDialog);
  }

  if (confirmCancelBtn) {
    confirmCancelBtn.addEventListener('click', () => {
      if (!AppState.pendingCancelRef) return;
      const targetRef = AppState.pendingCancelRef;

      // Filter out booking
      AppState.bookings = AppState.bookings.filter(b => b.refCode !== targetRef);
      localStorage.setItem('gh_bookings', JSON.stringify(AppState.bookings));

      updateBookingsBadge();
      renderSavedBookings();
      closeModal(cancelDialog);
      showToast(`Booking ${targetRef} has been cancelled successfully.`, 'info');
      AppState.pendingCancelRef = null;
    });
  }

  if (abortCancelBtn) {
    abortCancelBtn.addEventListener('click', () => {
      closeModal(cancelDialog);
      AppState.pendingCancelRef = null;
    });
  }

  // Clear all bookings
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      if (AppState.bookings.length === 0) return;
      if (confirm('Clear all demo reservations from browser local storage?')) {
        AppState.bookings = [];
        localStorage.removeItem('gh_bookings');
        updateBookingsBadge();
        renderSavedBookings();
        showToast('All saved demo bookings have been cleared.', 'info');
      }
    });
  }

  window.openMyBookingsModal = () => {
    renderSavedBookings();
    openModal(modal);
  };

  if (openBtn) openBtn.addEventListener('click', window.openMyBookingsModal);
  if (mobileOpenBtn) {
    mobileOpenBtn.addEventListener('click', () => {
      const mobileDrawer = document.getElementById('mobile-drawer');
      const backdrop = document.getElementById('mobile-drawer-backdrop');
      mobileDrawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
      window.openMyBookingsModal();
    });
  }

  // Footer reset link
  const footerClear = document.getElementById('footer-clear-demo-data');
  if (footerClear) {
    footerClear.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('gh_bookings');
      localStorage.removeItem('gh_newsletter');
      AppState.bookings = [];
      updateBookingsBadge();
      showToast('Local demo database has been reset to empty state.', 'info');
    });
  }

  // Initial badge update
  updateBookingsBadge();
}

/**
 * Update the reservation count badges on desktop and mobile navbar
 */
function updateBookingsBadge() {
  const count = AppState.bookings.length;
  const badge = document.getElementById('bookings-count-badge');
  const mobileBadge = document.getElementById('mobile-badge-count');

  if (badge) badge.textContent = count;
  if (mobileBadge) mobileBadge.textContent = count;
}

/* ==========================================================================
   11. GALLERY LIGHTBOX CONTROLLER
   ========================================================================== */
function initGalleryController() {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterTabs = document.querySelectorAll('.gallery-tab');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentGalleryList = [...GALLERY_DATA];

  function renderGallery() {
    if (AppState.activeGalleryFilter === 'all') {
      currentGalleryList = [...GALLERY_DATA];
    } else {
      currentGalleryList = GALLERY_DATA.filter(g => g.category === AppState.activeGalleryFilter);
    }

    galleryGrid.innerHTML = '';

    currentGalleryList.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.setAttribute('data-index', index);

      el.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='assets/images/placeholder.svg'">
        <div class="gallery-zoom-icon"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
        <div class="gallery-item-overlay">
          <h4 class="gallery-item-title">${item.title}</h4>
          <span class="gallery-item-category">${item.categoryLabel}</span>
        </div>
      `;

      el.addEventListener('click', () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(el);
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AppState.activeGalleryFilter = tab.getAttribute('data-gallery-filter');
      renderGallery();
    });
  });

  function openLightbox(index) {
    AppState.activeLightboxIndex = index;
    updateLightboxContent();
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = currentGalleryList[AppState.activeLightboxIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxTitle.textContent = item.title;
    lightboxCategory.textContent = item.categoryLabel;
    lightboxCounter.textContent = `${AppState.activeLightboxIndex + 1} / ${currentGalleryList.length}`;
  }

  function showNextImage() {
    AppState.activeLightboxIndex = (AppState.activeLightboxIndex + 1) % currentGalleryList.length;
    updateLightboxContent();
  }

  function showPrevImage() {
    AppState.activeLightboxIndex = (AppState.activeLightboxIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
    updateLightboxContent();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNextImage);
  if (prevBtn) prevBtn.addEventListener('click', showPrevImage);

  // Close lightbox on backdrop click
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight
  window.addEventListener('keydown', (e) => {
    if (!lightbox.hasAttribute('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    }
  });

  renderGallery();
}

/* ==========================================================================
   12. TESTIMONIALS AUTOPLAY CAROUSEL
   ========================================================================== */
function initTestimonialsCarousel() {
  const track = document.getElementById('testimonial-track');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const wrapper = document.getElementById('testimonial-carousel-wrapper');

  if (!track || !dotsContainer) return;

  // Build slides
  track.innerHTML = '';
  dotsContainer.innerHTML = '';

  TESTIMONIALS_DATA.forEach((t, i) => {
    const slide = document.createElement('div');
    slide.className = 'testimonial-slide';

    const starsHtml = Array(t.rating).fill('<i class="fa-solid fa-star"></i>').join('');

    slide.innerHTML = `
      <div class="testimonial-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
      <div class="testimonial-stars">${starsHtml}</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy" onerror="this.src='assets/images/placeholder.svg'">
        <div class="author-info">
          <h5 class="author-name">${t.name}</h5>
          <span class="author-origin">${t.origin}</span>
        </div>
      </div>
    `;

    track.appendChild(slide);

    // Indicator dot
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    AppState.activeTestimonialIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    const nextIdx = (AppState.activeTestimonialIndex + 1) % TESTIMONIALS_DATA.length;
    goToSlide(nextIdx);
  }

  function prevSlide() {
    const prevIdx = (AppState.activeTestimonialIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
    goToSlide(prevIdx);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Autoplay with hover pause
  function startAutoplay() {
    stopAutoplay();
    AppState.testimonialInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (AppState.testimonialInterval) {
      clearInterval(AppState.testimonialInterval);
      AppState.testimonialInterval = null;
    }
  }

  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();
}

/* ==========================================================================
   13. STATS NUMBER COUNTER ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const statsSection = document.getElementById('stats-section');
  if (!statsSection) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);

  function animateCounters() {
    const counters = statsSection.querySelectorAll('.stat-number');
    const speed = 60; // Lower is faster

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const step = Math.ceil(target / speed) || 1;

      const updateCount = () => {
        count += step;
        if (count < target) {
          counter.textContent = count;
          setTimeout(updateCount, 25);
        } else {
          counter.textContent = target;
        }
      };

      updateCount();
    });
  }
}

/* ==========================================================================
   14. CONTACT FORM & NEWSLETTER SUBSCRIPTION
   ========================================================================== */
function initFormsHandler() {
  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value.trim();

      const nameErr = document.getElementById('name-error');
      const emailErr = document.getElementById('email-error');
      const subjErr = document.getElementById('subject-error');
      const msgErr = document.getElementById('message-error');

      [nameErr, emailErr, subjErr, msgErr].forEach(el => el.classList.remove('visible'));

      let isValid = true;
      if (!name) { nameErr.classList.add('visible'); isValid = false; }
      if (!email || !email.includes('@')) { emailErr.classList.add('visible'); isValid = false; }
      if (!subject) { subjErr.classList.add('visible'); isValid = false; }
      if (message.length < 10) { msgErr.classList.add('visible'); isValid = false; }

      if (!isValid) {
        showToast('Please fill all required fields correctly', 'danger');
        return;
      }

      showToast(`Thank you, ${name}! Your inquiry regarding "${subject}" has been received (Demo).`, 'success');
      contactForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const errorEl = document.getElementById('newsletter-error');
      const email = emailInput.value.trim();

      errorEl.classList.remove('visible');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorEl.classList.add('visible');
        return;
      }

      // Save demo subscriber in LocalStorage
      if (!AppState.newsletterList.includes(email)) {
        AppState.newsletterList.push(email);
        localStorage.setItem('gh_newsletter', JSON.stringify(AppState.newsletterList));
      }

      showToast('Welcome to The Horizon Journal! Check your inbox for seasonal privileges (Demo).', 'success');
      emailInput.value = '';
    });
  }
}

/* ==========================================================================
   15. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   16. MODAL HELPERS (GENERIC OPEN / CLOSE & TRAPPING)
   ========================================================================== */
function openModal(modal) {
  if (!modal) return;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  // Focus trap / escape key listener
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      closeModal(modal);
      window.removeEventListener('keydown', handleKeydown);
    }
  };
  window.addEventListener('keydown', handleKeydown);
}

function closeModal(modal) {
  if (!modal) return;
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function initModalClosers() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    // Backdrop click closes modal
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    // Close buttons inside modal
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal(modal);
      });
    }
  });
}

/* ==========================================================================
   17. INITIALIZATION ENTRY POINT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all controllers in sequence
  initThemeController();
  initNavigationController();
  initQuickSearch();
  initRoomsEngine();
  initOffersSection();
  initBookingEngine();
  initMyBookingsManager();
  initGalleryController();
  initTestimonialsCarousel();
  initStatsCounter();
  initFormsHandler();
  initScrollReveal();
  initModalClosers();

  // Handle footer category clicks that pre-filter rooms
  document.querySelectorAll('[data-preselect]').forEach(link => {
    link.addEventListener('click', (e) => {
      const category = e.currentTarget.getAttribute('data-preselect');
      const targetTab = document.querySelector(`.filter-tab[data-filter="${category}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  // Welcome demonstration message
  setTimeout(() => {
    showToast('Welcome to Grand Horizon – Luxury Stay & Resort! Explore our live demo booking engine.', 'info', 5000);
  }, 1000);
});
