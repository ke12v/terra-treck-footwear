import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Sidebar } from "@/components/sidebar";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

// Product Images
import mudLineImg from "@/assets/products/mud-line-trail.png";
import ridgeSummitImg from "@/assets/products/ridge-summit-pro.png";
import canyonGripImg from "@/assets/products/canyon-grip-low.png";
import urbanTrekImg from "@/assets/products/urban-trek-mid.png";
import stormguardImg from "@/assets/products/stormguard-gtx.png";
import forestlineImg from "@/assets/products/forestline-classic.png";

// Brand Images
import aboutHeroImg from "@/assets/brand/about-hero.png";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItem, setAddedItem] = useState<number | null>(null);

  const handleAddToCart = (product: any, index: number) => {
    // Persistent cart using localStorage for "functional only" feel without a DB
    const savedItems = JSON.parse(localStorage.getItem('terra_treck_cart_items') || '[]');
    const existingItemIndex = savedItems.findIndex((item: any) => item.name === product.name);
    
    let newItems;
    if (existingItemIndex > -1) {
      newItems = [...savedItems];
      newItems[existingItemIndex].quantity = (newItems[existingItemIndex].quantity || 1) + 1;
    } else {
      newItems = [...savedItems, { 
        ...product, 
        quantity: 1,
        selectedSize: Array.isArray(product.sizes) ? product.sizes[0] : product.sizes,
        selectedColor: Array.isArray(product.colors) ? product.colors[0] : "Original"
      }];
    }

    localStorage.setItem('terra_treck_cart_items', JSON.stringify(newItems));
    const newCount = newItems.reduce((acc: number, item: any) => acc + (item.quantity || 1), 0);
    localStorage.setItem('terra_treck_cart_count', newCount.toString());
    
    setCartCount(newCount);
    setAddedItem(index);
    setTimeout(() => setAddedItem(null), 2000);
    
    // Custom event to update navbar
    const event = new CustomEvent('cartUpdated', { detail: newCount });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    // Initial load from localStorage
    const savedCount = parseInt(localStorage.getItem('terra_treck_cart_count') || '0');
    setCartCount(savedCount);
    
    // Initial event for navbar if it mounts later
    const event = new CustomEvent('cartUpdated', { detail: savedCount });
    window.dispatchEvent(event);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Shop Section */}
        <section id="shop" className="bg-cream-100 py-24 border-b border-forest-800/5">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-1 w-8 bg-primary" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Gear for the Archipelago</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-black text-forest-900 tracking-tighter mb-6">
                  Shop Terra Treck Leather Boots
                </h2>
                <p className="text-forest-800/70 text-lg leading-relaxed">
                  Handcrafted hiking boots engineered for Philippine trails, from the muddy slopes of Mt. Makiling to the rocky summits of Mt. Pulag. Every pair is built to endure our tropical humidity and provide elite-level grip.
                </p>
              </div>
            </div>
            
            {/* Keeping the previously built 3-column grid structure as reference, but simplified for this request */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 mt-16">
              {[
                { 
                  name: "Mud Line Trail", 
                  desc: "Aggressive grip for swampy paths", 
                  price: "₱3,450", 
                  sizes: ["7", "8", "9", "10", "11"], 
                  colors: ["Deep Tan", "Rugged Brown"],
                  leather: "Premium leather upper", 
                  waterproof: "IPX6 Waterproof", 
                  outsole: "Vibram® Mud-Shedder / 6mm Lugs",
                  badge: "Best for Mud Trails",
                  rating: 4.8,
                  reviews: 124,
                  image: mudLineImg
                },
                { 
                  name: "Ridge Summit Pro", 
                  desc: "Reinforced support for technical peaks", 
                  price: "₱4,500", 
                  sizes: ["8", "9", "10", "11", "12"], 
                  colors: ["Dark Forest", "Shadow Black"],
                  leather: "Premium leather upper", 
                  waterproof: "Gore-Tex Extreme", 
                  outsole: "Megagrip Alpine / 5mm Lugs",
                  badge: "Waterproof",
                  rating: 4.9,
                  reviews: 86,
                  image: ridgeSummitImg
                },
                { 
                  name: "Canyon Grip Low", 
                  desc: "Versatile hiker for dry riverbeds", 
                  price: "₱2,750", 
                  sizes: ["6", "7", "8", "9", "10", "11"], 
                  colors: ["Ochre", "Earth"],
                  leather: "Premium leather upper", 
                  waterproof: "Water Resistant", 
                  outsole: "Canyon-Claw / 4mm Lugs",
                  badge: "Wide Fit",
                  rating: 4.7,
                  reviews: 215,
                  image: canyonGripImg
                },
                { 
                  name: "Urban Trek Mid", 
                  desc: "Polished leather for city walks", 
                  price: "₱3,100", 
                  sizes: ["7", "8", "9", "10", "11"], 
                  colors: ["Jet Black", "Midnight Blue"],
                  leather: "Premium leather upper", 
                  waterproof: "Splash Guard", 
                  outsole: "City-Trail Hybrid / 3mm Lugs",
                  badge: "City & Trail",
                  rating: 4.6,
                  reviews: 158,
                  image: urbanTrekImg
                },
                { 
                  name: "Stormguard GTX", 
                  desc: "Gore-Tex lined for extreme rains", 
                  price: "₱4,800", 
                  sizes: ["8", "9", "10", "11", "12", "13"], 
                  colors: ["Slate", "Obsidian"],
                  leather: "Premium leather upper", 
                  waterproof: "Gore-Tex Ultimate", 
                  outsole: "Storm-Trak / 6.5mm Lugs",
                  badge: "Waterproof",
                  rating: 4.9,
                  reviews: 92,
                  image: stormguardImg
                },
                { 
                  name: "Forestline Classic", 
                  desc: "Heritage design for woodland exploration", 
                  price: "₱3,200", 
                  sizes: ["7", "8", "9", "10", "11", "12"], 
                  colors: ["Moss", "Oak"],
                  leather: "Premium leather upper", 
                  waterproof: "Waxed Shield", 
                  outsole: "Heritage Trail / 4.5mm Lugs",
                  badge: "Best for Woods",
                  rating: 4.8,
                  reviews: 143,
                  image: forestlineImg
                }
              ].map((product, i) => (
                <div key={i} className="group flex flex-col h-full bg-white ring-1 ring-forest-800/5 transition-all hover:shadow-2xl" data-testid={`card-shop-item-${i}`}>
                  <div className="relative aspect-[4/5] bg-cream-50 overflow-hidden">
                    <img 
                      src={product.image} 
                      className="w-full h-full object-cover object-bottom scale-100 transition-transform duration-700 group-hover:scale-110"
                      alt={product.name}
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <div className="bg-primary px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white">
                        {product.badge}
                      </div>
                      <div className="bg-white/90 backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-widest text-forest-900 border border-forest-800/10">
                        {product.waterproof}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <h3 className="font-heading text-2xl font-black text-forest-900 tracking-tighter leading-none group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-1.5 pt-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className={`h-3 w-3 ${s <= Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'}`} />
                              ))}
                            </div>
                            <span className="text-[10px] font-bold text-forest-800/40 uppercase tracking-widest">{product.rating} ({product.reviews} reviews)</span>
                          </div>
                          <p className="text-xs font-bold text-forest-800/60 uppercase tracking-wide italic pt-1">{product.desc}</p>
                        </div>
                        <span className="font-heading text-xl font-black text-forest-900">{product.price}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest">
                        <div className="space-y-1">
                          <p className="text-primary/60">Leather</p>
                          <p className="text-forest-900">{product.leather}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-primary/60">Outsole</p>
                          <p className="text-forest-900">{product.outsole}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-forest-800/10">
                      <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        <span>Available Sizes</span>
                        <span className="text-forest-900">US {Array.isArray(product.sizes) ? product.sizes.join(', ') : product.sizes}</span>
                      </div>
                      
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-[9px] font-bold text-forest-800/70">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                          Ships nationwide in 3–5 days
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-forest-800/70">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                          Free shipping over ₱3,000
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-forest-800/70">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                          30-Day Trail Test - Free size exchange
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-forest-800/70 italic">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                          Secure checkout - COD available in selected areas
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        onClick={() => handleAddToCart(product, i)}
                        className="w-full bg-primary hover:bg-clay-600 text-white font-black uppercase tracking-[0.2em] rounded-full py-7 text-[10px] transition-all relative overflow-hidden"
                      >
                        {addedItem === i ? (
                          <span className="flex items-center gap-2 animate-in zoom-in duration-300">
                            <CheckCircle2 className="h-4 w-4" />
                            Added to cart
                          </span>
                        ) : (
                          "Add to Cart"
                        )}
                      </Button>
                      <Link href={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`}>
                        <Button 
                          variant="outline"
                          className="w-full border-forest-900 text-forest-900 hover:bg-forest-50 font-black uppercase tracking-[0.2em] rounded-full py-7 text-[10px] transition-all"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section id="collections" className="bg-white py-24 border-b border-forest-800/5">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Curated Series</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-forest-900 tracking-tighter mb-12">
              Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-[16/9] bg-cream-50 flex items-center justify-center border-2 border-dashed border-forest-800/10 grayscale opacity-50">
                <span className="text-xs font-black uppercase tracking-widest text-forest-800/40 italic">Coming Soon: The Cordillera Series</span>
              </div>
              <div className="aspect-[16/9] bg-cream-50 flex items-center justify-center border-2 border-dashed border-forest-800/10 grayscale opacity-50">
                <span className="text-xs font-black uppercase tracking-widest text-forest-800/40 italic">Coming Soon: Summit Expedition</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-cream-50 py-24 border-b border-forest-800/5">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2">
                  <div className="h-1 w-8 bg-primary" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Our Legacy</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-black text-forest-900 tracking-tighter">
                  About Terra Treck
                </h2>
                <div className="space-y-4 text-forest-800/80 text-lg leading-relaxed">
                  <p>
                    Terra Treck was born from a simple observation: the world's best hiking boots weren't designed for the unique challenges of the Philippine archipelago. 
                  </p>
                  <p>
                    From the limestone cliffs of El Nido to the mossy forests of Mt. Kitanglad, our journey began by crafting footwear that respects both the artisan and the adventurer. Every pair is meticulously handmade using sustainably sourced leather, treated specifically to withstand tropical humidity.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square bg-forest-900 overflow-hidden">
                <img 
                  src={aboutHeroImg} 
                  alt="Terra Treck Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-24">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto text-center max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Get in Touch</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-forest-900 tracking-tighter mb-8">
              Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12">
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary">Headquarters</h3>
                <p className="text-forest-900 font-bold">Buenavista Agusan del Norte</p>
                <p className="text-forest-800/60 text-sm">The Heart of Philippine Shoemaking</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary">Support</h3>
                <p className="text-forest-900 font-bold">hello@terratreck.ph</p>
                <p className="text-forest-800/60 text-sm">+63 (02) 888-TRECK</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container max-w-[1440px] px-4 md:px-8 mx-auto py-16 hidden">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Sticky on Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-fit">
              <Sidebar />
            </aside>
            
            {/* Mobile Sidebar (Should be collapsible, but for now displaying full or hidden) 
                For this mockup we focus on desktop layout, so mobile interactions simplified */}
            
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-2xl font-bold text-forest-900">New Arrivals</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Showing 6 products</span>
                </div>
              </div>
              
              <ProductGrid />
            </div>
          </div>
        </section>

        {/* Brand Section */}
        <section className="bg-forest-900 text-cream-50 py-24">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Handcrafted for Philippine Peaks</h2>
            <p className="max-w-2xl mx-auto text-white/80 text-lg mb-16 leading-relaxed">
              Every pair of Terra Treck shoes is meticulously handmade in the Philippines using premium local and imported leather, tested on the rugged trails of Mt. Pulag and Mt. Apo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
              <div className="p-8 bg-white/5 border border-white/10 rounded-none backdrop-blur-sm transition-all hover:bg-white/10">
                <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-wider">Lifetime Warranty</h3>
                <p className="text-white/70 leading-relaxed">We take pride in our Filipino craftsmanship. If your shoes ever fail due to a manufacturing defect, we'll repair them for free, forever.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-none backdrop-blur-sm transition-all hover:bg-white/10">
                <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-wider">Sustainable Leather</h3>
                <p className="text-white/70 leading-relaxed">We source our leather from certified ethical tanneries, ensuring every hide is vegetable-tanned to handle our tropical humidity and harsh rains.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-none backdrop-blur-sm transition-all hover:bg-white/10">
                <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-wider">30-Day Trail Test</h3>
                <p className="text-white/70 leading-relaxed">Take them from the city to the summit. If they don't provide the grip and comfort you need on our local trails, send them back for a full refund.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest-900 border-t border-white/10 py-16 text-white/60 text-sm">
        <div className="container max-w-[1440px] px-4 md:px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="font-heading font-bold text-white text-lg tracking-wider">TERRA TRECK</p>
            <p>© 2026 Terra Treck Philippines. Built for the Archipelago.</p>
          </div>
          <div className="flex gap-10 items-center">
            <a href="#" className="hover:text-primary transition-colors font-bold uppercase tracking-widest text-[10px]">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors font-bold uppercase tracking-widest text-[10px]">Terms of Service</a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors font-bold uppercase tracking-widest text-[10px]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.62 0 3.055.189 3.055.189v3.374h-1.728c-1.51 0-1.79.683-1.79 1.645v2.35h3.8l-.61 3.667h-3.19v7.98h-4.79z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
