import { ArrowLeft, Home, ShoppingCart, User, Search, Star, MapPin, Phone, Shield, Truck, RotateCcw, LayoutGrid, Info, Menu, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Wireframe() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans text-forest-800 pb-24">
      <div className="max-w-[1200px] mx-auto p-8 space-y-32">
        <header className="flex justify-between items-center border-b-2 border-forest-800/10 pb-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-black uppercase tracking-tighter text-forest-900">Interactive Wireframes</h1>
            <p className="text-sm font-medium text-forest-800/60 italic">Visual flow and functional breakdown of the Terra Treck UI</p>
          </div>
          <Link href="/" className="px-8 py-3 bg-primary text-white font-black uppercase text-xs rounded-full hover:bg-clay-600 shadow-xl transition-all">
            Back to Shop
          </Link>
        </header>

        {/* Home Screen Breakdown */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-forest-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">1</div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-forest-900">Home Page Flow</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-forest-800/5 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <h3 className="font-black uppercase text-xs tracking-widest text-primary mb-2">Navigation Bar</h3>
                  <p className="text-sm font-medium text-forest-800/70">Sticky header with search and cart icons. Provides instant access to the shopping bag from any point.</p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs">
                    <ArrowRight className="h-3 w-3" /> Connects to Search Overlay & Cart Page
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-forest-800/5 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-forest-900"></div>
                  <h3 className="font-black uppercase text-xs tracking-widest text-forest-900 mb-2">Hero Section</h3>
                  <p className="text-sm font-medium text-forest-800/70">Large lifestyle image with high-contrast text. Uses a "Z-pattern" to guide users to the "Shop Now" button.</p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs">
                    <ArrowRight className="h-3 w-3" /> Smooth scroll to Product Collection
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center py-12">
              {/* Pointer Arrows */}
              <div className="absolute top-0 left-1/4 animate-pulse flex flex-col items-center">
                <div className="bg-primary text-white px-3 py-1 rounded text-[10px] font-black uppercase mb-1">Menu</div>
                <div className="w-[1px] h-12 bg-primary"></div>
              </div>
              <div className="absolute top-1/2 -left-8 animate-pulse flex items-center">
                <div className="bg-primary text-white px-3 py-1 rounded text-[10px] font-black uppercase mr-1">Hero CTA</div>
                <div className="w-12 h-[1px] bg-primary"></div>
              </div>

              <div className="w-[300px] aspect-[9/19] border-8 border-forest-900/5 rounded-[50px] p-4 bg-cream-50 shadow-2xl relative">
                <div className="flex justify-between items-center px-2 py-4 border-b border-forest-800/5">
                  <div className="h-4 w-12 bg-forest-800/10 rounded"></div>
                  <div className="flex gap-2">
                    <Search className="h-3 w-3 text-forest-800/40" />
                    <ShoppingCart className="h-3 w-3 text-forest-800/40" />
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="aspect-[4/5] bg-forest-900 rounded-2xl flex items-center justify-center p-8">
                    <div className="w-full h-full border border-white/20 rounded-xl flex items-center justify-center border-dashed">
                      <div className="bg-primary px-4 py-2 rounded-full text-[8px] font-black text-white uppercase">Primary Action</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square bg-white rounded-xl shadow-sm border border-forest-800/5"></div>
                    <div className="aspect-square bg-white rounded-xl shadow-sm border border-forest-800/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Flow */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative flex justify-center py-12 order-2 lg:order-1">
              <div className="absolute top-1/4 -right-8 animate-pulse flex items-center">
                <div className="w-12 h-[1px] bg-primary"></div>
                <div className="bg-primary text-white px-3 py-1 rounded text-[10px] font-black uppercase ml-1">Gallery</div>
              </div>
              <div className="absolute bottom-1/4 -right-12 animate-pulse flex items-center">
                <div className="w-16 h-[1px] bg-primary"></div>
                <div className="bg-primary text-white px-3 py-1 rounded text-[10px] font-black uppercase ml-1">Buy Button</div>
              </div>

              <div className="w-[300px] aspect-[9/19] border-8 border-forest-900/5 rounded-[50px] p-4 bg-cream-50 shadow-2xl relative">
                <div className="flex justify-between items-center px-2 py-4 border-b border-forest-800/5">
                  <ArrowLeft className="h-4 w-4 text-forest-800/60" />
                  <div className="h-3 w-20 bg-forest-800/10 rounded"></div>
                  <div className="w-4 h-4"></div>
                </div>
                <div className="mt-4 space-y-6">
                  <div className="aspect-square bg-white rounded-3xl shadow-sm flex items-center justify-center">
                    <div className="w-1/2 h-1/2 bg-cream-100 rounded-full border border-forest-800/5 border-dashed"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-6 w-3/4 bg-forest-900/10 rounded"></div>
                    <div className="h-4 w-1/4 bg-primary/20 rounded"></div>
                    <div className="flex gap-2">
                       <div className="w-8 h-8 rounded-lg bg-white border border-forest-800/10"></div>
                       <div className="w-8 h-8 rounded-lg bg-white border border-forest-800/10"></div>
                       <div className="w-8 h-8 rounded-lg bg-white border border-forest-800/10"></div>
                    </div>
                    <div className="h-14 w-full bg-primary rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest">Add to Bag</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="bg-forest-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">2</div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-forest-900">Conversion Flow</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-forest-800/5 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <h3 className="font-black uppercase text-xs tracking-widest text-primary mb-2">Visual Gallery</h3>
                  <p className="text-sm font-medium text-forest-800/70">Large product shots for visual validation. Includes quality indicators like star ratings.</p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-forest-800/5 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-forest-900"></div>
                  <h3 className="font-black uppercase text-xs tracking-widest text-forest-900 mb-2">Product Options</h3>
                  <p className="text-sm font-medium text-forest-800/70">Critical decision point. Size and color selectors are placed right above the checkout trigger.</p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs">
                    <ArrowRight className="h-3 w-3" /> Validation check before Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cart/Logistics Flow */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-forest-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">3</div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-forest-900">Checkout Logistics</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-forest-800/5 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <h3 className="font-black uppercase text-xs tracking-widest text-primary mb-2">Order Review</h3>
                  <p className="text-sm font-medium text-forest-800/70">Persistent cart items showing thumbnail, size, and price. Users can adjust quantity here.</p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-forest-800/5 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-forest-900"></div>
                  <h3 className="font-black uppercase text-xs tracking-widest text-forest-900 mb-2">Local Trust Factors</h3>
                  <p className="text-sm font-medium text-forest-800/70">Displays Cash on Delivery (COD) as the primary payment method to cater to Philippine market habits.</p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs">
                    <ArrowRight className="h-3 w-3" /> Links to order confirmation
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center py-12">
              <div className="absolute top-1/2 -left-8 animate-pulse flex items-center">
                <div className="bg-primary text-white px-3 py-1 rounded text-[10px] font-black uppercase mr-1">Cart List</div>
                <div className="w-12 h-[1px] bg-primary"></div>
              </div>
              <div className="absolute bottom-16 left-1/4 animate-pulse flex flex-col items-center">
                <div className="w-[1px] h-12 bg-primary"></div>
                <div className="bg-primary text-white px-3 py-1 rounded text-[10px] font-black uppercase mt-1">Final Total</div>
              </div>

              <div className="w-[300px] aspect-[9/19] border-8 border-forest-900/5 rounded-[50px] p-4 bg-cream-50 shadow-2xl relative">
                <div className="py-6 text-center border-b border-forest-800/5">
                  <div className="h-4 w-12 bg-forest-800/10 mx-auto rounded"></div>
                </div>
                <div className="mt-4 flex-1 space-y-4">
                  <div className="h-16 bg-white rounded-2xl border border-forest-800/5 shadow-sm p-2 flex gap-3">
                    <div className="w-12 h-12 bg-cream-100 rounded-lg shrink-0"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-2 w-3/4 bg-forest-800/10 rounded"></div>
                      <div className="h-2 w-1/4 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                  <div className="h-16 bg-white rounded-2xl border border-forest-800/5 shadow-sm p-2 flex gap-3">
                    <div className="w-12 h-12 bg-cream-100 rounded-lg shrink-0"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-2 w-3/4 bg-forest-800/10 rounded"></div>
                      <div className="h-2 w-1/4 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 border-t border-dashed border-forest-800/20 space-y-4">
                    <div className="flex justify-between">
                       <div className="h-3 w-12 bg-forest-800/10 rounded"></div>
                       <div className="h-3 w-16 bg-primary/20 rounded"></div>
                    </div>
                    <div className="h-14 w-full bg-forest-900 rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest">Confirm (COD)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-20 border-t border-forest-800/10 text-center text-[10px] font-black uppercase tracking-[1em] text-forest-800/20">
          Terra Treck • Interactive Blueprint System • 2026
        </footer>
      </div>
    </div>
  );
}
