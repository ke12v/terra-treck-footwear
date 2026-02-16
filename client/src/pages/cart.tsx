import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag, ArrowLeft, Plus, Minus } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('terra_treck_cart_items') || '[]');
    setCartItems(savedCart);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQuantity = (index: number, delta: number) => {
    const newCart = [...cartItems];
    newCart[index].quantity = Math.max(1, (newCart[index].quantity || 1) + delta);
    saveCart(newCart);
  };

  const updateSize = (index: number, newSize: string) => {
    const newCart = [...cartItems];
    newCart[index].selectedSize = newSize;
    saveCart(newCart);
  };

  const updateColor = (index: number, newColor: string) => {
    const newCart = [...cartItems];
    newCart[index].selectedColor = newColor;
    saveCart(newCart);
  };

  const removeItem = (index: number) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    saveCart(newCart);
  };

  const saveCart = (newCart: any[]) => {
    setCartItems(newCart);
    localStorage.setItem('terra_treck_cart_items', JSON.stringify(newCart));
    const count = newCart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    localStorage.setItem('terra_treck_cart_count', count.toString());
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: count }));
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + (price * (item.quantity || 1));
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream-100 font-sans">
        <Navbar />
        <main className="container max-w-[1440px] px-4 md:px-8 mx-auto py-24 text-center">
          <div className="max-w-md mx-auto space-y-8">
            <div className="bg-white p-12 border border-forest-800/10 shadow-sm">
              <ShoppingBag className="h-16 w-16 text-forest-800/20 mx-auto mb-6" />
              <h1 className="font-heading text-3xl font-black text-forest-900 tracking-tighter mb-4">Your Cart is Empty</h1>
              <p className="text-forest-800/60 mb-8 font-medium">Looks like you haven't added any Terra Treck gear yet.</p>
              <Link href="/">
                <Button className="w-full bg-primary hover:bg-clay-600 text-white font-black uppercase tracking-widest py-8 rounded-none">
                  Start Exploring
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-100 font-sans">
      <Navbar />
      <main className="container max-w-[1440px] px-4 md:px-8 mx-auto py-12">
        <h1 className="font-heading text-4xl font-black text-forest-900 tracking-tighter mb-12">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-forest-800/10 flex gap-6 group">
                <div className="h-32 w-24 bg-cream-50 overflow-hidden flex-shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading font-black text-forest-900 uppercase tracking-tight">{item.name}</h3>
                      <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-forest-800/40">Size:</span>
                          <select 
                            value={item.selectedSize} 
                            onChange={(e) => updateSize(i, e.target.value)}
                            className="bg-transparent text-[10px] font-black uppercase border-none p-0 focus:ring-0 cursor-pointer text-forest-900"
                          >
                            {(Array.isArray(item.sizes) ? item.sizes : (typeof item.sizes === 'string' ? item.sizes.split(',') : [item.selectedSize])).map((s: string) => (
                              <option key={s} value={s}>US {s.trim()}</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-forest-800/40">Color:</span>
                          <select 
                            value={item.selectedColor} 
                            onChange={(e) => updateColor(i, e.target.value)}
                            className="bg-transparent text-[10px] font-black uppercase border-none p-0 focus:ring-0 cursor-pointer text-forest-900"
                          >
                            {(Array.isArray(item.colors) ? item.colors : (typeof item.colors === 'string' ? item.colors.split(',') : [item.selectedColor])).map((c: string) => (
                              <option key={c} value={c}>{c.trim()}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <p className="font-heading font-black text-forest-900">{item.price}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-forest-800/10">
                      <button onClick={() => updateQuantity(i, -1)} className="p-2 hover:bg-cream-50 text-forest-900"><Minus className="h-3 w-3" /></button>
                      <span className="px-4 text-xs font-black text-forest-900">{item.quantity || 1}</span>
                      <button onClick={() => updateQuantity(i, 1)} className="p-2 hover:bg-cream-50 text-forest-900"><Plus className="h-3 w-3" /></button>
                    </div>
                    <button onClick={() => removeItem(i)} className="text-forest-800/40 hover:text-destructive flex items-center gap-2 transition-colors">
                      <Trash2 className="h-4 w-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 border border-forest-800/10 space-y-6">
              <h2 className="font-heading text-xl font-black text-forest-900 uppercase tracking-tight border-b border-forest-800/10 pb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium text-forest-800/60">
                  <span>Subtotal</span>
                  <span>₱{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-forest-800/60">
                  <span>Shipping</span>
                  <span className="text-primary font-black uppercase tracking-widest text-[10px]">Free</span>
                </div>
                <div className="flex justify-between text-lg font-black text-forest-900 pt-4 border-t border-forest-800/10">
                  <span>Total</span>
                  <span>₱{subtotal.toLocaleString()}</span>
                </div>
              </div>
              <Button 
                onClick={() => {
                  localStorage.removeItem('terra_treck_cart_items');
                  localStorage.setItem('terra_treck_cart_count', '0');
                  window.dispatchEvent(new CustomEvent('cartUpdated', { detail: 0 }));
                  alert('Thank you for your order! Terra Treck will contact you soon for delivery details.');
                  window.location.href = '/';
                }}
                className="w-full bg-forest-900 hover:bg-forest-800 text-white font-black uppercase tracking-widest py-8 rounded-none"
              >
                Place Order (COD)
              </Button>
            </div>
            <Link href="/">
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-forest-800/40 hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" /> Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
