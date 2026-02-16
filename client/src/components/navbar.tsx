import { Link, useLocation } from "wouter";
import { ShoppingCart, Menu, Search, X, MapPin, Info, Phone, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import logo from "@assets/logo_(2)_1769062886802.png";

export function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Initial load
    const savedCount = parseInt(localStorage.getItem('terra_treck_cart_count') || '0');
    setCartCount(savedCount);

    const handleCartUpdate = (e: any) => {
      setCartCount(e.detail);
    };
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const [searchResults, setSearchQueryResults] = useState<any[]>([]);

  const PRODUCTS_LIST = [
    { name: "Mud Line Trail", slug: "mud-line-trail" },
    { name: "Ridge Summit Pro", slug: "ridge-summit-pro" },
    { name: "Canyon Grip Low", slug: "canyon-grip-low" },
    { name: "Urban Trek Mid", slug: "urban-trek-mid" },
    { name: "Stormguard GTX", slug: "stormguard-gtx" },
    { name: "Forestline Classic", slug: "forestline-classic" },
    { name: "AlpineGuard GTX", slug: "alpineguard-gtx" },
  ];

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = PRODUCTS_LIST.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchQueryResults(filtered);
    } else {
      setSearchQueryResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      setLocation(`/product/${searchResults[0].slug}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: 'Collections', href: '/#collections', icon: LayoutGrid },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-forest-800/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-20 max-w-[1440px] items-center justify-between px-4 md:px-8 mx-auto">
        {/* Search Overlay */}
        <div className={`absolute inset-0 bg-background z-50 transition-all duration-300 flex flex-col px-4 md:px-8 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex h-20 items-center gap-4 w-full max-w-[1440px] mx-auto">
            <Search className="h-5 w-5 text-forest-800/40" />
            <form onSubmit={handleSearch} className="flex-1">
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search for boots (e.g. Mud Line, GTX...)" 
                className="w-full bg-transparent border-none focus:ring-0 text-lg font-bold text-forest-900 placeholder:text-forest-800/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Button type="button" variant="ghost" size="icon" onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }} className="text-forest-800 hover:bg-forest-800/5">
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          {searchResults.length > 0 && (
            <div className="w-full max-w-[1440px] mx-auto bg-white border border-forest-800/5 shadow-2xl divide-y divide-forest-800/5">
              {searchResults.map((result) => (
                <button
                  key={result.slug}
                  onClick={() => {
                    setLocation(`/product/${result.slug}`);
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="w-full px-8 py-4 text-left hover:bg-cream-50 flex items-center justify-between group transition-colors"
                >
                  <span className="font-heading font-black text-forest-900 uppercase tracking-tight">{result.name}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Product</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <img src={logo} alt="Terra Treck" className="h-12 w-auto object-contain" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <button 
              onClick={() => {
                if (window.location.pathname !== '/') {
                  window.location.href = '/#shop';
                } else {
                  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              Shop
            </button>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="flex text-forest-800 hover:bg-forest-800/5" 
            onClick={() => setIsSearchOpen(true)}
            data-testid="button-search"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Link href="/cart">
            <Button variant="outline" className="hidden md:flex gap-3 rounded-full border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white px-6 h-11 transition-all" data-testid="button-cart">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Cart ({cartCount})</span>
            </Button>
          </Link>

          <Link href="/cart" className="md:hidden">
            <Button variant="ghost" size="icon" className="text-forest-800 relative" data-testid="button-cart-mobile">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-forest-800">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-cream-50 border-l border-forest-800/10 p-0">
              <SheetHeader className="p-6 border-b border-forest-800/10">
                <SheetTitle className="text-left font-heading font-black text-2xl uppercase tracking-tighter text-forest-900">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 flex items-center gap-4 text-sm font-black uppercase tracking-widest text-forest-900 hover:bg-forest-800/5 transition-colors">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Home
                </Link>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#shop';
                    } else {
                      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-4 flex items-center gap-4 text-sm font-black uppercase tracking-widest text-forest-900 hover:bg-forest-800/5 transition-colors text-left"
                >
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Shop
                </button>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-4 flex items-center gap-4 text-sm font-black uppercase tracking-widest text-forest-900 hover:bg-forest-800/5 transition-colors"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    {link.name}
                  </Link>
                ))}
                <div className="mt-8 px-6 pt-8 border-t border-forest-800/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-forest-800/40 mb-4">Support</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-bold text-forest-800 flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary" />
                      Buenavista, Agusan del Norte
                    </p>
                    <p className="text-xs font-bold text-forest-800 flex items-center gap-2">
                      <Phone className="h-3 w-3 text-primary" />
                      +63 (085) 123-4567
                    </p>
                    <Link href="/wireframe" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-primary mt-4 hover:underline">
                      View Site Wireframe
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
