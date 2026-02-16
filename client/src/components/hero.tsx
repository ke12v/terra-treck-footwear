import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@/assets/hero-mountains.png";
import alpineGuardImg from "@/assets/products/alpineguard-gtx-v2.png";

export function Hero() {
  return (
    <section className="relative w-full h-[850px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/40 to-cream-100 z-10" />
        <img 
          src={heroBg} 
          alt="Terra Treck Mountain Range" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 max-w-[1440px] px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Branding & CTA */}
          <div className="space-y-10 text-center lg:text-left animate-in slide-in-from-left-8 duration-700">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="font-heading text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Grip the Earth.<br />Go Further.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/95 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-md">
              Engineered for the extremes. Our 2026 collection pushes the boundaries of performance leather, ensuring every step is as certain as the last.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={() => {
                  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-clay-600 text-white font-black uppercase tracking-widest px-12 py-8 text-sm rounded-none shadow-2xl transition-all hover:-translate-y-1"
                data-testid="button-shop-hero"
              >
                Shop Leather Line
              </Button>
            </div>
          </div>

          {/* Right Side: Featured Product Card */}
          <div className="flex justify-center lg:justify-end animate-in slide-in-from-right-8 duration-700 delay-200">
            <div className="w-full max-w-[420px] bg-white rounded-none shadow-[24px_24px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden group">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-50">
                <img 
                  src={alpineGuardImg} 
                  alt="AlpineGuard GTX" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <Badge className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-none border-none">
                    Featured Product
                  </Badge>
                  <Badge variant="outline" className="bg-white/90 text-forest-900 text-[10px] font-bold uppercase tracking-widest border-none backdrop-blur-md">
                    Alpine Terrain
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-heading text-3xl font-black text-forest-900 tracking-tighter leading-none">
                      AlpineGuard GTX
                    </h2>
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mt-2">GORE-TEX ULTIMATE LEATHER</p>
                  </div>
                  <p className="font-heading text-2xl font-black text-forest-900">₱4,800</p>
                </div>
                
                <p className="text-sm text-forest-800/70 font-medium leading-relaxed">
                  Sealed full-grain leather with maximum waterproof protection. Confidence-grip outsole engineered for storm climbs and rocky trails.
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-forest-900/40">Tested on Mt. Pulag</span>
                </div>

                <Link href="/product/alpineguard-gtx">
                  <Button className="w-full bg-forest-900 hover:bg-forest-800 text-white font-black uppercase tracking-[0.2em] rounded-none py-7 text-xs flex items-center justify-center gap-2 transition-all">
                    View Details <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-bounce hidden lg:flex">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-forest-900/40">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-forest-900/40 to-transparent" />
      </div>
    </section>
  );
}
