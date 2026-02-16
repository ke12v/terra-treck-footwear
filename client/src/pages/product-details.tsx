import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, Shield, Truck, RotateCcw } from "lucide-react";
import { Link, useLocation, useRoute } from "wouter";
import { useEffect, useState } from "react";

// Product Images
import mudLineImg from "@/assets/products/mud-line-trail.png";
import ridgeSummitImg from "@/assets/products/ridge-summit-pro.png";
import canyonGripImg from "@/assets/products/canyon-grip-low.png";
import urbanTrekImg from "@/assets/products/urban-trek-mid.png";
import stormguardImg from "@/assets/products/stormguard-gtx.png";
import forestlineImg from "@/assets/products/forestline-classic.png";
import alpineGuardImg from "@/assets/products/alpineguard-gtx-v2.png";

const PRODUCTS: Record<string, any> = {
  "mud-line-trail": { 
    name: "Mud Line Trail", 
    price: "₱3,450", 
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Deep Tan", "Rugged Brown"],
    leather: "Premium leather upper", 
    waterproof: "IPX6 Waterproof", 
    outsole: "Vibram® Mud-Shedder / 6mm Lugs",
    badge: "Best for Mud Trails",
    rating: 4.8,
    reviews: 124,
    image: mudLineImg,
    description: "Engineered for the wettest Philippine trails. The Mud Line Trail features an aggressive lug pattern and treated premium leather that sheds swampy debris with ease."
  },
  "ridge-summit-pro": { 
    name: "Ridge Summit Pro", 
    price: "₱4,500", 
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Slate Grey", "Forest Green"],
    leather: "Premium leather upper", 
    waterproof: "Gore-Tex Extreme", 
    outsole: "Megagrip Alpine / 5mm Lugs",
    badge: "Waterproof",
    rating: 4.9,
    reviews: 86,
    image: ridgeSummitImg,
    description: "The professional choice for technical peaks. Reinforced leather support paired with a Gore-Tex membrane ensures your feet stay dry and stable on the steepest ridges."
  },
  "canyon-grip-low": { 
    name: "Canyon Grip Low", 
    price: "₱2,750", 
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Sand", "Earth"],
    leather: "Premium leather upper", 
    waterproof: "Water Resistant", 
    outsole: "Canyon-Claw / 4mm Lugs",
    badge: "Wide Fit",
    rating: 4.7,
    reviews: 215,
    image: canyonGripImg,
    description: "A versatile, low-profile hiker built for riverbeds and dry canyons. The Canyon-Claw outsole provides exceptional grip on smooth rocks and loose gravel."
  },
  "urban-trek-mid": { 
    name: "Urban Trek Mid", 
    price: "₱3,100", 
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Obsidian", "Charcoal"],
    leather: "Premium leather upper", 
    waterproof: "Splash Guard", 
    outsole: "City-Trail Hybrid / 3mm Lugs",
    badge: "City & Trail",
    rating: 4.6,
    reviews: 158,
    image: urbanTrekImg,
    description: "Bridging the gap between the city and the trail. The Urban Trek Mid offers a polished look with hidden performance features for the modern adventurer."
  },
  "stormguard-gtx": { 
    name: "Stormguard GTX", 
    price: "₱4,800", 
    sizes: ["8", "9", "10", "11", "12", "13"],
    colors: ["Black", "Midnight Blue"],
    leather: "Premium leather upper", 
    waterproof: "Gore-Tex Ultimate", 
    outsole: "Storm-Trak / 6.5mm Lugs",
    badge: "Waterproof",
    rating: 4.9,
    reviews: 92,
    image: stormguardImg,
    description: "Maximum protection for extreme monsoon conditions. Featuring our most advanced GORE-TEX lining and heavy-duty premium leather."
  },
  "forestline-classic": { 
    name: "Forestline Classic", 
    price: "₱3,200", 
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Classic Brown", "Mahogany"],
    leather: "Premium leather upper", 
    waterproof: "Waxed Shield", 
    outsole: "Heritage Trail / 4.5mm Lugs",
    badge: "Best for Woods",
    rating: 4.8,
    reviews: 143,
    image: forestlineImg,
    description: "A heritage design for the mossy forests of the archipelago. Vegetable-tanned leather and a classic silhouette provide timeless performance."
  },
  "alpineguard-gtx": {
    name: "AlpineGuard GTX",
    price: "₱4,800",
    sizes: ["8", "9", "10", "11", "12", "13"],
    colors: ["Deep Tan", "Black"],
    leather: "GORE-TEX ULTIMATE LEATHER",
    waterproof: "Maximum Waterproof",
    outsole: "Confidence-grip / Storm-Climb",
    badge: "Featured Product",
    rating: 5.0,
    reviews: 42,
    image: alpineGuardImg,
    description: "Sealed full-grain leather with maximum waterproof protection. Confidence-grip outsole engineered for storm climbs and rocky trails. Tested on Mt. Pulag."
  }
};

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const product = params?.id ? PRODUCTS[params.id] : null;

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (product) {
      if (Array.isArray(product.sizes)) setSelectedSize(product.sizes[0]);
      else setSelectedSize(product.sizes);
      
      if (Array.isArray(product.colors)) setSelectedColor(product.colors[0]);
      else setSelectedColor("Original");
    }
  }, [product]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    const savedItems = JSON.parse(localStorage.getItem('terra_treck_cart_items') || '[]');
    const existingItemIndex = savedItems.findIndex((item: any) => 
      item.name === product.name && 
      item.selectedSize === selectedSize && 
      item.selectedColor === selectedColor
    );
    
    let newItems;
    if (existingItemIndex > -1) {
      newItems = [...savedItems];
      newItems[existingItemIndex].quantity = (newItems[existingItemIndex].quantity || 1) + 1;
    } else {
      newItems = [...savedItems, { 
        ...product, 
        quantity: 1, 
        selectedSize, 
        selectedColor 
      }];
    }

    localStorage.setItem('terra_treck_cart_items', JSON.stringify(newItems));
    const newCount = newItems.reduce((acc: number, item: any) => acc + (item.quantity || 1), 0);
    localStorage.setItem('terra_treck_cart_count', newCount.toString());
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: newCount }));
  };

  return (
    <div className="min-h-screen bg-cream-100 font-sans">
      <Navbar />
      <main className="container max-w-[1440px] px-4 md:px-8 mx-auto py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-forest-800/60 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative aspect-square bg-white shadow-2xl overflow-hidden group">
            <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="bg-primary px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                {product.badge}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`h-4 w-4 ${s <= Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'}`} />
                  ))}
                </div>
                <span className="text-sm font-bold text-forest-800/40 uppercase tracking-widest">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <h1 className="font-heading text-5xl font-black text-forest-900 tracking-tighter leading-none">
                {product.name}
              </h1>
              <p className="text-3xl font-heading font-black text-primary">{product.price}</p>
            </div>

            <p className="text-lg text-forest-800/80 leading-relaxed font-medium">
              {product.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/60">Select Size (US)</label>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(product.sizes) ? product.sizes : [product.sizes]).map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 w-12 border flex items-center justify-center text-xs font-black transition-all ${selectedSize === size ? 'bg-forest-900 text-white border-forest-900' : 'bg-white text-forest-900 border-forest-800/10 hover:border-primary'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/60">Select Color</label>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(product.colors) ? product.colors : ["Original"]).map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 h-10 border flex items-center justify-center text-xs font-black transition-all ${selectedColor === color ? 'bg-forest-900 text-white border-forest-900' : 'bg-white text-forest-900 border-forest-800/10 hover:border-primary'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-forest-800/10">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Leather Type</p>
                <p className="text-sm font-bold text-forest-900">{product.leather}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Outsole Specs</p>
                <p className="text-sm font-bold text-forest-900">{product.outsole}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Waterproof</p>
                <p className="text-sm font-bold text-forest-900">{product.waterproof}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Available Sizes</p>
                <p className="text-sm font-bold text-forest-900">US {Array.isArray(product.sizes) ? product.sizes.join("-") : product.sizes}</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button onClick={handleAddToCart} className="w-full bg-primary hover:bg-clay-600 text-white font-black uppercase tracking-[0.2em] rounded-full py-8 text-sm shadow-xl transition-all hover:-translate-y-1">
                Add to Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck className="h-6 w-6 text-primary" />
                <p className="text-[10px] font-black uppercase tracking-widest text-forest-900">Nationwide Shipping</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RotateCcw className="h-6 w-6 text-primary" />
                <p className="text-[10px] font-black uppercase tracking-widest text-forest-900">30-Day Trail Test</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Shield className="h-6 w-6 text-primary" />
                <p className="text-[10px] font-black uppercase tracking-widest text-forest-900">Lifetime Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
