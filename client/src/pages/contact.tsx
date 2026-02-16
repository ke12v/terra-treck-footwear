import { Navbar } from "@/components/navbar";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans">
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-forest-900 text-white py-24">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-6">Get in Touch</h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Have questions about sizing, trail testing, or our lifetime warranty? Our team in Agusan is here to help.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-24">
          <div className="container max-w-[1440px] px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <MapPin className="h-5 w-5" />
                      <h3 className="font-black uppercase tracking-widest text-xs">Visit Us</h3>
                    </div>
                    <p className="text-forest-900 font-bold">
                      Buenavista, Agusan del Norte<br />
                      Caraga Region, Philippines
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Phone className="h-5 w-5" />
                      <h3 className="font-black uppercase tracking-widest text-xs">Call Us</h3>
                    </div>
                    <p className="text-forest-900 font-bold">
                      +63 (02) 888-TRECK<br />
                      Mon - Sat, 9am - 6pm
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Mail className="h-5 w-5" />
                      <h3 className="font-black uppercase tracking-widest text-xs">Email Us</h3>
                    </div>
                    <p className="text-forest-900 font-bold">
                      hello@terratreck.ph<br />
                      support@terratreck.ph
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Clock className="h-5 w-5" />
                      <h3 className="font-black uppercase tracking-widest text-xs">Trail Support</h3>
                    </div>
                    <p className="text-forest-900 font-bold">
                      24/7 Online Assistance<br />
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="bg-forest-900 p-8 text-white relative overflow-hidden">
                  <h3 className="font-heading text-2xl font-black mb-4 relative z-10">Bulk Orders & Partnerships</h3>
                  <p className="text-white/70 mb-6 relative z-10">Looking to gear up your hiking club or mountaineering team? We offer special rates for bulk orders of 10 pairs or more.</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest-900 rounded-none relative z-10">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 md:p-12 border border-forest-800/10 shadow-2xl">
                <h2 className="font-heading text-3xl font-black text-forest-900 tracking-tighter mb-8">Send a Message</h2>
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Message sent! We will get back to you within 24 hours.');
                  (e.target as HTMLFormElement).reset();
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-forest-800/40">Full Name</label>
                      <Input placeholder="Juan Dela Cruz" className="rounded-none border-forest-800/10" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-forest-800/40">Email Address</label>
                      <Input type="email" placeholder="juan@example.com" className="rounded-none border-forest-800/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-forest-800/40">Subject</label>
                    <Input placeholder="Sizing Inquiry" className="rounded-none border-forest-800/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-forest-800/40">Message</label>
                    <Textarea placeholder="How can we help you today?" className="rounded-none border-forest-800/10 min-h-[150px]" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-clay-600 text-white font-black uppercase tracking-widest py-8 rounded-none flex items-center justify-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
