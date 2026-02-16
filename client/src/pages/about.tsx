import { Navbar } from "@/components/navbar";
import { Shield, MapPin, Mail, Phone, Clock, Award, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-forest-900 text-white py-24 relative overflow-hidden">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto relative z-10">
            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-6">Our Legacy</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Crafting premium leather footwear in the heart of the Philippines since 2020.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Shield className="w-full h-full scale-150 translate-x-1/4" />
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-heading text-4xl font-black text-forest-900 tracking-tighter">Born from the Trail</h2>
                <div className="space-y-6 text-lg text-forest-800/80 leading-relaxed">
                  <p>
                    Terra Treck started with a simple mission: to build hiking boots that could withstand the unique, rugged terrains of the Philippine archipelago. From the slippery mud of Mt. Makiling to the sharp rocks of Mt. Apo, our boots are tested where they belong.
                  </p>
                  <p>
                    Headquartered in Buenavista, Agusan del Norte, we take pride in our local roots. Every pair of Terra Treck boots is a testament to Filipino craftsmanship, combining traditional shoemaking techniques with modern performance materials.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-8 border border-forest-800/10 flex flex-col items-center text-center space-y-4">
                  <Award className="h-10 w-10 text-primary" />
                  <h3 className="font-bold text-forest-900 uppercase tracking-widest text-xs">Certified Quality</h3>
                  <p className="text-sm text-forest-800/60">Every hide is hand-inspected for durability and texture.</p>
                </div>
                <div className="bg-white p-8 border border-forest-800/10 flex flex-col items-center text-center space-y-4">
                  <Leaf className="h-10 w-10 text-primary" />
                  <h3 className="font-bold text-forest-900 uppercase tracking-widest text-xs">Sustainable</h3>
                  <p className="text-sm text-forest-800/60">Locally sourced leather treated with eco-friendly methods.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-forest-800 py-24 text-white">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto text-center max-w-3xl">
            <h2 className="font-heading text-4xl font-black mb-8 tracking-tighter italic">"Grip the Earth. Go Further."</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Our philosophy is simple: we believe that high-quality gear shouldn't just be imported. We have the skill, the materials, and the spirit right here in the Philippines to build world-class trail footwear.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
