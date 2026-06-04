"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Shield } from "lucide-react";
import { supabase } from "@/lib/supabase";

const services = [
  "Soft Washing", "Pressure Washing", "House Washing", "Roof Cleaning",
  "Fence & Deck", "Gutter Cleaning", "Window Cleaning",
  "Commercial Pressure Washing", "Parking Deck Cleaning",
  "High-Rise Window Cleaning",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", address: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: err } = await supabase.from("quote_requests").insert([{
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      service_type: services.indexOf(form.service) < 7 ? "residential" : "commercial",
      address: form.address,
      message: form.message,
    }]);

    setLoading(false);
    if (err) {
      setError("Something went wrong. Please call us directly at (678) 739-5229.");
    } else {
      setSent(true);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0F1F3D] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Contact Us</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">Get a Free Quote</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours with a free, no-obligation estimate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white mb-6">Get In Touch</h2>
                <div className="space-y-5">
                  <a href="tel:+16787395229" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Phone size={20} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Call Us</div>
                      <div className="text-white font-semibold">(678) 739-5229</div>
                    </div>
                  </a>
                  <a href="mailto:info@altitudeservicesolutions.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Mail size={20} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Email Us</div>
                      <div className="text-white font-semibold text-sm">info@altitudeservicesolutions.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Service Area</div>
                      <div className="text-white font-semibold">Lawrenceville, Atlanta & Surrounding Areas</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-bold">Why Choose Us</h3>
                {[
                  { icon: Clock, text: "Same-week scheduling available" },
                  { icon: Shield, text: "Fully insured & licensed" },
                  { icon: CheckCircle, text: "100% satisfaction guarantee" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon size={18} className="text-blue-400 shrink-0" />
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-[#0F1F3D]/60 border border-green-500/30 rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Quote Request Sent!</h3>
                  <p className="text-gray-400 text-lg">
                    Thank you! We&apos;ll get back to you within 24 hours with your free estimate.
                    For urgent requests, call us at{" "}
                    <a href="tel:+16787395229" className="text-blue-400 font-semibold">(678) 739-5229</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Full Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#0A1628] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#0A1628] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#0A1628] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="(678) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Service Needed *</label>
                      <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-[#0A1628] border border-blue-900/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                        <option value="">Select a service</option>
                        <optgroup label="Residential">
                          {services.slice(0, 7).map((s) => <option key={s} value={s}>{s}</option>)}
                        </optgroup>
                        <optgroup label="Commercial">
                          {services.slice(7).map((s) => <option key={s} value={s}>{s}</option>)}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Property Address</label>
                    <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full bg-[#0A1628] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Address where service is needed" />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Additional Details</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4} className="w-full bg-[#0A1628] border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project..." />
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <button type="submit" disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-60 flex items-center justify-center gap-2">
                    {loading ? "Sending..." : <><Send size={20} /> Request Free Quote</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
