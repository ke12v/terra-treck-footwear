import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  terrain: string;
  leatherType: string;
  rating: string;
  grip: number; // 1-5
  sizes: string;
  colors: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "mud-line",
    name: "Mud Line Trail",
    price: 3450,
    terrain: "Mud Trail",
    leatherType: "Full-Grain Leather",
    rating: "Waterproof",
    grip: 5,
    sizes: "7-11",
    colors: ["#5D4037", "#263238"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ridge-summit",
    name: "Ridge Summit Pro",
    price: 4500,
    terrain: "Rocky Summit",
    leatherType: "Nubuck Leather",
    rating: "GTX Waterproof",
    grip: 5,
    sizes: "8-12",
    colors: ["#3E2723", "#455A64"],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "canyon-grip",
    name: "Canyon Grip Low",
    price: 2750,
    terrain: "City Trail",
    leatherType: "Suede Leather",
    rating: "Breathable",
    grip: 4,
    sizes: "6-11",
    colors: ["#8D6E63", "#D7CCC8"],
    image: "https://images.unsplash.com/photo-1520639888713-78db115a4418?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "urban-trek",
    name: "Urban Trek Mid",
    price: 3100,
    terrain: "City Walk",
    leatherType: "Nappa Leather",
    rating: "Water Resistant",
    grip: 3,
    sizes: "7-11",
    colors: ["#212121", "#757575"],
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "stormguard",
    name: "Stormguard GTX",
    price: 4800,
    terrain: "Alpine",
    leatherType: "Oiled Full-Grain",
    rating: "Gore-Tex Pro",
    grip: 5,
    sizes: "8-13",
    colors: ["#1B5E20", "#263238"],
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "forestline",
    name: "Forestline Classic",
    price: 3200,
    terrain: "Woodland",
    leatherType: "Roughout Leather",
    rating: "Breathable",
    grip: 4,
    sizes: "7-12",
    colors: ["#4E342E", "#BF360C"],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "riverstone",
    name: "Riverstone Hiker",
    price: 3650,
    terrain: "Wet Terrain",
    leatherType: "Hydro-Bloc Leather",
    rating: "Waterproof",
    grip: 5,
    sizes: "7-11",
    colors: ["#546E7A", "#263238"],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "peakbound",
    name: "Peakbound Lite",
    price: 2950,
    terrain: "Fast Hiking",
    leatherType: "Perforated Suede",
    rating: "High Breathability",
    grip: 4,
    sizes: "6-12",
    colors: ["#A1887F", "#D7CCC8"],
    image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "boulder-grip",
    name: "Boulder Grip High",
    price: 4200,
    terrain: "Scrambling",
    leatherType: "Chrome-Free Leather",
    rating: "Waterproof",
    grip: 5,
    sizes: "8-12",
    colors: ["#3E2723", "#212121"],
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "trailrunner",
    name: "Trailrunner Hybrid",
    price: 3350,
    terrain: "Mixed Trail",
    leatherType: "Synthetic Leather",
    rating: "Quick Dry",
    grip: 4,
    sizes: "7-11",
    colors: ["#BF360C", "#263238"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=801",
  },
  {
    id: "dustpath",
    name: "Dustpath Rover",
    price: 2800,
    terrain: "Desert Trail",
    leatherType: "Sand Nubuck",
    rating: "Ventilated",
    grip: 4,
    sizes: "7-12",
    colors: ["#D7CCC8", "#A1887F"],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "highland",
    name: "Highland Trekker",
    price: 3900,
    terrain: "Moorland",
    leatherType: "Yak Leather",
    rating: "Total Protection",
    grip: 5,
    sizes: "8-13",
    colors: ["#3E2723", "#1B5E20"],
    image: "https://images.unsplash.com/photo-1520639888713-78db115a4418?auto=format&fit=crop&q=80&w=801",
  },
  {
    id: "citytrail",
    name: "CityTrail Leather",
    price: 2600,
    terrain: "Urban Explore",
    leatherType: "Pebbled Leather",
    rating: "Water Resistant",
    grip: 3,
    sizes: "6-11",
    colors: ["#212121", "#424242"],
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=801",
  },
  {
    id: "cliffside",
    name: "Cliffside Scout",
    price: 3550,
    terrain: "Technical Trail",
    leatherType: "Oiled Suede",
    rating: "Waterproof",
    grip: 5,
    sizes: "7-11",
    colors: ["#5D4037", "#455A64"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=802",
  },
  {
    id: "monsoon",
    name: "Monsoon Shield",
    price: 4300,
    terrain: "Extreme Rain",
    leatherType: "Sealed Full-Grain",
    rating: "100% Waterproof",
    grip: 5,
    sizes: "8-12",
    colors: ["#263238", "#3E2723"],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=801",
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col space-y-4" data-testid={`card-product-${product.id}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-cream-50 ring-1 ring-forest-800/5 transition-all group-hover:shadow-xl group-hover:-translate-y-1">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <Button 
          variant="secondary" 
          size="icon" 
          className="absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-all bg-white/90 hover:bg-white text-forest-900 shadow-md translate-y-2 group-hover:translate-y-0"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge variant="secondary" className="bg-white/90 text-forest-900 text-[10px] font-bold uppercase tracking-widest shadow-sm backdrop-blur-md border-none">
            {product.rating}
          </Badge>
          <Badge variant="outline" className="bg-forest-900/10 text-forest-900 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border-forest-900/20">
            {product.terrain}
          </Badge>
        </div>
      </div>

      <div className="space-y-3 px-1">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1">{product.leatherType}</p>
            <h3 className="font-heading text-xl font-bold text-forest-900 tracking-tight leading-none">{product.name}</h3>
          </div>
          <p className="font-heading text-lg font-bold text-forest-900 ml-4">${product.price}</p>
        </div>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < product.grip ? 'fill-primary text-primary' : 'text-muted'}`} />
          ))}
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Grip Rating</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-forest-800/5">
          <div className="flex gap-2">
            {product.colors.map((color, i) => (
              <div 
                key={i} 
                className="w-4 h-4 rounded-full border border-white ring-1 ring-forest-800/10 shadow-inner" 
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-[11px] font-medium text-muted-foreground">Sizes: US {product.sizes}</p>
        </div>
        
        <Button className="w-full bg-forest-900 hover:bg-forest-800 text-white rounded-md h-10 text-xs font-bold uppercase tracking-widest transition-all">
          Quick View
        </Button>
      </div>
    </div>
  );
}
