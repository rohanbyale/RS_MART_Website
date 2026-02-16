import React, { useState, useEffect } from 'react';
import { Camera, Heart, Download, Share2, X, ChevronLeft, ChevronRight, Grid, Layout, ShoppingCart, Star, Gift, Sparkles, Filter, Search } from 'lucide-react';

export default function GiftShopGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [loaded, setLoaded] = useState(false);
  const [likedImages, setLikedImages] = useState(new Set());
  const [cart, setCart] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const giftProducts = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48',
      title: 'Handcrafted Ceramic Vase',
      category: 'Home Decor',
      price: '$45.00',
      rating: 4.8,
      likes: 234,
      isNew: true
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a',
      title: 'Luxury Scented Candles',
      category: 'Aromatherapy',
      price: '$28.00',
      rating: 4.9,
      likes: 189,
      isBestSeller: true
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      title: 'Elegant Gift Box Set',
      category: 'Gift Sets',
      price: '$65.00',
      rating: 5.0,
      likes: 312,
      isNew: true
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55',
      title: 'Artisan Jewelry Box',
      category: 'Accessories',
      price: '$52.00',
      rating: 4.7,
      likes: 267
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db',
      title: 'Premium Tea Collection',
      category: 'Food & Beverage',
      price: '$38.00',
      rating: 4.6,
      likes: 445,
      isBestSeller: true
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108',
      title: 'Decorative Photo Frame',
      category: 'Home Decor',
      price: '$35.00',
      rating: 4.5,
      likes: 523
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc',
      title: 'Handmade Wooden Puzzle',
      category: 'Games & Toys',
      price: '$42.00',
      rating: 4.9,
      likes: 678,
      isNew: true
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d',
      title: 'Personalized Notebook',
      category: 'Stationery',
      price: '$24.00',
      rating: 4.8,
      likes: 391
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13',
      title: 'Crystal Wine Glasses',
      category: 'Kitchenware',
      price: '$58.00',
      rating: 4.7,
      likes: 298,
      isBestSeller: true
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1612902376754-8d9e10d2f8d6',
      title: 'Spa Gift Basket',
      category: 'Gift Sets',
      price: '$75.00',
      rating: 5.0,
      likes: 512
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1590736969955-71cc94901144',
      title: 'Aromatherapy Diffuser',
      category: 'Aromatherapy',
      price: '$48.00',
      rating: 4.6,
      likes: 356,
      isNew: true
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1606502281004-f86cf1282af5',
      title: 'Gourmet Chocolate Box',
      category: 'Food & Beverage',
      price: '$32.00',
      rating: 4.9,
      likes: 428,
      isBestSeller: true
    }
  ];

  const categories = ['All', 'Home Decor', 'Aromatherapy', 'Gift Sets', 'Accessories', 'Food & Beverage', 'Games & Toys', 'Stationery', 'Kitchenware'];

  const filteredProducts = giftProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleCart = (id) => {
    setCart(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredProducts.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredProducts.length 
      : (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
    setSelectedImage(filteredProducts[newIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.7s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .gallery-item {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .gallery-item:hover {
          transform: translateY(-12px) scale(1.02);
        }
        
        .gallery-item img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gallery-item:hover img {
          transform: scale(1.12);
        }
        
        .like-button, .cart-button {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .like-button:active, .cart-button:active {
          transform: scale(0.8);
        }
        
        .like-button.liked, .cart-button.added {
          animation: heartBeat 0.7s ease-in-out;
        }
        
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.4); }
          50% { transform: scale(1.15); }
          75% { transform: scale(1.25); }
        }
        
        .backdrop-blur-custom {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        
        .glass-effect {
          background: rgba(250, 250, 250, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .glow-effect {
          box-shadow: 0 8px 32px rgba(0, 70, 67, 0.12), 0 0 60px rgba(0, 70, 67, 0.06);
        }
        
        .hover-glow:hover {
          box-shadow: 0 12px 48px rgba(0, 70, 67, 0.2), 0 0 80px rgba(0, 70, 67, 0.1);
        }
        
        .badge {
          animation: float 3s ease-in-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .category-btn {
          position: relative;
          overflow: hidden;
        }
        
        .category-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .category-btn:hover::before {
          left: 100%;
        }
        
        .star-rating {
          filter: drop-shadow(0 2px 4px rgba(0, 70, 67, 0.2));
        }
        
        .search-input:focus {
          box-shadow: 0 0 0 3px rgba(0, 70, 67, 0.1);
        }
      `}</style>

      {/* Header */}
      <header className={`sticky top-0 z-50 glass-effect border-b border-[#004643]/10 ${loaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#004643] to-[#006d68] flex items-center justify-center shadow-xl">
                <Gift className="w-5 h-5 sm:w-7 sm:h-7 text-[#FAFAFA]" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#004643]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  CYPRUS GIFTS
                </h1>
                <p className="text-xs sm:text-sm text-[#004643]/60 font-medium">Curated Collection</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 sm:p-2.5 rounded-xl transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-[#004643] text-[#FAFAFA] shadow-lg' 
                    : 'bg-white text-[#004643] hover:bg-[#004643]/5'
                }`}
              >
                <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 sm:p-2.5 rounded-xl transition-all ${
                  viewMode === 'masonry' 
                    ? 'bg-[#004643] text-[#FAFAFA] shadow-lg' 
                    : 'bg-white text-[#004643] hover:bg-[#004643]/5'
                }`}
              >
                <Layout className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="relative">
                <button className="p-2 sm:p-2.5 bg-[#004643] text-[#FAFAFA] rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                {cart.size > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce-in">
                    {cart.size}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#004643] via-[#005955] to-[#006d68] py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(250, 250, 250, 0.2) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <Sparkles className="w-4 h-4 text-[#FAFAFA]" />
            <span className="text-sm text-[#FAFAFA] font-medium">Premium Gift Collection 2026</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#FAFAFA] mb-6 sm:mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: '1.1' }}>
            Discover Perfect Gifts<br />
            <span className="text-[#FAFAFA]/80">For Every Occasion</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#FAFAFA]/90 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Handpicked collection of unique, artisanal gifts that bring joy and create lasting memories. Each piece is carefully curated with love.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#004643]/50" />
              <input
                type="text"
                placeholder="Search for the perfect gift..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input w-full pl-12 pr-4 py-3 sm:py-4 bg-white rounded-2xl text-[#004643] placeholder-[#004643]/40 focus:outline-none transition-all"
              />
            </div>
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-btn px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-[#004643] shadow-lg'
                    : 'bg-white/10 text-[#FAFAFA] hover:bg-white/20'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Results Count */}
        <div className={`mb-6 sm:mb-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <p className="text-[#004643]/60 text-sm sm:text-base">
            Showing <span className="font-semibold text-[#004643]">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" 
          : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8"
        }>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`gallery-item group ${loaded ? 'animate-scale-in' : 'opacity-0'} ${viewMode === 'masonry' ? 'break-inside-avoid mb-4 sm:mb-6 lg:mb-8' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer glow-effect hover-glow">
                
                {/* Badges */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="badge px-3 py-1 bg-[#004643] text-white text-xs font-bold rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="badge px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg" style={{ animationDelay: '0.5s' }}>
                      BEST SELLER
                    </span>
                  )}
                </div>

                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={`${product.url}?w=600&h=600&fit=crop`}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    onClick={() => openImage(product)}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004643]/95 via-[#004643]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#FAFAFA] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAFAFA]/80 mb-1">{product.category}</p>
                    <p className="text-xl sm:text-2xl font-bold text-[#FAFAFA] mb-4">{product.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-[#FAFAFA]">
                        <div className="flex items-center space-x-1 star-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-[#FAFAFA]/30'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-medium ml-2">{product.rating}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCart(product.id);
                          }}
                          className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all"
                        >
                          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 text-[#FAFAFA]" />
                        </button>
                        <button className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all">
                          <Share2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#FAFAFA]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Info Bar */}
                <div className="p-3 sm:p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#004643] text-sm sm:text-base mb-1 line-clamp-1">{product.title}</h4>
                      <p className="text-xs sm:text-sm text-[#004643]/50">{product.category}</p>
                    </div>
                    <button
                      onClick={() => toggleLike(product.id)}
                      className={`like-button ml-2 ${likedImages.has(product.id) ? 'liked' : ''}`}
                    >
                      <Heart
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                          likedImages.has(product.id) ? 'fill-red-500 text-red-500' : 'text-[#004643]/30'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-[#004643]/5">
                    <span className="text-lg sm:text-xl font-bold text-[#004643]">{product.price}</span>
                    <button
                      onClick={() => toggleCart(product.id)}
                      className={`cart-button px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                        cart.has(product.id)
                          ? 'bg-green-500 text-white added'
                          : 'bg-[#004643] text-[#FAFAFA] hover:bg-[#006d68]'
                      }`}
                    >
                      {cart.has(product.id) ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 sm:py-24">
            <Gift className="w-16 h-16 sm:w-20 sm:h-20 text-[#004643]/20 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#004643] mb-2">No products found</h3>
            <p className="text-[#004643]/60">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#004643]/95 backdrop-blur-custom animate-fade-in">
          <button
            onClick={closeImage}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all z-10"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7 text-[#FAFAFA]" />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-2 sm:left-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#FAFAFA]" />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-2 sm:right-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#FAFAFA]" />
          </button>

          <div className="max-w-5xl w-full animate-scale-in">
            <img
              src={`${selectedImage.url}?w=1200&h=1200&fit=crop`}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />
            
            <div className="mt-4 sm:mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {selectedImage.isNew && (
                      <span className="px-3 py-1 bg-[#FAFAFA] text-[#004643] text-xs font-bold rounded-full">NEW</span>
                    )}
                    {selectedImage.isBestSeller && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">BEST SELLER</span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FAFAFA]/80 mb-3">{selectedImage.category}</p>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            i < Math.floor(selectedImage.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-[#FAFAFA]/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[#FAFAFA] font-medium">{selectedImage.rating}</span>
                  </div>
                  
                  <p className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">{selectedImage.price}</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => toggleLike(selectedImage.id)}
                    className="flex items-center space-x-2 px-5 sm:px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedImages.has(selectedImage.id) ? 'fill-[#FAFAFA] text-[#FAFAFA]' : 'text-[#FAFAFA]'
                      }`}
                    />
                    <span className="text-sm sm:text-base text-[#FAFAFA] font-medium">
                      {selectedImage.likes + (likedImages.has(selectedImage.id) ? 1 : 0)}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => toggleCart(selectedImage.id)}
                    className={`flex items-center space-x-2 px-6 sm:px-8 py-3 rounded-xl font-medium text-sm sm:text-base transition-all ${
                      cart.has(selectedImage.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-[#FAFAFA] text-[#004643] hover:bg-white'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{cart.has(selectedImage.id) ? 'Added to Cart' : 'Add to Cart'}</span>
                  </button>
                  
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all">
                    <Share2 className="w-5 h-5 text-[#FAFAFA]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#004643] to-[#006d68] text-[#FAFAFA] py-12 sm:py-16 mt-16 sm:mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#FAFAFA] flex items-center justify-center shadow-xl">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-[#004643]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>CYPRUS GIFTS</h3>
            </div>
            <p className="text-base sm:text-lg text-[#FAFAFA]/90 mb-4 max-w-2xl mx-auto">
              Creating moments of joy, one gift at a time
            </p>
            <p className="text-sm sm:text-base text-[#FAFAFA]/70">
              Handpicked • Curated • Delivered with Love
            </p>
          </div>
          
          <div className="border-t border-[#FAFAFA]/20 pt-8 text-center">
            <p className="text-sm sm:text-base text-[#FAFAFA]/60">
              © 2026 Cyprus Gifts. All rights reserved. Made with ♥
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}